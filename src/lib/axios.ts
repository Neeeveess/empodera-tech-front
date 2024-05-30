import axios from 'axios'

import { env } from '../env'

const apiUrl = env.VITE_API_URL

export const api = axios.create({
  baseURL: apiUrl,
})
