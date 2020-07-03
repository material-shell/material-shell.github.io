<template>
  <v-list class="hidden-xs-only app-menu">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :href="item.to"
      :alt="item.title"
      class="list-item"
      router
      exact
    >
      <v-list-item-action class="hidden-xs-only">
        <v-icon class="panel-icon">{{ item.icon }}</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-list-item class="list-item">
      <div class="current-year">
        <div class="year">{{ new Date().getFullYear() }}</div>
        <div class="copy">&copy;</div>
      </div>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" src="./System-Tray.ts"></script>
<style lang="css" scoped src="./System-Tray.css"></style>
