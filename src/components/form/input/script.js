import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'SGInput',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    label: {
      type: String,
      default: 'Label'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'input'],
  data() {
    return {
      isInputActive: false,
      inputRandomId: null
    }
  },
  mounted() {
    this.generateRandomId()
  },
  methods: {
    focusInput() {
      this.isInputActive = true
    },
    emitEvents($event) {
      this.$emit('update:modelValue', $event.target.value)
      this.$emit('input')
    },
    blurInput() {
      if (!this.modelValue || this.modelValue === '') {
        this.isInputActive = false
      }
    },
    generateRandomId() {
      this.inputRandomId = uuidv4()
    }
  }
}
