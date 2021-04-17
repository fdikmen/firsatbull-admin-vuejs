import XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default class Download {
	constructor (arrayData, filename, headArray) {
		this.arrayData = arrayData
		this.filename = filename
		this.headArray = headArray
		this.EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	}

	downloadAsExel() {
		const worksheet = XLSX.utils.json_to_sheet(this.arrayData)
		const workbook = { Sheets: { 'data': worksheet}, SheetNames: ['data'] }
		const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'})
		this.saveAsExcel(excelBuffer, this.filename)
	}
	
	saveAsExcel(buffer, filename) {
		const data = new Blob([buffer], {type: this.EXCEL_TYPE})
		saveAs(data, filename + '.xlsx')
	}

	downloadAsPdf() {
		const asArray = this.arrayData.map(obj => Object.values(obj) )
		const doc = new jsPDF()
		
		doc.autoTable({
			head: [this.headArray],
			body: asArray
		})
		
		doc.save(`${this.filename}.pdf`)
	}

	copyToClipboard() {
		const asArray = this.arrayData.map(obj => Object.values(obj) )
		copy2DToClipboard(asArray);
		
		function copy2DToClipboard(array) {
			var csv = '', row, cell;
			for (row = 0; row < array.length; row++) {
				for (cell = 0; cell < array[row].length; cell++) {
					csv += (array[row][cell]+'').replace(/[\n\t]+/g, ' ');
					if (cell+1 < array[row].length) csv += '\t';
				}
				if (row+1 < array.length) csv += '\n';
			}
			copyTextToClipboard(csv);
		}
		
		function fallbackCopyTextToClipboard(text) {
			var textArea = document.createElement("textarea");
			textArea.value = text;
			
			// Avoid scrolling to bottom
			textArea.style.top = "0";
			textArea.style.left = "0";
			textArea.style.position = "fixed";
		
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
		
			try {
				var successful = document.execCommand('copy');
				var msg = successful ? 'successful' : 'unsuccessful';
				console.log('Fallback: Copying text command was ' + msg);
			} catch (err) {
				console.error('Fallback: Oops, unable to copy', err);
			}
		
			document.body.removeChild(textArea);
		}
		function copyTextToClipboard(text) {
			if (!navigator.clipboard) {
				fallbackCopyTextToClipboard(text);
				return;
			}
			navigator.clipboard.writeText(text).then(function() {
				console.log('Async: Copying to clipboard was successful!');
			}, function(err) {
				console.error('Async: Could not copy text: ', err);
			});
		}
	}
	
}