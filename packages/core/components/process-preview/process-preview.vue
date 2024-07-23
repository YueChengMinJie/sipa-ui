<!--
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 17:21:41
 * @FilePath: /sipa-ui/packages/core/components/button/button.vue
 * @Description:
-->
<script setup>
import { useDefaultPrefix } from '@sipa-ui/core/hooks/usePrefix';
import { defaultComponentPrefix } from '@sipa-ui/core/utils/config';

const props = defineProps({
  data: Object,
});

defineOptions({
  name: `${defaultComponentPrefix}ProcessPreview`,
});

const className = useDefaultPrefix('process-preview');
</script>

<template>
  <div :class="className.defaultName">process preview</div>
</template>
