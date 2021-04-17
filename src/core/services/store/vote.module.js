import ApiService from '../api.service'

const state = {
	allVotes: []
};

const getters = {
  takeAllVotes(state) {
		return state.allVotes
	}
};

const actions = {
	getAllVotes({commit}) {
		ApiService.get(`/Vote/getall`).then(res => {
			commit('setAllVotes', res.data)
		}).catch(err => console.log(err))
	}
};

const mutations = {	
	setAllVotes(state, voteData) {
		state.allVotes = voteData 
	}
};

export default {
  state,
  actions,
  mutations,
  getters
};
