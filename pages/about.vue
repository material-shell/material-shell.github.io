<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="content" width="768px" max-width="100%">
        <v-card-title class="headline" v-text="title" />
        <v-card-text class="markdown-body" v-html="content" />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TilingDemo from '~/components/Tiling-Demo.vue'
import Logo from '~/components/Logo.vue'
import fm from '~/data/about.md'
export default {
  data() {
    return {
      title: 'What is it?',
      content: fm.html
    }
  },
  components: {
    TilingDemo,
    Logo
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: none;
}
</style>

<style scoped>
.headline {
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 0 !important;
  text-align: center;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
  color: #ccc !important;
  font-size: 14px;
  padding-top: 0;
  margin-top: 20px;
  text-align: justify;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

/deep/.markdown-body > h3 {
  font-weight: 300;
  text-align: center;
  font-size: 30px;
  line-height: 40px;
  margin: 20px 0 20px 0;
}

/deep/.markdown-body > blockquote {
  font-weight: 300;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  margin: 10px 0 10px 0;
}
</style>
