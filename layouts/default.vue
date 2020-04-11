<template>
  <v-app dark class="ms-blue-bg">
    <navigation />
    <left-pane class="left-pane" />

    <v-content class="main-content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!--<v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import LeftPane from '~/components/Left-Panel.vue'

export default {
  data() {
    return {
      fixed: false
    }
  },
  components: {
    Navigation,
    LeftPane
  }
}
</script>

<style scoped>
.ms-blue-bg {
  background: #3f51b5;
}

.left-pane {
  position:fixed;
  z-index:4;
}

</style>
