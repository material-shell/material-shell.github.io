<template>
  <v-list-item :to="{ hash: to }" :alt="title" router @click="$vuetify.goTo(to, { offset: 48 })">
    <v-list-item-avatar>
      <v-icon class="panel-icon">{{ icon }}</v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="title"></v-list-item-title>
      <v-list-item-subtitle>
        <slot></slot>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
export default {
  props: ['icon', 'title', 'to'],
  data: () => ({}),
}
</script>
<style lang="scss" scoped>
.v-list-item {
  margin-bottom: 0 !important;
  &.v-list-item--active::before {
    opacity: 0;
  }
  .v-list-item__content > :not(:last-child) {
    margin-bottom: 4px;
  }
  .v-list-item__subtitle {
    white-space: initial;
  }
}
</style>
