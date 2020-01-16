<template>
  <b-list-group>
    <b-list-group-item
      v-for="room in rooms"
      :key="room.id"
      :active="activeRoom.id === room.id"
      href="#"
    >
      # {{ room.name }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'chatRoomList',
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ])
  }
}
</script>
