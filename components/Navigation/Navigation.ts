import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo/Logo'
import NavMenu from '~/components/Nav-Menu/Nav-Menu'
@Component({
  components: {
    Logo,
    NavMenu
  }
})
class Navigation extends Vue {
  private clipped = false
  private drawer = false
  private fixed = false
  private miniVariant = false
  private right = true
  private rightDrawer = false
  private title = 'Material Shell'
}

export default Navigation
