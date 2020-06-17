<template>
  <section>
    <about />
    <gallery />
    <contact />
    <download />
  </section>
</template>

<style scoped>

</style>

<script lang="ts">
import About from '~/pages/about.vue'
import Gallery from '~/pages/gallery.vue'
import Contact from '~/pages/contact.vue'
import Download from '~/pages/download.vue'

export default {
  components: {
    About,
    Gallery,
    Contact,
    Download
  }
}
</script>