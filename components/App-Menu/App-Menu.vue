<template>
  <v-list class="app-menu">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="item.to"
      :alt="item.title"
      router
      exact
    >
      <v-list-item-icon>
        <v-icon class="panel-icon">{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        {{ item.title }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" src="./App-Menu.ts"></script>
<style lang="scss" scoped src="./App-Menu.scss"></style>
