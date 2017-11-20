<template>
  <div class="paragraph">
    <h1 :style="{color: themeColor}">{{node.content.title}}</h1>
    <small v-if="node.config.showSubTitle">{{node.content.subTitle}}</small>
    <p>{{node.content.detail}}</p>
  </div>
</template>

<script>
export default {
  name: 'paragraph',
  props: ['node', 'themeColor']
}
</script>

<style scoped>
.paragraph:hover {
  background: #ddd;
}
</style>

