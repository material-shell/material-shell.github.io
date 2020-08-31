<template>
  <div>
    <v-btn
      rounded
      depressed
      link
      href="https://github.com/material-shell/material-shell"
      class="overflow-hidden"
    >
      <v-icon class="ml-n1 mr-2">mdi-github</v-icon>
      <span class="hidden-sm-and-down">Material Shell</span>
      <span class="stars-count surface--text d-flex align-center pa-2 ml-2 mr-n4 grey lighten-3">
        {{ stars }}
        <v-icon class="ml-1" style="margin-top: -2px;" small>mdi-star</v-icon>
      </span>
      <span class="star-please">Give a star <3</span>
    </v-btn>
  </div>
</template>
<script lang="ts">
export default {
  props: ['stars'],
}
</script>
<style lang="scss" scoped>
.v-btn {
  &::before {
    content: 'Give a start <3';
  }
  .stars-count {
    height: 36px;
  }
  .star-please {
    position: absolute;
    opacity: 0;
  }
  &:hover {
    ::v-deep .v-btn__content *:not(.star-please) {
      opacity: 0;
    }
    .star-please {
      opacity: 1;
    }
  }
}
</style>
