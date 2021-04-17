import moment from 'moment'

export default function dateFilter(value) {
	return moment(value).format('DD.MM.YYYY, HH:mm:ss')
}