import { mapActions, mapGetters } from 'vuex'
import { format } from 'date-fns'
import { useToast } from 'vue-toastification'

import { debounce } from '@/helpers/functions'

import ScssVariables from '@/assets/scss/_variables.scss'

import LoadingOverlay from '@/components/loading-overlay'
import TranscriptionDetailsModal from '@/components/modals/transcription-details-modal'
import NewTranscriptionModal from '@/components/modals/new-transcription-modal'
import SGInput from '@/components/form/input'
import SGButton from '@/components/form/button'
import Icon from '@/components/icon'

import FileUpload from '@/components/form/file-upload'

export default {
  name: 'HomePage',
  components: {
    TranscriptionDetailsModal,
    NewTranscriptionModal,
    SgInput: SGInput,
    SgButton: SGButton,
    Icon,
    FileUpload,
    LoadingOverlay
  },
  data() {
    return {
      isLoading: false,
      transcriptionDetailsModalData: {
        isOpen: false,
        job: {}
      },
      isNewTranscriptionModalOpen: false,
      jobsFilter: '',
      scssColors: ScssVariables,
      format,
      toast: useToast()
    }
  },
  created() {
    document.title = 'ViCap - Solicitações'
  },
  mounted() {
    this.getAllTranscriptionJobs()
  },
  computed: {
    ...mapGetters(['getterTranscriptionJobs'])
  },
  methods: {
    ...mapActions([
      'actionHealthCheck',
      'actionGetAllTranscriptionJobs',
      'actionGetTranscriptionJobByName'
    ]),
    getAllTranscriptionJobs() {
      this.isLoading = true

      this.actionGetAllTranscriptionJobs(this.jobsFilter)
        .catch((error) => {
          this.toast.error(error.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onFilterJobs: debounce(function() {
      // NOTE retirar o console e descomentar a request
      // console.log('Filtrar')
      this.getAllTranscriptionJobs()
    }, 700),
    getIconName(status) {
      return {
        COMPLETED: 'check-icon',
        IN_PROGRESS: 'in-progress-icon',
        FAILED: 'alert-icon'
      }[status]
    },
    getStatusName(status) {
      return {
        COMPLETED: 'Finalizado',
        IN_PROGRESS: 'Em progresso',
        FAILED: 'Falha'
      }[status]
    },
    detailJob(job) {
      this.isLoading = true

      this.actionGetTranscriptionJobByName(job.name)
        .then((response) => {
          document.title = 'ViCap - Detalhes da solicitação'

          this.transcriptionDetailsModalData = {
            isOpen: true,
            job: {
              ...job,
              ...(!job.subtitledVideoLink && { subtitledVideoLink: response.subtitledVideoLink }),
              subtitles: response.subtitles
            }
          }
        })
        .catch((error) => {
          this.toast.error(error.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    closeTranscriptionDetailsModal() {
      document.title = 'ViCap - Solicitações'

      this.transcriptionDetailsModalData = {
        isOpen: false,
        job: {}
      }
    }
  }
}
