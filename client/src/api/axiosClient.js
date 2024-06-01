import axios from 'axios'
import Cookies from 'js-cookie';

const csrfToken = Cookies.get('csrftoken');
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const axiosClient = axios.create({
    // baseURL:`${process.env.REACT_APP_API_URL}`,
    // baseURL:'http://127.0.0.1:8000/api/v1',
    baseURL:'http://127.0.0.1:8000/api/v1/',
    timeout:5000,//optional
    headers: {
        'Content-Type': 'application/json',
        'X-Csrftoken': csrfToken,  // Thêm CSRF token vào header
    },
})

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
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
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient;