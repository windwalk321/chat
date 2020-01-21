/* eslint-disable */
import store from './store'
import * as types from './store/mutation-types'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

let currentUser
let activeRoom

function setMembers () {
  const members = activeRoom.users.map(user => ({
    username: user.id,
    name: user.name,
    presence: user.presence.state
  }))
  store.commit(types.SET_USERS, members)
}

async function connectUser (userId) {
  const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:8a35630d-5e99-4829-9b60-49ee3c8cb53e',
    userId,
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8a35630d-5e99-4829-9b60-49ee3c8cb53e/token' })
  })
  currentUser = await chatManager.connect()
  return currentUser
}

async function subscribeToRoom (roomId) {
  activeRoom = await currentUser.subscribeToRoomMultipart({
    roomId,
    hooks: {
      onPresenceChanged: () => {
        setMembers()
      }
    }
  })
  setMembers()
  return activeRoom
}

export default {
  connectUser,
  subscribeToRoom
}
