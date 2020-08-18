<template>
  <v-responsive :aspect-ratio="16 / 9">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/0AkWSNQBoLI"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </v-responsive>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
iframe {
  border-radius: 5px;
  margin: auto;
}
</style>
