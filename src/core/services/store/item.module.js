import ApiService from '../api.service'

const state = {
	allItems: [],
}

const getters = {
  takeAllItems(state) {
		return state.allItems
	},
}

const actions = {
	getAllItems({commit}) {
		return new Promise((resolve, reject) => {
			ApiService.get('/Item/getall')
				.then(res => {
					commit('setAllItems', res.data)
					resolve(res.data)
				})
				.catch(err => reject(err))
		})
	},
	addNewItem(context, item) {
		return new Promise((resolve, reject) => {
			ApiService.post('/Item/Add', JSON.stringify(item))
				.then(res => resolve(res))
				.catch(err => reject(err))
		})	
	},
	itemUpdate(context, item) {
		return new Promise((resolve, reject) => {
			ApiService.post('/Item/Update', JSON.stringify(item))
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
}

const mutations = {	
	setAllItems(state, itemData) {
		state.allItems = itemData
	},
}

export default {
  state,
  actions,
  mutations,
  getters
}
