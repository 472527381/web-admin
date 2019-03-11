"use strict";

import Vue from 'vue';
import axios from "axios";
import router from "../router";
import UserInfoTool from './user-info-tool';
import {
    message as Message
} from 'ant-design-vue';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const _domain = process.env.VUE_APP_API_URL;


let config = {
    baseURL: _domain,
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    },
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        let _token = setToken.getToken();
        if (_token) {
            config.headers.authorization = _token;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        if (response.data.code === 200) {
            if (response.headers.authorization) {
                UserInfoTool.setItem('_token', response.headers.authorization);
            }
            return response.data.data;
        } else if (response.data.code === 401) {
            Message.error('登录失效，请重新登录');
            try {
                sessionStorage.removeItem('_token');
            } catch (error) {

            }
            router.push({
                path: '/login'
            })
        } else {
            Message.error(response.data.msg);
            return Promise.reject(new Error(response.data.msg));
        }
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);




Vue.prototype.$axios = _axios;
Vue.prototype.$baseUrl = config.baseURL;
export default _axios;
export const domain = _domain;
