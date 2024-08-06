<!--
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 17:10:50
 * @FilePath: /sipa-ui/debug/App.vue
 * @Description:
-->
<template>
  <div>
    <h1>按钮</h1>
    <su-button type="default" @click="handleClick">1234</su-button>
    <su-button type="primary" @click="handleClick">1234</su-button>
    <hr />

    <h1>流程预览</h1>
    <su-process-preview ref="suProcessPreview" />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    const { nodes, edges } = {
      nodes: [
        {
          nodeName: '发起人',
          nodeCode: 'nc_225392895823315879',
          formId: 0,
          transactUrl: '',
          type: 'node',
          shape: 'start-node',
          x: 379.3359375,
          y: 62.0,
          id: '908c1333',
          index: 0,
          title: '发起人',
          createName: '王智晶',
          special: 0,
          nodetype: 1,
        },
        {
          nodeName: '审批人',
          nodeCode: 'nc_225392895823315880',
          approvalType: 2,
          nodePersonnelType: 20,
          nodeRepeatType: 2,
          formId: '225392875254973467',
          transactUrl: '',
          type: 'node',
          shape: 'approve-node',
          x: 363.3359375,
          y: 183.0,
          id: 'd81e1c17',
          index: 1,
          title: '审批人',
          content: '表单中的人',
          createName: '王智晶',
          special: 0,
          nodetype: 2,
        },
        {
          nodeName: '结束',
          nodeCode: 'nc_225392895823315881',
          formId: 0,
          transactUrl: '',
          type: 'node',
          shape: 'end-node',
          x: 358.3359375,
          y: 317.0,
          id: 'deee3615',
          index: 2,
          title: '结束',
          createName: '王智晶',
          special: 0,
          nodetype: 7,
        },
      ],
      edges: [
        {
          source: '908c1333',
          sourceAnchor: 0,
          target: 'd81e1c17',
          targetAnchor: 0,
          id: 'c3ff40f6',
        },
        {
          source: 'd81e1c17',
          sourceAnchor: 1,
          target: 'deee3615',
          targetAnchor: 0,
          id: 'd38a4a40',
        },
      ],
    };
    this.$refs.suProcessPreview.editor.getCurrentPage().read({ nodes, edges });
  },
  methods: {
    handleClick(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped lang="scss"></style>
