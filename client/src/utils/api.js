import axios from "axios";

export default {
  getPortfolio: function () {
    return axios.get("/api/portfolio");
  },
  getStarred: function () {
    return axios.get("/api/starred");
  },
  getSkills: function () {
    return axios.get("/api/skills");
  },
};

// http://localhost:5000
