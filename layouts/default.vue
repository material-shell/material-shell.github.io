<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :mini-variant="$vuetify.breakpoint.mdAndUp"
      mini-variant-width="48"
      floating
      style="z-index: 10;"
      color="surface"
    >
      <div class="fill-height d-flex flex-column">
        <app-menu />
        <span class="d-flex flex-grow-1"></span>
        <system-tray />
      </div>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense color="surface" class="pl-0">
      <nuxt-link to="/" class="ml-n4 d-flex align-center">
        <logo />
        <v-toolbar-title class="ml-2 align-center">
          <span class="title" v-text="title"></span>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <!--<nav-menu class="hidden-xs-only" />-->
      <v-app-bar-nav-icon
        class="hidden-md-and-up ms-font-gray"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0 overflow-y-auto">
        <v-col class="pa-0">
          <nuxt />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppMenu from '~/components/App-Menu/App-Menu'
import SystemTray from '~/components/System-Tray/System-Tray'
import Logo from '~/components/Logo/Logo'

export default {
  components: {
    AppMenu,
    SystemTray,
    Logo,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    title: 'Material Shell',
  }),
  created() {
    this.$vuetify.theme.dark = true
  },
}
</script>
