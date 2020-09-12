<template>
  <video async muted autoplay loop>
    <source type="video/webm" :src="video" />
  </video>
</template>
<script lang="ts">
export default {
  props: ['video'],
}
</script>
<style lang="scss" scoped>
video {
  margin: 16px 0px;
  max-width: 100%;
  border-radius: 16px;
}
</style>
