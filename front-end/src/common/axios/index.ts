import axios from "axios";

export const api = axios.create({
  baseURL: "https://fd-1-dscg.onrender.com",
  // "http://localhost:3008" ,
  headers: {
    "Content-Type": "application/json",
  },
});
