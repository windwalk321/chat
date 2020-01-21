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
  store.commit(types.CLEAR_ROOM)
  activeRoom = await currentUser.subscribeToRoomMultipart({
    roomId,
    hooks: {
      onPresenceChanged: () => {
        setMembers()
      },
      onMessage: message => {
        store.commit(types.ADD_MESSAGE, {
          name: message.sender.name,
          username: message.senderId,
          text: message.parts[0].payload.content,
          date: new Date(message.createdAt).toString()
        })
      }
    }
  })
  setMembers()
  return activeRoom
}

async function sendMessage (text) {
  const message = currentUser.sendSimpleMessage({
    roomId: activeRoom.id,
    text
  })

  return message
}

export default {
  connectUser,
  subscribeToRoom,
  sendMessage
}
