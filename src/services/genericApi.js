import axios from 'axios'
// import Const from '@/helpers/const'

export const customAxios = () => {
  const instance = axios.create({})

  return instance
}
