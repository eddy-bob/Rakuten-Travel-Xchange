import Axios from "axios";

// create an new axios http instance
const url = import.meta.env.VITE_APP_SERVER;

const http = Axios.create({
  baseURL: `${url}`,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "https://hiring.zumata.xyz",
  },
});

http.defaults.headers.common.accept = "application/json";

const base_url = http.defaults.baseURL;

export { http, base_url };
