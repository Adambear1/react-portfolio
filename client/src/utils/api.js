import axios from "axios";

export default {
  getPortfolio: function () {
    return axios.get({
      baseURL: "/api",
    });
  },
};
