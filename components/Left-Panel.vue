<template>
  <div class="left-pane hidden-xs-only">
    <app-menu />
    <system-tray />
  </div>
</template>

<script>
import AppMenu from '~/components/App-Menu'
import SystemTray from '~/components/System-Tray'
export default {
  components: {
    AppMenu,
    SystemTray
  }
}
</script>

<style scoped>
.left-pane {
  position: fixed;
  top: 48px;
  width: 48px;
  left: 0;
  height: calc(100% - 48px);
  background: #191919;
  color: #a3a3a3;
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
}
</style>
