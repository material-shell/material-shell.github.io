<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card width="768px" max-width="100%">
        <v-card-title class="headline" v-text="title" />
        <v-card-text class="markdown-body" v-html="content" />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts" src="./download.ts"></script>
<style lang="css" scoped src="./download.css"></style>
