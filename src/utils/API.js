import axios from "axios";

const URL = "https://randomuser.me/api/?results=50&nat=us"

const apiUrl = {
    getEmployees: function() {
        return axios.get(URL);
    }
}

export default apiUrl;