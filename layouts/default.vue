<template>
  <v-app>
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
      <nuxt-link to="/" class="ml-n4 d-flex align-center fill-height text-decoration-none">
        <div class="fill-height pa-2 hidden-sm-and-down" icon>
          <img class="fill-height" src="~/assets/img/no-bg-on-dark-small.svg" alt="Material Shell" />
        </div>

        <v-app-bar-nav-icon class="hidden-md-and-up ms-font-gray" @click.stop="drawer = !drawer" />

        <v-toolbar-title class="ml-2 align-center">
          <span class="title text--primary font-weight-bold" v-text="title"></span>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <!--<nav-menu class="hidden-xs-only" />-->
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0 overflow-visible">
        <v-col class="pa-0 overflow-visible">
          <nuxt />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppMenu from '~/components/App-Menu.vue'
import SystemTray from '~/components/System-Tray.vue'

export default {
  components: {
    AppMenu,
    SystemTray,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    title: 'Material Shell',
  }),
}
</script>
