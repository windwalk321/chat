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
  },
  [types.ADD_MESSAGE] (state, message) {
    state.messages.push(message)
  },
  [types.CLEAR_ROOM] (state) {
    state.users = []
    state.messages = []
  },
  [types.RESET] (state) {
    state.error = null
    state.users = []
    state.messages = []
    state.rooms = []
    state.user = null
    state.activeRoom = null
  }
}
