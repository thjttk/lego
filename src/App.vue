<template>
  <render :node="currentPage" :themeColor="site.config.color" />
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Render from './common/Render'

export default {
  name: 'app',
  components: {
    Render
  },
  computed: {
    ...mapState(['site', 'currentPage'])
  },
  methods: {
    ...mapActions(['getSite'])
  },
  async mounted () {
    await this.getSite()
  }
}
</script>

<style>

</style>
