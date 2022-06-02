import axios from "axios";

export default axios.create({
  baseURL: "https://tourist-guide-app-backend.herokuapp.com/api/v1",
});
