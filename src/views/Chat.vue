<template>
  <div class="chat">
    <chat-navbar />
    <b-container class="chat-actions p-0">
      <b-row no-gutters>
        <b-col cols="2">
          <chat-room-list />
        </b-col>
        <b-col cols="8">
          <chat-message-list />
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

export default {
  name: 'chat',
  components: {
    ChatNavbar,
    ChatRoomList,
    ChatMessageList,
    ChatUserList
  }
}
</script>
