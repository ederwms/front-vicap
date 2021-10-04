import axios from 'axios'
import { useToast } from 'vue-toastification'
import Const from '@/helpers/const'

import Icon from '@/components/icon'
import SGButton from '@/components/form/button'
import LoadingOverlay from '@/components/loading-overlay'

import ScssVariables from '@/assets/scss/_variables.scss'

export default {
  name: 'SGFileUpload',
  emits: ['update:modelValue', 'uploaded'],
  props: {
    modelValue: {
      type: File,
      default: null
    }
  },

  components: {
    Icon,
    LoadingOverlay,
    SgButton: SGButton
  },

  data() {
    return {
      scssColors: ScssVariables,
      toast: useToast(),
      isDragAndDropSupported: false,
      uploadProgress: 0,
      uploadedFile: null,
      hasFile: false,
      hasFinishedUploading: false,
      isLoading: false
    }
  },

  mounted() {
    this.isDragAndDropSupported = this.determineDragAndDropSupported()

    if (this.isDragAndDropSupported) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((event) => {
        this.$refs.fileForm.addEventListener(event, (listenerEvent) => {
          listenerEvent.preventDefault()
          listenerEvent.stopPropagation()
        })
      })
    }
  },

  methods: {
    determineDragAndDropSupported() {
      const div = document.createElement('div')

      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
    },

    formatFileSize(bytes, decimals = 2) {
      if (!bytes) {
        return '0 Bytes'
      }

      const baseSize = 1024
      const decimal = decimals < 0 ? 0 : decimals
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      const sizeIndex = Math.floor(Math.log(bytes) / Math.log(baseSize))

      return `${parseFloat((bytes / Math.pow(baseSize, sizeIndex)).toFixed(decimal))}${sizes[sizeIndex]}`
    },

    handleDroppedFile($event) {
      this.uploadFile($event.dataTransfer.files[0])
    },

    handleUploadFile($event) {
      this.uploadFile($event.target.files[0])
    },

    uploadFile(file) {
      if (file.type !== 'video/mp4') {
        this.toast.error('Tipo de arquivo inválido, por favor envie um vídeo no formato MP4.')
      } else if (file.size > (2000000 * 1024 * 1024)) {
        this.toast.error('O arquivo selecionado ultrapassa o limite de tamanho, por favor selecione outro arquivo com até 20mb.')
      } else {
        const formData = new FormData()
        formData.append('file', file)

        this.hasFile = true
        this.uploadedFile = file
        this.isLoading = true

        axios.post(Const.API_FILE, formData, {
          onUploadProgress: (event) => {
            this.uploadProgress = parseInt(Math.round((event.loaded * 100) / event.total))
          }
        })
          .then((response) => {
            this.$emit('update:modelValue', response.data.fileUrl)
            this.hasFinishedUploading = true
          })
          .catch((error) => {
            this.toast.error(error.response.data.error)
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },

    deleteFile() {
      this.$emit('update:modelValue', null)

      this.hasFile = false
      this.uploadedFile = null
      this.uploadProgress = 0
      this.hasFinishedUploading = false
      this.isLoading = false
    }
  }
}
