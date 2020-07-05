import { Component, Vue } from 'vue-property-decorator'
import showdown from 'showdown'
import TilingDemo from '~/components/Tiling-Demo/Tiling-Demo'
import Logo from '~/components/Logo/Logo'
@Component({
  components: { TilingDemo, Logo }
})
class About extends Vue {
  private title = 'What is it?'
  public get parsedContent(): string {
    const converter = new showdown.Converter()
    return converter.makeHtml(this.$t('about.data') as string)
  }
}

export default About
