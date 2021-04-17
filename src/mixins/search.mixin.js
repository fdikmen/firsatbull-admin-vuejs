export default function searchMixin(value, all, searcItem) {	
	if(value === '') {
		return all
	} else {
		let searchItems = all.filter(el => el[searcItem].toLowerCase().search(value.toLowerCase()) != -1)
		return searchItems
	}
}