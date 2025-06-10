import axios from "axios";

const BASE_URL = "";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request();

// instance.interceptors.response();
