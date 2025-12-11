import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: `${API_URL}/api/employees`,
});

export default API;
