<template>
  <div class="d-flex flex-column flex-md-row my-6">
    <v-card class="primary mb-4 mb-md-0 mr-md-4">
      <v-card-title class="d-flex flex-nowrap" style="word-break: initial">
        <v-icon class="mr-4">mdi-heart</v-icon>
        <span>A collective effort is essential to make it possible</span>
      </v-card-title>
      <v-card-text
        >Material Shell is made Open Source and will remain free for everyone.
        While it's amazing, the downside is that it's very difficult to
        monetize. By funding the project you allow me to keep working on
        it.</v-card-text
      >
      <v-card-actions>
        <v-btn
          link
          href="https://github.com/sponsors/PapyElGringo"
          class="flex primary lighten-1"
          raised
          text
          >Sponsor me on Github</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card
      class="d-flex flex-column"
      style="background-color: #003e51"
      link
      href="https://get.trbu.app"
    >
      <v-card-title class="d-flex flex-nowrap" style="word-break: initial">
        <span>Discover my other project</span>
      </v-card-title>
      <v-card-text
        class="flex-grow-1 d-flex flex-column align-center justify-center"
      >
        <img
          src="https://get.trbu.app/assets/logo_horizontal.svg"
          alt="Discover Tribu"
          style="max-width: 80%"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          link
          href="https://get.trbu.app"
          class="flex"
          style="background-color: rgba(255, 255, 255, 0.1)"
          raised
          text
          >Take a look</v-btn
        >
      </v-card-actions>
    </v-card>
    <!-- <div class="d-flex flex-column" style="aspect-ratio: 1 / 1">
      <a href="https://get.trbu.app" class="d-block">
        <img
          valign="middle"
          src="https://get.trbu.app/assets/promo_vertical.png"
          alt="Discover Tribu"
          style="max-width: 100%"
        />
      </a>
    </div> -->
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped></style>
