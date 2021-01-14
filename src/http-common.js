import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8189/ordermanagement",
  headers: {
    "Content-type": "application/json"
  }
});