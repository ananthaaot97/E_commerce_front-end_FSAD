import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackendfsad-production.up.railway.app/api"
});

export default API;
