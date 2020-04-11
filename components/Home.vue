<template>
  <div class="workspace">
    <div class="window window-1">
    </div>
    <div class="window window-2"></div>
    <div class="window window-3"></div>
  </div>
</template>

<style scoped>
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
  border-radius: 5px;
  margin:10px;
  background: #191919;
  opacity:80%;
}
</style>
