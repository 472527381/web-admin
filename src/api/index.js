import Vue from 'vue';

import ApiModule from '@calvin_von/axios-api-module';

import middleWares from './middleware';

import userApi from './user.api';

const _domain = process.env.VUE_APP_API_URL;


const apiMod = new ApiModule({
    baseConfig: {
        baseURL: _domain,
        timeout: 60 * 1000, // Timeout
        withCredentials: true, // Check cross-site Access-Control
        validateStatus: function (status) {
            return status >= 200 && status < 500; // default
        }
    },
    module: true,
    apiMetas: {
        user: userApi
    }
});

apiMod.registerForeRequestMiddleWare(middleWares.foreRequestMiddleWare);
apiMod.registerFallbackMiddleWare(middleWares.fallbackMiddleWare);

const apiInstance = apiMod.getInstance();
export const axios = apiMod.getAxios();

Vue.prototype.$api = apiInstance;
