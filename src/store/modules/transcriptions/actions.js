import transcriptionService from '@/services/transcription'

export default {
  actionGetAllTranscriptionJobs({ commit }, filter = '') {
    return transcriptionService.getAllTranscriptionJobs(filter)
      .then((response) => {
        commit('SET_TRANSCRIPTION_JOBS', response.data.jobs)

        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error.response.data.error)
      })
  },
  actionGetTranscriptionJobByName(_, jobName) {
    return transcriptionService.getTranscriptionByName(jobName)
      .then((response) => {
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error.response.data.error)
      })
  },
  actionCreateTranscriptionJob(_, params) {
    return transcriptionService.startTranscriptionJob(params)
      .then((response) => {
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error.response.data.error)
      })
  }
}
