/*
 * @Author: 周杰
 * @Date: 2020-02-05 20:44:19
 * @LastEditors: 周杰
 * @LastEditTime: 2020-02-05 21:16:53
 * @Description: file content
 */
import * as types from '../mutation-types'

const state = {
    aside_collapsed: false,
    is_multi_station: false,
    showAsideAndContent: false
}

const mutations = {
    // 接受一个状态 true/false
    [types.ASIDE_COLLAPSE](state, status) {
        state.aside_collapsed = status;
    },
    changeShowState(state) {
        state.showAsideAndContent = true;
    }
}

const actions = {

}

const getters = {
    aside_collapsed: state => state.aside_collapsed,
    showAsideAndContent:state => state.showAsideAndContent
}

export default {
    state,
    mutations,
    actions,
    getters
}