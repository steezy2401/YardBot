import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios
const API_URL = "http://localhost:8888/api"

const axiosApi = axios.create({
  baseURL: API_URL, 
  proxy: false  
  
})

axiosApi.defaults.headers.common["authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  console.log(url);
  let res = await axiosApi.get(url, { ...config }).then(response => response.data.data).catch(err => [])
  
  console.log(res);

  return res 
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
