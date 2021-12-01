import ScssVariables from '@/assets/scss/_variables.scss'
import Icon from '@/components/icon'
import SGButton from '@/components/form/button'

export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '90%'
    },
    height: {
      type: String,
      default: '90%'
    }
  },
  components: {
    Icon,
    SgButton: SGButton
  },
  emits: ['close'],
  data() {
    return {
      scssColors: ScssVariables
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
