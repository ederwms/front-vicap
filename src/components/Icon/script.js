import VideoSubtitleIcon from '@/components/icon/video-subtitle'
import CloseIcon from '@/components/icon/close'
import AlertIcon from '@/components/icon/alert'
import CheckIcon from '@/components/icon/check'
import InProgressIcon from '@/components/icon/in-progress'
import ClockIcon from '@/components/icon/clock'
import ClockCheckIcon from '@/components/icon/clock-check'
import UploadIcon from '@/components/icon/upload'
import TrashIcon from '@/components/icon/trash'
import VideoIcon from '@/components/icon/video'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    VideoSubtitleIcon,
    CloseIcon,
    AlertIcon,
    CheckIcon,
    InProgressIcon,
    ClockIcon,
    ClockCheckIcon,
    UploadIcon,
    TrashIcon,
    VideoIcon
  }
}
