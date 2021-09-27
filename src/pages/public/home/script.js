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
      toast: useToast(),
      tempJobs: [
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'COMPLETED',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'COMPLETED',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'IN_PROGRESS',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'IN_PROGRESS',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'FAILED',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'IN_PROGRESS',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'COMPLETED',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        },
        {
          startTime: '2021-09-24T02:04:17.904Z',
          endTime: '2021-09-24T02:05:06.131Z',
          language: 'pt-BR',
          name: 'job-03',
          status: 'COMPLETED',
          originalVideoLink: 'https://vicap-bucket.s3.amazonaws.com/fd798193bd1281b07a9c60c7bd374f85test-video.mp4',
          videoThumbnail: 'https://vicap-bucket.s3.amazonaws.com/ba1a937899e28c8d20af59c48f3852da.jpg',
          subtitledVideoLink: 'https://vicap-bucket.s3.amazonaws.com/c4dfbdb7d40d2054d4be744c9c3600ab.mp4'
        }
      ]
    }
  },
  created() {
    document.title = 'ViCap - Solicitações'
  },
  mounted() {
    // this.getAllTranscriptionJobs()
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
      console.log('Filtrar')
      // this.getAllTranscriptionJobs()
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
