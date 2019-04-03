"use strict";

import Vue from 'vue';
// import axios from "axios";
import { axios as _axios } from '@/api';


import UserInfoTool from './user-info-tool';
import {
    message as Message
} from 'ant-design-vue';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
export default _axios;
