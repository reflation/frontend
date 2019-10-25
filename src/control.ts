import { sendID } from './api'

export const submitID = async (id: string) => {
  try {
    return (await sendID(id)).status === 201
  } catch (e) {
    return false
  }
}
