import VideoSubtitle from './VideoSubtitle'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    VideoSubtitle
  }
}
