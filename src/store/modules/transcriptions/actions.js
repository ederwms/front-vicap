import transcriptionService from '@/services/transcription'

export default {
  actionHealthCheck() {
    return transcriptionService
      .healthCheck()
      .then((response) => {
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error.response)
      })
  },
  actionGetAllTranscriptionJobs({ commit }) {
    return transcriptionService
      .getAllTranscriptionJobs()
      .then((response) => {
        commit(
          'SET_TRANSCRIPTION_JOBS',
          response.data.jobs
        )

        return Promise.resolve(response.data)
      })
      .catch((error) => {
        return Promise.reject(error.response)
      })
  }
}
