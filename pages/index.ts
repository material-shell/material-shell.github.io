import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo/Logo'
import Home from '~/components/Home-new/Home-new'
@Component({
  components: {
    Logo,
    Home
  }
})
class Index extends Vue {
  private title = 'Download'
  private content = 'download'
}
export default Index
