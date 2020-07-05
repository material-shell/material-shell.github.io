<template>
  <v-layout v-if="parsedContent" column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card width="768px" max-width="100%">
        <v-card-title class="headline" v-text="title" />
        <v-card-text class="markdown-body" v-html="parsedContent" />
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script lang="ts" src="./contact.ts"></script>
<style lang="css" src="./contact.css" scoped></style>
