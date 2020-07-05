<template>
  <main>
    <h2 class="card-title">Get Material Shell</h2>
    <v-btn
      v-for="data in downloadButtonData"
      :key="data.name"
      class="download-button"
      :href="data.link"
      :alt="data.name"
      :title="data.name"
    >
      <span v-text="data.text"></span>
      <v-icon class="download-button-icon">{{ data.icon }}</v-icon>
    </v-btn>
  </main>
</template>
<script lang="ts" src="./Get-Material-Shell-Card.ts"></script>
<style lang="css" scoped src="./Get-Material-Shell-Card.css"></style>
