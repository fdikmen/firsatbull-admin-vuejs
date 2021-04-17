import ApiService from "@/core/services/api.service";

const state = {
	allUsers: [],
	allUserTypes: [],
	currentUser: {}
}

const getters = {
	takeAllUsers(state) {
		return state.allUsers
	},
	takeAllUserTypes(state) {
		return state.allUserTypes
	},
	takeCurrentUser(state) {
		return state.currentUser
	}
}

const actions = {
	getAllUsers({commit}) {
		return new Promise((resolve, reject) => {
			ApiService.get(`/User/getall`)
				.then(res => {
					commit('setAllUsers', res.data)
					resolve(res.data)
				})
				.catch(err => reject(err))
		})
	},
	deleteUser(context, user) {
		return new Promise((resolve, reject) => {
      ApiService.post("/User/Delete", JSON.stringify(user))
        .then(({data}) => {
          context.commit('setAllUsers', data);
          resolve();
        })
        .catch((error) => {
          reject(error)
          // context.commit(SET_ERROR, response.data.errors);
        });
		})
	},
	getUserId() {
		return 'see in localStorage'
	},
	userUpdate(context, user) {
		return new Promise((resolve, reject) => {
			ApiService.post('/User/Update', JSON.stringify(user))
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	addNewUserType(context, userTypeData) {
		return new Promise((resolve, reject) =>{
			ApiService.post('/UserType/Add', userTypeData)
				.then(() => {
					context.dispatch('getAllUserTypes')
					resolve()
				})
				.catch(err => reject(err))
		})
	},
	getAllUserTypes(context) {
		return new Promise((resolve, reject) =>{
			ApiService.get('/UserType/getall')
				.then((res) => {
					context.commit('setAllUserTypes', res.data)
					resolve(res)
				})
				.catch(err => reject(err))
		})
	},
	getUserTypeById(context, userTypeId) {
		return new Promise((resolve, reject) => {
			ApiService.get(`/UserType/GetById?id=${userTypeId}`)
				.then(res => {
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	deleteUserType(context, typeData) {
		return new Promise((resolve, reject) =>{
			ApiService.post('/UserType/Delete', typeData)
				.then(() => {
					context.dispatch('getAllUserTypes')
					resolve()
				})
				.catch(err => reject(err))
		})
	},

	changeUserType(context, {user, userTypeId}) {
		user.userTypeId = userTypeId
		return new Promise((resolve, reject) => {
			ApiService.post('/User/Update', user)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
		})
	}

}

const mutations = {
	setAllUsers(state, userData) {
		state.allUsers = userData
	},
	setAllUserTypes(state, userTypes) {
		state.allUserTypes = userTypes
	},
	setCurrentUser(state, currentUser) {
		state.currentUser = Object.assign({}, currentUser)
	}
}

export default {
	state,
	actions,
	mutations,
	getters
}