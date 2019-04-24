/**
 *
 * 全局注册组件
 *
 * @author leon
 * @createTime '2018/8/22'
 */


import Vue from 'vue';

import ContentView from '@/components/common/content.component';
import Icon from '@/components/common/icon.component';
import ResetSearch from '@/components/modules/reset-form.component'

// 页面 dom 结构
Vue.component('ContentView', ContentView);
Vue.component('ResetSearch', ResetSearch);
Vue.component('icon', Icon);
