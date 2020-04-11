<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card width="768px" max-width="100%">
        <v-card-title class="headline" v-text="title"/>
        <v-card-text v-html="content"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Download',
      content: `<p>
            Click here to download
          </p>

          <p>
            Or go to github
          </p>`
    }
  }
}
</script>
