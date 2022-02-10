import axios from 'axios';


const instance = axios.create({
    // baseURL : 'http://127.0.0.1:8000/api/v1',
    // baseURL : 'https://visapickmap.com/api/v1',
    baseURL : 'https://www.rosena.ir/api/',
    timeout : 5000
});


instance.interceptors.request.use(function(config) {
    return config;
} , function(err) {
    // handle error
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response) {
    return response;
},function(err) {
    // System log
    return Promise.reject(err);
})


export default instance;