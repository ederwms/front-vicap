import { customAxios } from './genericApi'
import Const from '@/helpers/const'

export default {
  healthCheck() {
    return customAxios().get(`${Const.API_HEALTH_CHECK}`)
  },
  getAllTranscriptionJobs(filter) {
    return customAxios().get(`${Const.API_TRANSCRIPTIONS}?name=${filter}`)
  },
  getTranscriptionByName(name) {
    return customAxios().get(`${Const.API_TRANSCRIPTION}?name=${name}`)
  },
  startTranscriptionJob(params) {
    return customAxios().post(`${Const.API_TRANSCRIPTION}`, params)
  }
}
