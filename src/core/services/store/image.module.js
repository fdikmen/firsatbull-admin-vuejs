import ApiService from "@/core/services/api.service";

const state = {
  allImage: [],
}

const getters = {
  takeAllImage(state) {
    return state.allImage
  }
}

const actions = {
  addImage(context, image) {
    return new Promise((resolve, reject) => {
      ApiService.post('/Image/Add', image)
        .then((res) => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getAllImage(context) {
    return new Promise((resolve, reject) => {
      ApiService.get('/Image/getall')
      .then((res) => {
        context.commit('setAllImage', res.data)
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  getImgById(context, imgId) {
    return new Promise((resolve, reject) => {
       ApiService.get(`/Image/GetById?id=${imgId}`)
       .then((res) => {
         resolve(res)
       })
       .catch(err => {
         reject(err)
       })
     })
  }
}

const mutations = {
  setAllImage(state, images) {
    state.allImage = images
  }
}

 export default {state, getters, mutations, actions}