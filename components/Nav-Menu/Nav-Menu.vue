<template>
  <div class="nav-menu">
    <ul class="hidden-xs-only desktop-nav-list">
      <li v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.to" class="n-link font-weight-medium no-style">{{
          item.title
        }}</nuxt-link>
      </li>
    </ul>

    <v-list class="device-menu hidden-sm-and-up">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="device-menu-item font-weight-medium"
      >
        <v-list-item-action class="hidden-sm-and-up">
          <v-icon class="device-menu-icon">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script lang="ts" src="./Nav-Menu.ts"></script>
<style lang="css" scoped src="./Nav-Menu.css"></style>
