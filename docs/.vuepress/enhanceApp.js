/**
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-10-12 16:23:58
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-13 17:26:13
 * @FilePath: /sipa-ui/docs/.vuepress/enhanceApp.js
 * @Description:
 */
import Button from '@sipa-ui/core/components/button';
import ProcessPreview from '@sipa-ui/core/components/process-preview';
import Demo from './components/Demo.vue';
import '@sipa-ui/core/style/index.scss';

// 注册全局组件
export default ({ Vue, options, router, siteData }) => {
  // 将全局组件注册到 Vue 实例
  Vue.use(Button);
  Vue.use(ProcessPreview);
  Vue.component('Demo', Demo);
};
