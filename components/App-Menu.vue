<template>
  <v-list class="app-menu">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :to="{ hash: item.to }"
      :alt="item.title"
      router
      exact
      @click="$vuetify.goTo(item.to, { offset: 48 })"
    >
      <v-list-item-icon class="my-md-3">
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>{{ item.title }}</v-list-item-content>
    </v-list-item>
    <v-list-item
      class="hidden-md-and-up"
      :to="{ hash: '#installation' }"
      alt="Installation"
      router
      exact
      @click="$vuetify.goTo('#installation', { offset: 48 })"
    >
      <v-list-item-icon class="my-md-3">
        <v-icon>mdi-download</v-icon>
      </v-list-item-icon>
      <v-list-item-content>Installation</v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script lang="ts">
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-compass',
        title: 'Spatial model',
        to: '#spatial-model',
      },
      {
        icon: 'mdi-monitor-dashboard',
        title: 'Interface',
        to: '#interface',
      },
      {
        icon: 'mdi-collage',
        title: 'Tiling engine',
        to: '#tiling-engine',
      },
      {
        icon: 'mdi-content-save',
        title: 'Persistence',
        to: '#persistence',
      },
      {
        icon: 'mdi-keyboard',
        title: 'Hotkeys',
        to: '#hotkeys',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.v-list {
  .v-list-item {
    .v-list-item__icon {
      .v-icon {
        color: #a3a3a3 !important;
      }
    }
  }
  .v-list-item--active {
    &::before {
      border-left: 3px #3f51b5 solid;
      opacity: 1 !important;
      background-color: transparent;
    }
    .v-list-item__icon {
      .v-icon {
        color: #fff !important;
      }
    }
  }
}
</style>
