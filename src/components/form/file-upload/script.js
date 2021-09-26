import Icon from '@/components/icon'
import SGButton from '@/components/form/button'

import ScssVariables from '@/assets/scss/_variables.scss'

export default {
  name: 'SGFileUpload',
  props: {
    modelValue: {
      type: File,
      default: null
    }
  },
  components: {
    Icon,
    SgButton: SGButton
  },
  emits: ['update:modelValue'],
  data() {
    return {
      scssColors: ScssVariables,
      isDragAndDropSupported: false
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
    validateUploadedFile(file) {
      if (file.type !== 'video/mp4') {
        return false
      } else {
        return file
      }
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
      this.$emit('update:modelValue', this.validateUploadedFile($event.dataTransfer.files[0]))
    },
    handleUploadFile($event) {
      this.$emit('update:modelValue', this.validateUploadedFile($event.target.files[0]))
    },
    deleteFile() {
      this.$emit('update:modelValue', null)
    }
    // handleDragEnter(event) {
    //   console.log('DragEnter: ', event)
    // },
    // handleDragLeave(event) {
    //   console.log('DragLeave: ', event)
    // },
    // handleDrag(event) {
    //   console.log('Drag: ', event)
    // },
    // handleDragStart(event) {
    //   console.log('DragStart: ', event)
    // }
  }
}
