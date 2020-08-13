import axios from "axios";

export default {
  getPortfolio: function () {
    return axios.get("/api/portfolio");
  },
  getStarred: function () {
    return axios.get(
      // "https://api.github.com/users/Adambear1/starred?page=1&per_page=5&client_id=b457e75c9719bdfdfd76/starred=true&client_secret=35f3055f4b29a23732ce2a18a62dc8ce9077a267"

      "/api/starred"
    );
  },
  getSkills: function () {
    return axios.get("/api/skills");
  },
};
