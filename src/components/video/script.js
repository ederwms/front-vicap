import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoJs',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      player: null,
      defaultVideoOptions: {
        autoplay: false,
        controls: true,
        fluid: true,
        responsive: true,
        language: 'pt-BR',
        userActions: {
          hotkeys: {
            fullscreenKey: (event) => {
              return event.which === 70
            },
            muteKey: (event) => {
              return event.which === 77
            }
          }
        }
      }
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, {
      ...this.options,
      ...this.defaultVideoOptions
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
