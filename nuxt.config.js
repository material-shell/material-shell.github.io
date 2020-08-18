import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
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
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
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
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    options: {
      customProperties: true,
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          surface: '#191919',
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  content: {
    markdown: {
      rehypePlugins: [
        [
          'rehype-add-classes',
          {
            h1: 'display-2 mb-6',
            h2: 'display-1 mb-6',
            h3: 'headline mb-4',
            h4: 'title mb-4',
            h5: 'subtitle-1 mb-4',
            h6: 'subtitle-2 mb-4',
            p: 'body-1',
          },
        ],
      ],
    },
  },
  /*
   ** Build configuration
   */
  router: {
    base: '',
    middleware: ['i18n'],
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.md/,
        loader: 'frontmatter-markdown-loader',
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    },
  },
}
