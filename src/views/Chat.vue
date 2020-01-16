<template>
  <div class="chat">
    <chat-navbar />
    <b-container fluid>
      <b-row>
        <b-col cols="2">
          <chat-room-list />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ChatNavbar from '../components/ChatNavbar'
import ChatRoomList from '../components/ChatRoomList'

export default {
  name: 'chat',
  components: {
    ChatNavbar,
    ChatRoomList
  }
}
</script>
