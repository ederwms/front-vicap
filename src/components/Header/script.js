import ScssVariables from '@/assets/scss/_variables.scss'

import Icon from '@/components/icon'

export default {
  name: 'SGHeader',
  components: {
    Icon
  },
  data() {
    return {
      initialData: 'Header',
      scssColors: ScssVariables
    }
  }
}
