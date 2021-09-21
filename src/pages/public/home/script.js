import { mapActions, mapGetters } from 'vuex'

import SGHeader from '@/components/Header'

export default {
  name: 'HomePage',
  components: {
    SgHeader: SGHeader
  },
  data() {
    return {
      initialData: 'Home Page'
    }
  },
  created() {
    document.title = 'ViCap - Solicitações'
  },
  mounted() {
    this.getAllTranscriptionJobs()
  },
  computed: {
    ...mapGetters(['getterTranscriptionJobs'])
  },
  methods: {
    ...mapActions([
      'actionHealthCheck',
      'actionGetAllTranscriptionJobs'
    ]),
    healthCheck() {
      this.actionHealthCheck()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAllTranscriptionJobs() {
      this.actionGetAllTranscriptionJobs()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
