import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Material Shell - A new desktop experience',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Material Shell - A new desktop experience',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://material-shell.com/social-screenshot.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://material-shell.com/social-screenshot.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/i18n.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxt/http'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          surface: '#191919',
          'surface-darken': '#0d0d0d',
          'surface-ligthen': '#262626',
          primary: '#3f51b5',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.base,
        },
      },
    },
  },
  content: {
    liveEdit: false,
    markdown: {
      rehypePlugins: [
        [
          'rehype-add-classes',
          {
            h1: 'display-2 mb-6 mt-8 anchor',
            h2: 'display-1 mb-6 mt-8',
            h3: 'headline mb-4 mt-8',
            h4: 'title mb-4',
            h5: 'subtitle-1 mb-4',
            h6: 'subtitle-2 mb-4',
            p: 'body-1',
            ul: 'mb-4',
            hr:
              'v-divider theme--dark my-12 mx-n6 mx-sm-n6 mx-md-n12 mx-lg-n12 mx-xl-n12',
            code: 'primary--text',
          },
        ],
      ],
    },
  },
  /*
   ** Build configuration
   */
  build: {},
  router: {
    base: '',
    middleware: ['i18n'],
  },
}
