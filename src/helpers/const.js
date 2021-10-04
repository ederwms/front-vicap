const API_HOST = () => {
  return process.env.VUE_APP_API_URL
}

const API_URL = `${API_HOST()}/api/v1`

const API_TRANSCRIPTION = `${API_URL}/transcription`
const API_TRANSCRIPTIONS = `${API_URL}/transcriptions`
const API_FILE = `${API_URL}/file`
const API_HEALTH_CHECK = `${API_URL}/health-check`

export default {
  API_TRANSCRIPTION,
  API_TRANSCRIPTIONS,
  API_FILE,
  API_HEALTH_CHECK
}
