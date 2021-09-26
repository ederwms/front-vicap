import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoJs',
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: String,
      default: '350px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options)
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
