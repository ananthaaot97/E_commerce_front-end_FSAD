import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-222b.up.railway.app/api"
});

export default API;
