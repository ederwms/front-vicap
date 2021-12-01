export default {
  name: 'SGButton',
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  data() {
    return {
    }
  }
}
