import axios from "axios";

let instance = axios.create({
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.code) {}
  return response;
});

export default instance;