import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import profile from "./profile.module";
import user from './user.module'
import item from './item.module'
import vote from './vote.module'
import image from './image.module'
import advertise from './advertise.module'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    htmlClass,
    config,
    breadcrumbs,
    profile,
    item,
    user,
    vote,
    image,
    advertise
  }
});
