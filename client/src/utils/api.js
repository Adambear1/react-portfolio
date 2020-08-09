import axios from "axios";

export default {
  getPortfolio: function () {
    return axios.get("http://localhost:5000/api/portfolio");
  },
  getStarred: function () {
    return axios.get("http://localhost:5000/api/starred");
  },
  getSkills: function () {
    return axios.get("http://localhost:5000/api/skills");
  },
};
