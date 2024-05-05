import axios from 'axios'

const axiosClient = axios.create({
    // baseURL:`${process.env.REACT_APP_API_URL}`,
    // baseURL:'https://662f83ae43b6a7dce30fc0c3.mockapi.io/products',
    baseURL:'https://jsonplaceholder.typicode.com/',
    timeout:5000,//optional
    headers: {
        'Content-Type': 'application/json',
    },
})
// Interceptors
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token'); // Or any other method of getting a token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;