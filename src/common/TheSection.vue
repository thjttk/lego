<template>
  <section>
    <draggable :options="{group: 'widgets'}" @sort="onSort" @add="onAdd">
      <slot></slot>
    </draggable>
  </section>
</template>

<script>
import Draggable from 'vuedraggable'
import { mapMutations } from 'vuex'

export default {
  name: 'the-section',
  components: {
    Draggable
  },
  props: ['node', 'themeColor'],
  data () {
    return {
      dragOptions: {
        group: {
          name: 'widgets',
          pull: false,
          put: true
        },
        sort: true
      }
    }
  },
  methods: {
    ...mapMutations(['sortWidget', 'addWidget']),
    onSort ({oldIndex, newIndex, from, to}) {
      if(from === to) {
          this.sortWidget({array: this.node.children, oldIndex, newIndex})
      }
    },

    onAdd ({ item, newIndex }) {
      const widgetType = item.getAttribute('type')

      item.parentElement.removeChild(item)

      this.addWidget({ section: this.node.children, widgetType, newIndex })
    }
  }
}
</script>

<style scoped>
  section {
    border: 2px solid transparent;
  }
  section:hover {
    border: 2px solid tomato;
  }
</style>
