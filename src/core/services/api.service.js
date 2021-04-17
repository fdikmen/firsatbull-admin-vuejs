// import Vue from "vue";
import axios from "axios";
// import VueAxios from "vue-axios";
// import JwtService from "@/core/services/jwt.service";

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  // init() {
  //   Vue.use(VueAxios, axios);
  //   // Vue.axios.defaults.baseURL = "http://localhost:8080";
  //   // Vue.axios.defaults.baseURL = "https://www.service.clickhoop.com/api";
  // },

  /**
   * Set the default HTTP request headers
   */
  // setHeader() {
  //    Vue.axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`;
  // },
  //
  // query(resource, params) {
  //   return Vue.axios.get(resource, params).catch(error => {
  //     // console.log(error);
  //     throw new Error(`[KT] ApiService ${error}`);
  //   });
  // },

  /**
   * Send the GET HTTP request
   * @param resource
   * @param slug
   * @returns {*}
   * https://www.service.clickhoop.com
   */
  get(url) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://www.service.clickhoop.com/api" + url).catch(error => {
      throw error
    })
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   * https://www.service.clickhoop.com
   */
  post(url, data) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: data,
      url: "https://cors-anywhere.herokuapp.com/https://www.service.clickhoop.com/api" + url
    }
    return axios(options).catch(error => {
      throw error
    })
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  // update(resource, slug, params) {
  //   return Vue.axios.put(`${resource}/${slug}`, params);
  // },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  // put(resource, params) {
  //   return Vue.axios.put(`${resource}`, params);
  // },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  // delete(resource) {
  //   return Vue.axios.delete(resource).catch(error => {
  //     // console.log(error);
  //     throw new Error(`[RWV] ApiService ${error}`);
  //   });
  // }
};

export default ApiService;
