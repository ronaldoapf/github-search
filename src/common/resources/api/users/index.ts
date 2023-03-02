import { api } from "../api"
import { ReposResponse, UserResponse } from "./types"

const prefix = '/users'

export const UserApi = {
  async getUser(username: string): Promise<UserResponse> {
    const { data } = await api.get(`${prefix}/${username}`)
    return data
  },
  async getRepos(username: string): Promise<ReposResponse[]> {
    const { data } = await api.get(`${prefix}/${username}/repos`)
    return data
  }
}
