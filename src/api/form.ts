import { api } from '../lib/axios'
import { SubscribleForm } from './../pages/Home/FormSection/index'

export async function subscribe(data: SubscribleForm) {
  await api.post('/api/register', data)
}
