import axios from "axios";

export default {
  getPortfolio: function () {
    return axios.get("http://localhost:5000/api");
  },
};
