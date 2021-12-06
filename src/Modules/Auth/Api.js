import axios from 'axios'

const axiosinstance = axios.create({

    //baseURL
    baseURL: 'http://localhost:3000/',

    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Header': 'Origin, Content-Type, X-Requested-With, Accept, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

axiosinstance.interceptors.request.use(function (config) {
    let authorization = localStorage.getItem('auth_token')

    if (authorization) {
        config.defaults.headers['x-auth-token'] = authorization;
    }
    // else {
    // alert('deleted')
    //deleting the token from header
    // delete config.defaults.headers['x-auth-token'];
    // }

    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosinstance