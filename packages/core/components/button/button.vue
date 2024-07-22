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
  type: String,
});
const emits = defineEmits(['click']);
defineOptions({
  name: `${defaultComponentPrefix}Button`,
});
const className = useDefaultPrefix('button');
const handleClick = (event) => {
  emits('click', event);
};
</script>

<template>
  <button
    :class="[
      className.defaultName,
      {
        [className.types.isPrimary]: props.type === 'primary',
        [className.types.isDefault]: props.type !== 'primary',
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
