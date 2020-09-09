<template>
  <div class="d-flex flex-column flex-xl-row justify-start">
    <template v-for="(id, i) in playlist">
      <v-responsive
        :key="i"
        class="flex-grow-0"
        :class="{ active: id === current }"
        :aspect-ratio="16 / 9"
        width="120"
        :style="
          'background-image: url(https://img.youtube.com/vi/' +
          id +
          '/sddefault.jpg)'
        "
        @click="selectVideo(id)"
      ></v-responsive>
    </template>
  </div>
</template>
<script >
export default {
  data: () => ({
    playlist: ['Wc5mbuKrGDE', '0AkWSNQBoLI', 'uonXldePGT0'],
    current: 'Wc5mbuKrGDE',
  }),
  created() {
    this.$emit('select-video', this.current)
  },
  methods: {
    selectVideo(id) {
      this.current = id
      this.$emit('select-video', id)
    },
  },
}
</script>
<style lang="scss" scoped>
.v-responsive {
  background-size: cover;
  background-position: center;
  transition: opacity 300ms;
  margin: 6px;
  border-radius: 4px;
  &:not(:first-child) {
    margin-top: 0px;
  }
  &:not(.active) {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
