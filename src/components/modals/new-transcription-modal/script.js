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
  emits: ['onClose'],
  data() {
    return {
      scssColors: ScssVariables,
      uploadedFile: null,
      jobName: ''
    }
  },
  methods: {
    close() {
      this.$emit('onClose')
    }
  }
}
