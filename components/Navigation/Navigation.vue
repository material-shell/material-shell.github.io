<template>
  <div>
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
        class="hidden-sm-and-up ms-font-gray"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-sm-and-up"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      ><nav-menu class="hidden-sm-and-up" />
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts" src="./Navigation.ts"></script>
<style lang="css" scoped src="./Navigation.css"></style>
