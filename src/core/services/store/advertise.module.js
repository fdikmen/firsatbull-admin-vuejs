import ApiService from "@/core/services/api.service";

const state = {
  allAdvertise: []
}

const getters = {
  takeAllAdvertise(state) {
    return state.allAdvertise
  }
}

const actions = {
  getAllAdvertise(context) {
    return new Promise((resolve, reject) => {
      ApiService.get('/Advertise/getall')
        .then(({data}) => {
          context.commit('setAllAdvertise', data)
          resolve(data)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  addNewAdvertise(context, advertise) {
    return new Promise((resolve, reject) => {
      ApiService.post('/Advertise/Add', JSON.stringify(advertise))
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  advertiseGetById(context, id) {
    return new Promise((resolve, reject) => {
      ApiService.post(`/Advertise/GetById?id=${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  updateAdvertise(context, advertise) {
    return new Promise((resolve, reject) => {
      ApiService.post('/Advertise/Update', advertise)
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
  setAllAdvertise(state, data) {
    state.allAdvertise = data
  },
}

export default { state, getters, actions, mutations }