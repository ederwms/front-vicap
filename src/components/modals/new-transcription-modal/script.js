import { mapActions } from 'vuex'
import { useToast } from 'vue-toastification'

import ScssVariables from '@/assets/scss/_variables.scss'

import SGModal from '@/components/modals/generic-modal'
import SGFileUpload from '@/components/form/file-upload'
import SGInput from '@/components/form/input'
import SGButton from '@/components/form/button'
import Icon from '@/components/icon'

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
    Icon
  },
  emits: ['close'],
  data() {
    return {
      scssColors: ScssVariables,
      uploadedFile: null,
      jobName: '',
      toast: useToast()
    }
  },
  methods: {
    ...mapActions(['actionCreateTranscriptionJob']),
    createNewJob() {
      if (this.uploadedFile.type !== 'video/mp4') {
        this.toast.error('Tipo de arquivo inválido, por favor envie um vídeo no formato MP4.')
      } else if (this.uploadedFile.size > (20 * 1024 * 1024)) {
        this.toast.error('O arquivo selecionado ultrapassa o limite de tamanho, por favor selecione outro arquivo com até 20mb.')
      } else {
        const formData = new FormData()
        formData.append('file', this.uploadedFile)
        formData.append('transcriptionJobName', this.jobName)

        this.actionCreateTranscriptionJob(formData)
          .then((response) => {
            this.toast.success(response.message)
          })
          .catch((error) => {
            this.toast.error(error.message)
          })
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
