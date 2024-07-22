/**
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 17:07:35
 * @FilePath: /sipa-ui/play/main.js
 * @Description:
 */
import Vue from 'vue';
import SipaUI from '@sipa-ui/core/index';
import '@sipa-ui/core/style/index.scss';
import App from './App.vue';

Vue.use(SipaUI);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
