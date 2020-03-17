/*
 * @Author: 周杰
 * @Date: 2020-03-17 10:11:19
 * @LastEditors: 周杰
 * @LastEditTime: 2020-03-17 10:24:30
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    }
})

