/**
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 17:28:23
 * @FilePath: /sipa-ui/debug/vite.config.js
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import VueJsx from '@vitejs/plugin-vue2-jsx';
import VueMacros from 'unplugin-vue-macros/vite';
import { alias } from '../config';

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
  resolve: {
    alias: {
      ...alias,
      '~@sipa-ui/core': '@sipa-ui/core',
    },
  },
});
