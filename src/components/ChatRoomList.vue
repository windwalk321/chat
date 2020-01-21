<template>
  <b-list-group class="pt-1" flush>
    <b-list-group-item
      v-for="room in rooms"
      @click="onChange(room)"
      :key="room.id"
      :active="activeRoom.id === room.id"
      href="#"
    >
      # {{ room.name }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'chatRoomList',
  computed: {
    ...mapState([
      'rooms',
      'activeRoom'
    ])
  },
  methods: {
    ...mapActions([
      'changeRoom'
    ]),
    onChange (room) {
      this.changeRoom(room.id)
    }
  }
}
</script>
