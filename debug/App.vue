<!--
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 17:10:50
 * @FilePath: /sipa-ui/debug/App.vue
 * @Description:
-->
<script setup>
const handleClick = (event) => {
  console.log(event);
};
</script>

<template>
  <div>
    <h1>组件调试</h1>
    <su-button type="default" @click="handleClick">1234</su-button>
    <su-button type="primary" @click="handleClick">1234</su-button>
  </div>
</template>

<style scoped></style>
