import * as types from './mutation-types'
import chatkit from '../chatkit'

export default {
  async login ({ commit, state }, userId) {
    try {
      const currentUser = await chatkit.connectUser(userId)
      commit(types.SET_USER, {
        username: currentUser.id,
        name: currentUser.name
      })
      commit(types.SET_ERROR, null)
      return true
    } catch (error) {
      commit(types.SET_ERROR, error.info.error_description)
    }
  }
}
