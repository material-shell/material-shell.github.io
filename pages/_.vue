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
import HeadlineList from '~/components/Headline-List.vue'
import HeadlineListItem from '~/components/Headline-List-Item.vue'

export default {
  components: {
    VideoCard,
    GetMaterialShellCard,
    HeadlineList,
    HeadlineListItem,
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

<style lang="scss">
.sticky {
  top: 48px;
  bottom: 0px;
  left: calc((100vw - 48px) / 2 + 40px);
  right: 0;
  position: fixed;
}

.nuxt-content {
  color: rgba(255, 255, 255, 0.87);

  h1:first-child {
    margin-top: 0 !important;
  }
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

  p > img {
    margin: 16px 0px;
    max-width: 100%;
    border-radius: 16px;
  }

  hr {
    display: block;
    flex: 1 1 0px;
    height: 0px;
    max-height: 0px;
    border: solid;
    border-width: thin 0 0 0;
    transition: inherit;
    opacity: 12%;

    margin: 48px -48px;
  }

  b,
  strong {
    color: #fafafa;
  }

  .v-list {
    p {
      margin-bottom: 0;
    }
  }

  code {
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
