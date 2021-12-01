export default {
  SET_TRANSCRIPTION_JOBS(state, values) {
    state.transcriptionJobs = values
  },
  ADD_NEW_TRANSCRIPTION_JOB(state, values) {
    state.transcriptionJobs.unshift(values)
  }
}
