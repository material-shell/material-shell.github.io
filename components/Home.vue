<template>
  <div class="workspace">
    <v-card class="window window-1">
    </v-card>
    <v-card class="window window-2"></v-card>
    <v-card class="window window-3"></v-card>
  </div>
</template>

<style scoped>
.workspace {
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  justify-content: stretch;
  opacity: 10%;
}

.window-1 {
  height: 100%;
  width: calc(50% - 20px);
}

.window-2 {
  height: calc(50% - 20px);
  width: calc(50% - 20px);
}

.window-3 {
  height: calc(50% - 20px);
  width: calc(50% - 20px);
}

.workspace {
  position: absolute !important;
  left: 48px !important;
  height: calc(100% - 48px) !important;
  width: calc(100% - 48px) !important;
}

.window {
  border-radius: 5px;
  margin:10px;
  background: #191919;
  opacity:80% !important;
}
</style>
