import { createStore } from 'vuex'

import TranscriptionModule from './modules/transcriptions'

export default createStore({
  modules: {
    transcription: TranscriptionModule
  }
})
