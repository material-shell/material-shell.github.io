import { Component, Vue } from 'vue-property-decorator'
@Component({})
class SystemTray extends Vue {
  private items = [
    {
      icon: 'mdi-github',
      title: 'Github',
      to: 'https://github.com/PapyElGringo/material-shell'
    },
    {
      icon: 'mdi-discord',
      title: 'Discord',
      to: 'https://discord.gg/ZUqgA9M'
    }
  ]
}
export default SystemTray
