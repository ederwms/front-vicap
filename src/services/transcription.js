import { customAxios } from './genericApi'
import Const from '@/helpers/const'

export default {
  healthCheck() {
    return customAxios().get(
      `${Const.API_HEALTH_CHECK}`
    )
  },
  getAllTranscriptionJobs() {
    return customAxios().get(
      `${Const.API_TRANSCRIPTIONS}`
    )
  },
  getTranscriptionByName(name) {
    return customAxios().get(
      `${Const.API_TRANSCRIPTION}?name=${name}`
    )
  },
  startTranscriptionJob(params) {
    return customAxios().get(
      `${Const.API_TRANSCRIPTION}`,
      params
    )
  }
}
