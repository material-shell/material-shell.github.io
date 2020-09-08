<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :mini-variant="$vuetify.breakpoint.lgAndUp"
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
      <v-app-bar-nav-icon class="hidden-lg-and-up ms-font-gray" @click.stop="drawer = !drawer" />

      <nuxt-link to="/" class="d-flex align-center fill-height text-decoration-none">
        <div class="fill-height ml-n4 pa-2 hidden-md-and-down" icon>
          <img class="fill-height" src="~/assets/img/no-bg-on-dark-small.svg" alt="Material Shell" />
        </div>

        <v-toolbar-title class="ml-2 align-center">
          <span class="title text--primary font-weight-bold" v-text="title"></span>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <github-button :stars="stargazersCount"></github-button>
      <!--<nav-menu class="hidden-xs-only" />-->
    </v-app-bar>

    <v-main class="surface-darken">
      <v-container fluid v-scroll="onScroll" class="pa-0 overflow-visible">
        <v-col class="pa-0 overflow-visible">
          <nuxt />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script type="ts">
import AppMenu from '~/components/App-Menu.vue'
import SystemTray from '~/components/System-Tray.vue'
import GithubButton from '~/components/Github-Button.vue'

export default {
  components: {
    AppMenu,
    SystemTray,
    GithubButton,
  },
  props: {
    source: String,
  },
  async fetch() {
    const res = await this.$http.get(
      'https://api.github.com/repos/material-shell/material-shell'
    )
    const data = await res.json()
    this.stargazersCount = data.stargazers_count
  },
  data: () => ({
    drawer: null,
    title: 'Material Shell',
    stargazersCount: null,
  }),
  methods: {
    onScroll(e) {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        let anchor, currrentDistance
        const anchors = [...document.getElementsByClassName('anchor')]
        anchors.forEach((element) => {
          if (
            element.getBoundingClientRect().y - document.body.clientHeight / 2 >
            0
          )
            return
          const distance = Math.abs(element.getBoundingClientRect().y)
          if (!anchor || currrentDistance > distance) {
            anchor = element.id
            currrentDistance = distance
          }
        })
        // Catch here to prevent route duplication error
        this.$router.replace({ hash: anchor }).catch((err) => {})
      }, 50)
    },
  },
}
</script>
