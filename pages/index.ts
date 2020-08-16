import { Component, Vue } from 'vue-property-decorator'
import GetMaterialShellCard from '~/components/Get-Material-Shell-Card/Get-Material-Shell-Card'
import VideoCard from '~/components/Video-Card/Video-Card'
@Component({
  async asyncData({ $content, params }) {
    return { content: await $content('about', params.slug).fetch() }
  },
  components: {
    VideoCard,
    GetMaterialShellCard,
  },
})
class Index extends Vue {
  private stickySize = {
    left: `${
      (document.body.clientWidth - this.$vuetify.application.left) / 2 +
      this.$vuetify.application.left
    }px`,
    top: `${this.$vuetify.application.top}px`,
    right: '0px',
    bottom: '0px',
  }

  private refreshStickySize() {
    this.stickySize = {
      left: `${
        (document.body.clientWidth - this.$vuetify.application.left) / 2 +
        this.$vuetify.application.left
      }px`,
      top: `${this.$vuetify.application.top}px`,
      right: '0px',
      bottom: '0px',
    }
  }
}
export default Index
