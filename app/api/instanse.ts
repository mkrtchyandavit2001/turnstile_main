
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const instanse = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export default instanse