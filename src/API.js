import axios from "axios";

const api = {
  addUsers() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  },
};

export default api;