import config from './config/public'
import axios from '@/utils/request'

export const getSlider = () => axios.get(config.getSlider)
