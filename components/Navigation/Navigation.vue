<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :disable-resize-watcher="true"
      fixed
      app
      ><nav-menu class="hidden-md-and-up" />
    </v-navigation-drawer>
    <v-app-bar
      class="ms-panel-gray"
      height="48px"
      :clipped-left="clipped"
      fixed
      app
    >
      <div class="page-title">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
        <nuxt-link class="main-title no-style" to="/">
          <v-toolbar-title v-text="title" />
        </nuxt-link>
      </div>
      <v-spacer />
      <!--<nav-menu class="hidden-xs-only" />-->
      <v-app-bar-nav-icon
        class="hidden-md-and-up ms-font-gray"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>
<script lang="ts" src="./Navigation.ts"></script>
<style lang="css" scoped src="./Navigation.css"></style>
