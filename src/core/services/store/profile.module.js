// action types
export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";

const state = {
  user_personal_info: {
    photo: "media/users/300_21.jpg",
    name: "Admin",
    surname: "ADMİN",
    company_name: "Firsatbul",
    job: "Yönetici",
    email: "admin@gmail.com",
    phone: "+90 562 02 85 23",
    company_site: "firsatbul"
  },
  user_account_info: {
    username: "Admin",
    email: "admin@gmail.com",
    language: "Türkçe",
    time_zone: "İstanbul",
    communication: {
      email: true,
      sms: true,
      phone: false
    },
    verification: true
  }
};

const getters = {
  currentUserPersonalInfo(state) {
    return state.user_personal_info;
  },

  currentUserAccountInfo(state) {
    return state.user_account_info;
  }
};

const actions = {
  [UPDATE_PERSONAL_INFO](context, payload) {
    context.commit(SET_PERSONAL_INFO, payload);
  },
  [UPDATE_ACCOUNT_INFO](context, payload) {
    context.commit(SET_ACCOUNT_INFO, payload);
  }
};

const mutations = {
  [SET_PERSONAL_INFO](state, user_personal_info) {
    state.user_personal_info = user_personal_info;
  },
  [SET_ACCOUNT_INFO](state, user_account_info) {
    state.user_account_info = user_account_info;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
