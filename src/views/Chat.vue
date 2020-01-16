<template>
  <div class="chat">
    <chat-navbar />
    <b-container class="chat-actions p-0">
      <b-row no-gutters>
        <b-col cols="2">
          <chat-room-list />
        </b-col>
        <b-col cols="8">
          <b-row>
            <b-col>
              <chat-message-list />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <chat-message-form />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="2">
          <chat-user-list />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ChatNavbar from '../components/ChatNavbar'
import ChatRoomList from '../components/ChatRoomList'
import ChatMessageList from '../components/ChatMessageList'
import ChatUserList from '../components/ChatUserList'
import ChatMessageForm from '../components/ChatMessageForm'

export default {
  name: 'chat',
  components: {
    ChatNavbar,
    ChatRoomList,
    ChatMessageList,
    ChatUserList,
    ChatMessageForm
  }
}
</script>
