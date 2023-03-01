import { api } from "../api"

const prefix = '/users'

export const UserApi = {
  async getUser(username: string): Promise<void> {
    await api.get(`${prefix}/${username}`)
  }
}
