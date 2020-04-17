<template>
  <div class="workspace">
    <div class="left-half">
      <v-card class="window window-1"> </v-card>
    </div>
    <div class="right-half">
      <v-card class="window window-2"></v-card>
      <v-card class="window window-3"></v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.workspace {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
  position: absolute !important;
  left: 48px;
  top: 0;
  width: 100%;
  height: 100%;
}

.left-half {
  width: calc(50% - 48px);
  height: 100%;
}

.window-1 {
  background: #191919;
  opacity: 60%;
  height: 100%;
  width: 97.5%;
  margin: auto;
}

.window-2 {
  background: #000;
  width: 100%;
  height: 50%;
}

.right-half {
  width: calc(50% + 48px);
  height:100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
}

.window {
  border-radius: 0 !important;
}
/*
.workspace {
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  justify-content: stretch;
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
  margin: 0 !important;
  border-radius: 0 !important;
  background: #191919;
  opacity: 80% !important;
}*/
</style>
