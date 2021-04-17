export default function paginationMixin(currentPage, perPage, array) {
	let from = (currentPage - 1) * perPage
	let to = from + perPage
	const pagArray = array.slice(from, to)
	return pagArray
}