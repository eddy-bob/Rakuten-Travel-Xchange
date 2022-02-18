// import { http } from "../core/http.request";
import Axios from "axios";

class HiringService {
  // constructor(http) {
  //   this.request = http;
  // }

  /**
   * GET - Search
   * @param {*} cityCode
   * @returns --array fo matching searches
   */
  async Search(cityCode) {
    return await Axios.get(`/job01/search/${cityCode}`).then((response) => {
      return response.data;
    });
  }

  /**
   * GET - Search
   
   * @returns --array/list of suggestioned locations
   */
  async Autosuggest() {
    return await Axios.get("/job01/autosuggest").then((response) => {
      return response.data;
    });
  }
}

export default new HiringService();
