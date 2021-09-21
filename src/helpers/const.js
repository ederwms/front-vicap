const API_HOST = () => {
  return 'http://localhost:3000'
}

const API_URL = `${API_HOST()}/api/v1`

const API_TRANSCRIPTION = `${API_URL}/transcription`
const API_TRANSCRIPTIONS = `${API_URL}/transcriptions`
const API_HEALTH_CHECK = `${API_URL}/health-check`

export default {
  API_TRANSCRIPTION,
  API_TRANSCRIPTIONS,
  API_HEALTH_CHECK
}
