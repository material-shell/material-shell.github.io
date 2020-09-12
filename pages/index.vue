<template>
  <!-- Desktop -->
  <v-responsive v-if="$vuetify.breakpoint.mdAndUp" max-width="1872px" class="mx-auto">
    <v-row no-gutters>
      <v-col sm="12" md="6" class="pa-4 pr-2">
        <v-card class="pa-12 surface">
          <nuxt-content :document="content" />
        </v-card>
      </v-col>
      <div
        v-resize="refreshStickySize"
        class="d-flex flex-column sticky pa-4 pl-2"
        :style="stickySize"
      >
        <v-card class="overflow-hidden flex-shrink-0">
          <video-card />
        </v-card>
        <v-card class="d-flex overflow-y-auto mt-4 pa-4 pa-xl-6 surface">
          <get-material-shell-card />
        </v-card>
      </div>
    </v-row>
  </v-responsive>

  <!-- Mobile -->
  <v-col v-else>
    <v-card class="overflow-hidden flex-shrink-0">
      <video-card />
    </v-card>
    <v-card class="pa-6 mt-4 surface">
      <nuxt-content :document="content" />
    </v-card>
    <v-card class="d-flex flex-grow-1 mt-4 pa-4 surface">
      <get-material-shell-card />
    </v-card>
  </v-col>
</template>

<script type="ts">
import GetMaterialShellCard from '~/components/Get-Material-Shell-Card.vue'
import VideoCard from '~/components/Video-Card.vue'
import HeadlineList from '~/components/Headline-List.vue'
import HeadlineListItem from '~/components/Headline-List-Item.vue'
import VideoGif from '~/components/Video-Gif.vue'

export default {
  components: {
    VideoCard,
    GetMaterialShellCard,
    // eslint-disable-next-line vue/no-unused-components
    HeadlineList,
    // eslint-disable-next-line vue/no-unused-components
    HeadlineListItem,
    // eslint-disable-next-line vue/no-unused-components
    VideoGif,
  },

  async asyncData({ $content, params, $http }) {
    return { content: await $content('documentation', params.slug).fetch() }
  },

  data: ({ $vuetify }) => ({
    drawer: null,
    title: 'Material Shell',
    stickySize: {},
  }),
  methods: {
    refreshStickySize() {
      this.stickySize = {
        left: `${
          (document.body.clientWidth - this.$vuetify.application.left) / 2 +
          this.$vuetify.application.left
        }px`,
        top: `${this.$vuetify.application.top}px`,
        width: `${
          Math.min(
            document.body.clientWidth - this.$vuetify.application.left,
            1872
          ) / 2
        }px`,
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
  h1 {
    position: relative;
    a {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  hr {
    display: block;
    flex: 1 1 0px;
    height: 0px;
    max-height: 0px;
    border: solid;
    border-width: thin 0 0 0;
    transition: inherit;
    max-width: initial;
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

  a {
    text-decoration: none;
    &:hover {
      text-decoration: default;
    }
  }
}

.v-application code {
  background: rgba(255, 255, 255, 0.08) !important;
  padding: 2px 4px;
}
</style>
