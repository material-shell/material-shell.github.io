<template>
  <v-app dark class="ms-blue-bg">
    <navigation />
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col md="1" class="hidden-sm-and-down">
            <left-pane class="left-pane" />
          </v-col>
          <v-col md="11">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <!--<v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import Navigation from '~/components/Navigation/Navigation'
import LeftPane from '~/components/Left-Panel/Left-Panel'

export default {
  components: {
    Navigation,
    LeftPane
  },
  data() {
    return {
      fixed: false
    }
  }
}
</script>

<style lang="scss" global>
body {
  background: #3f51b5 !important;
}

.ms-blue-bg {
  background: #3f51b5 !important;
}

.left-pane {
  position: fixed;
  z-index: 4;
}
</style>
