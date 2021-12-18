<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    
  </div>
</template>

<script>

import EnterLayout from '@/layouts/EnterLayout'
import AppLayout from '@/layouts/AppLayout'

export default {
  name: 'App',
  computed: {
    layout() {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'enter') + '-layout'
    }
  },
  components: {
    EnterLayout,
    AppLayout
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css'
</style>
