import { Component, Vue } from 'vue-property-decorator'
@Component({})
class GetMateriallShellCard extends Vue {
  private downloadButtonData = [
    {
      name: 'Gnome Extensions',
      text: 'Go to the Gnome extensions website',
      icon: 'mdi-puzzle',
      link: 'https://extensions.gnome.org/'
    },
    {
      name: 'Github',
      text: 'View on Github',
      icon: 'mdi-github',
      link: 'https://github.com/PapyElGringo/material-shell/'
    },
    {
      name: 'Download source',
      text: 'Download source code',
      icon: 'mdi-file-download',
      link: 'https://github.com/PapyElGringo/material-shell/'
    }
  ]
}
export default GetMateriallShellCard
