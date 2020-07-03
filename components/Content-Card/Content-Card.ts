import { Component, Vue } from 'vue-property-decorator'
import About from '~/pages/about/index.vue'
import Gallery from '~/pages/gallery/index.vue'
import Contact from '~/pages/contact/index.vue'
import Download from '~/pages/download/index.vue'
@Component({
  components: {
    About,
    Gallery,
    Contact,
    Download
  }
})
class ContentCard extends Vue {}

export default ContentCard
