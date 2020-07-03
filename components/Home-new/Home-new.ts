import { Component, Vue } from 'vue-property-decorator'
import ContentCard from '~/components/Content-Card/Content-Card'
import VideoCard from '~/components/Video-Card/Video-Card'
import GetMaterialShellCard from '~/components/Get-Material-Shell-Card/Get-Material-Shell-Card'
@Component({
  components: {
    ContentCard,
    VideoCard,
    GetMaterialShellCard
  }
})
class Home extends Vue {}
export default Home
