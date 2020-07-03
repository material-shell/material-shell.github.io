import { Component, Vue } from 'vue-property-decorator'
import showdown from 'showdown'
@Component({})
class Contact extends Vue {
  private title = 'Contact'
  public get parsedContent(): string {
    const converter = new showdown.Converter()
    return converter.makeHtml(this.$t('contact.data') as string)
  }
}

export default Contact
