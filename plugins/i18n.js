import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en', // always displays Chinese if English translation is not available
    messages: {
      en: require('../locales/en.json'),
      fr: require('../locales/fr.json'),
      de: require('../locales/de.json'),
    },
  })
}
