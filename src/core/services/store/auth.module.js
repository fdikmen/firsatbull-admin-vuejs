import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
import Vue from "vue";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, userData) {
    return new Promise((resolve, reject) => {
      ApiService.post("/Auth/login", JSON.stringify(userData))
        .then(({data}) => {
          const user = userData
          user.token = data.token
          context.commit(SET_AUTH, user)
          resolve(data)

          // const end = window.moment(new Date(data.expiration).toLocaleString())
          // const start = window.moment(new Date().toLocaleString())
          // const different = end.window.moment().diff(start)
          // setTimeout(() => {
          //   context.dispatch('endExpiration')
          // }, different)
          // const exp = window.moment()
        })
        .catch(error => {
          reject(error)
          // context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  // [REGISTER](context, credentials) {
  //   return new Promise((resolve, reject) => {
  //     ApiService.post("/Auth/register", JSON.stringify(credentials))
  //       .then(({data}) => {
  //         const user = credentials
  //         user.token = data.token
  //         context.commit(SET_AUTH, user);
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error)
  //         // context.commit(SET_ERROR, response.data.errors);
  //       });
  //   });
  // },
  [VERIFY_AUTH]() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('id_token')) {
        resolve('OK')
      } else {
        reject('ERROR')
      }
    })
    // if (JwtService.getToken()) {
      // ApiService.setHeader();
      // ApiService.get("verify")
      //   .then(({ data }) => {
      //     context.commit(SET_AUTH, data);
      //   })
      //   .catch(({ response }) => {
      //     context.commit(SET_ERROR, response.data.errors);
      //   });
    // } else {
    //   context.commit(PURGE_AUTH);
    // }
  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  },
  endExpiration() {
    localStorage.removeItem('id_token')
    Vue.$router.push({name: "login"})
  }
};

const mutations = {
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.errors = {};
    JwtService.saveToken(user.token);
  },
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
    localStorage.removeItem('currentUser')
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
