/* eslint-disable */
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

let currentUser = null

async function connectUser (userId) {
  const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:8a35630d-5e99-4829-9b60-49ee3c8cb53e',
    userId,
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8a35630d-5e99-4829-9b60-49ee3c8cb53e/token' })
  })
  currentUser = await chatManager.connect()
  return currentUser
}

export default {
  connectUser
}
