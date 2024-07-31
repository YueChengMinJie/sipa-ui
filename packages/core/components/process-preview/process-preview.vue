<!--
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 17:21:41
 * @FilePath: /sipa-ui/packages/core/components/button/button.vue
 * @Description:
-->
<template>
  <div :class="className.defaultName">process preview</div>
</template>

<script>
import { useDefaultPrefix } from '@sipa-ui/core/hooks/usePrefix';
import { defaultComponentPrefix } from '@sipa-ui/core/utils/config';

export default {
  name: `${defaultComponentPrefix}ProcessPreview`,
  props: {
    data: Object,
  },
  data() {
    return {
      className: useDefaultPrefix('process-preview'),
    };
  },
  methods: {},
};
</script>

<template>
  <div :class="className.defaultName">process preview</div>
</template>
