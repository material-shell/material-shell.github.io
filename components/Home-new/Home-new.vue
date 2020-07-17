<template>
  <v-row no-gutters>
    <v-col sm="12" md="6">
      <v-card class="window window-1">
        <content-card />
      </v-card>
    </v-col>
    <v-col sm="12" md="6">
      <div :class="{ sticky: sticky }">
        <v-card class="window window-2 stickyVideoCard">
          <video-card />
        </v-card>
        <v-card class="window window-3 stickyGetMaterialShellCard">
          <get-material-shell-card />
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./Home-new.ts"></script>
<style lang="scss" scoped src="./Home-new.scss"></style>
<style lang="css" scoped src="./Home-new.css"></style>
