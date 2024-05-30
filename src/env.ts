import { z } from 'zod'

const apiUrl = 'https://sistema-empoderatech.onrender.com/'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

const env = { VITE_API_URL: apiUrl }

export { env }
