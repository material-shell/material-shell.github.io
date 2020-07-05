import { Component, Vue } from 'vue-property-decorator'
import AppMenu from '~/components/App-Menu/App-Menu'
import SystemTray from '~/components/System-Tray/System-Tray'
@Component({
  components: {
    AppMenu,
    SystemTray
  }
})
class LeftPanel extends Vue {}
export default LeftPanel
