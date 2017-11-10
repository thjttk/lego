<template>
  <component :is="node.type" :node="node" :theme="themeColor">
    <render v-for="child in node.children" :key="child.id" :node="child" :theme="themeColor" />
  </component>
</template>

<script>
// 导入JSON 树中所涉及的所有节点
import Page from './Page.vue'
import Paragraph from './Paragraph.vue'

export default {
  name: 'render',
  props: ['node', 'themeColor'],
  components: {
    Page,
    Paragraph
  }
}
</script>
