import ScssVariables from '@/assets/scss/_variables.scss'

import VideoJS from '@/components/video'
import SGModal from '@/components/modals/generic-modal'
import SGButton from '@/components/form/button'
import Icon from '@/components/icon'

export default {
  name: 'TranscriptionDetailsModal',
  components: {
    SgModal: SGModal,
    SgButton: SGButton,
    VideoJs: VideoJS,
    Icon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    transcriptionJob: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    isOpen(newValue, oldValue) {
      if (newValue) {
        this.originalVideoOptions = {
          ...this.defaultVideoOptions,
          sources: [
            {
              src: this.transcriptionJob.originalVideoLink,
              type: 'video/mp4'
            }
          ]
        }

        this.subtitledVideoOptions = {
          ...this.defaultVideoOptions,
          sources: [
            {
              src: this.transcriptionJob.subtitledVideoLink,
              type: 'video/mp4'
            }
          ]
        }
      } else {
        this.originalVideoOptions = {}
        this.subtitledVideoOptions = {}
      }
    }
  },
  data() {
    return {
      scssColors: ScssVariables,
      shouldRenderVideo: false,
      originalVideoOptions: {},
      subtitledVideoOptions: {},
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
  emits: [
    close
  ],
  methods: {
    close() {
      this.$emit('close')
    },
    downloadSubtitledVideo() {
      const a = document.createElement('a')
      a.style.display = 'none'
      document.body.appendChild(a)

      a.href = this.transcriptionJob.subtitledVideoLink
      a.click()
      document.body.removeChild(a)
    }
  }
}
