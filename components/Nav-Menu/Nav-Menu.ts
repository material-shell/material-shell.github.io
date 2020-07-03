import { Component, Vue } from 'vue-property-decorator'

@Component({})
class NavMenu extends Vue {
  private items = [
    {
      icon: 'mdi-information',
      title: 'About',
      to: '/about'
    },
    {
      icon: 'mdi-image-multiple',
      title: 'Gallery',
      to: '/gallery'
    },
    {
      icon: 'mdi-account-box',
      title: 'Contact',
      to: '/contact'
    },
    {
      icon: 'mdi-download',
      title: 'Download',
      to: '/download'
    }
  ]
}

export default NavMenu
