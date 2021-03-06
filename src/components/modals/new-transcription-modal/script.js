import { mapActions, mapMutations } from 'vuex'
import { useToast } from 'vue-toastification'

import ScssVariables from '@/assets/scss/_variables.scss'

import SGModal from '@/components/modals/generic-modal'
import SGFileUpload from '@/components/form/file-upload'
import SGInput from '@/components/form/input'
import SGButton from '@/components/form/button'
import Icon from '@/components/icon'
import LoadingOverlay from '@/components/loading-overlay'

export default {
  name: 'NewTranscriptionModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SgModal: SGModal,
    SgFileUpload: SGFileUpload,
    SgInput: SGInput,
    SgButton: SGButton,
    Icon,
    LoadingOverlay
  },
  emits: ['close'],
  data() {
    return {
      scssColors: ScssVariables,
      uploadedFileUrl: null,
      jobName: '',
      toast: useToast(),
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['actionCreateTranscriptionJob']),
    ...mapMutations(['ADD_NEW_TRANSCRIPTION_JOB']),
    createNewJob() {
      this.isLoading = true
      const formData = {
        transcriptionJobName: this.jobName,
        videoUrl: this.uploadedFileUrl
      }

      this.actionCreateTranscriptionJob(formData)
        .then((response) => {
          this.ADD_NEW_TRANSCRIPTION_JOB({
            startTime: response.transcriptionJobResult.TranscriptionJob.StartTime,
            endTime: null,
            language: null,
            name: response.transcriptionJobResult.TranscriptionJob.TranscriptionJobName,
            status: response.transcriptionJobResult.TranscriptionJob.TranscriptionJobStatus,
            originalVideoLink: response.transcriptionJobResult.TranscriptionJob.Media.MediaFileUri
          })
          this.toast.success(response.message)
          this.close()
        })
        .catch((error) => {
          this.toast.error(error.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    close() {
      this.$emit('close')

      this.uploadedFileUrl = null
      this.jobName = ''
      this.isLoading = false
    }
  }
}
