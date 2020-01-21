import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.SET_ERROR] (state, error) {
    state.error = error
  },
  [types.SET_ACTIVE_ROOM] (state, room) {
    state.activeRoom = room
  },
  [types.SET_ROOMS] (state, rooms) {
    state.rooms = rooms
  },
  [types.SET_USERS] (state, users) {
    state.users = users
  }
}
