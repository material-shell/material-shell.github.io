<template>
  <!-- Desktop -->
  <v-row v-if="$vuetify.breakpoint.mdAndUp" no-gutters>
    <v-col sm="12" md="6" class="pa-4 pr-2">
      <v-card class="pa-6">
        <nuxt-content :document="content" />
      </v-card>
    </v-col>
    <div
      v-resize="refreshStickySize"
      class="d-flex flex-column sticky pa-4 pl-2"
      :style="stickySize"
    >
      <v-card>
        <video-card />
      </v-card>
      <v-card class="d-flex flex-grow-1 mt-4">
        <get-material-shell-card />
      </v-card>
    </div>
  </v-row>

  <!-- Mobile -->
  <v-col v-else>
    <v-card>
      <video-card />
    </v-card>
    <v-card class="pa-6 mt-4">
      <nuxt-content :document="content" />
    </v-card>
    <v-card class="d-flex flex-grow-1 mt-4">
      <get-material-shell-card />
    </v-card>
  </v-col>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="css" scoped src="./index.css"></style>
