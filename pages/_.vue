<template>
  <!-- Desktop -->
  <v-row v-if="$vuetify.breakpoint.mdAndUp" no-gutters>
    <v-col sm="12" md="6" class="pa-4 pr-2">
      <v-card class="pa-12">
        <nuxt-content :document="content" />
      </v-card>
    </v-col>
    <div
      v-resize="refreshStickySize"
      class="d-flex flex-column sticky pa-4 pl-2"
      :style="stickySize"
    >
      <v-card>
        <video-card />
      </v-card>
      <v-card class="d-flex flex-grow-1 mt-4">
        <get-material-shell-card />
      </v-card>
    </div>
  </v-row>

  <!-- Mobile -->
  <v-col v-else>
    <v-card>
      <video-card />
    </v-card>
    <v-card class="pa-6 mt-4">
      <nuxt-content :document="content" />
    </v-card>
    <v-card class="d-flex flex-grow-1 mt-4">
      <get-material-shell-card />
    </v-card>
  </v-col>
</template>

<script type="ts">
import GetMaterialShellCard from '~/components/Get-Material-Shell-Card.vue'
import VideoCard from '~/components/Video-Card.vue'

export default {
  components: {
    VideoCard,
    GetMaterialShellCard,
  },

  async asyncData({ $content, params }) {
    return { content: await $content('about', params.slug).fetch() }
  },

  data: ({ $vuetify }) => ({
    drawer: null,
    title: 'Material Shell',
    stickySize: {},
  }),
  created() {
    if (this.$nuxt.$route.hash) {
      this.$vuetify.goTo(this.$nuxt.$route.hash, { offset: 64 })
    }
  },
  methods: {
    refreshStickySize() {
      this.stickySize = {
        left: `${
          (document.body.clientWidth - this.$vuetify.application.left) / 2 +
          this.$vuetify.application.left
        }px`,
        top: `${this.$vuetify.application.top}px`,
        right: '0px',
        bottom: '0px',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sticky {
  top: 48px;
  bottom: 0px;
  left: calc((100vw - 48px) / 2 + 40px);
  right: 0;
  position: fixed;
}

.nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
