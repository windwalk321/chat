import * as types from './mutation-types'
import chatkit from '../chatkit'

export default {
  async login ({ commit, state }, userId) {
    try {
      const currentUser = await chatkit.connectUser(userId)
      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }))
      const activeRoom = rooms[0]

      commit(types.SET_USER, {
        username: currentUser.id,
        name: currentUser.name
      })
      commit(types.SET_ACTIVE_ROOM, {
        id: activeRoom.id,
        name: activeRoom.name
      })
      commit(types.SET_ERROR, null)
      commit(types.SET_ROOMS, rooms)

      await chatkit.subscribeToRoom(activeRoom.id)

      return true
    } catch (error) {
      commit(types.SET_ERROR, error.info.error_description)
    }
  },

  async sendMessage ({ commit }, message) {
    try {
      commit(types.SET_ERROR, null)
      const userMessage = await chatkit.sendMessage(message)
      return userMessage
    } catch (error) {
      commit(types.SET_ERROR, error.info.error_description)
    }
  },

  async changeRoom ({ commit }, roomId) {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId)
      commit(types.SET_ACTIVE_ROOM, { id, name })
    } catch (error) {
      commit(types.SET_ERROR, error.info.error_description)
    }
  }
}
