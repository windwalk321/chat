<template>
  <div class="message-list p-1">
    <div
      class="message p-2 mb-2"
      v-for="(message, index) in messages"
      :key="index"
    >
      <div class="clearfix">
        <h6 class="message-title">{{ message.name }}</h6>
        <small class="float-right text-muted">@{{ message.username }}</small>
      </div>
      <p class="mb-0">{{ message.text }}</p>
      <div class="clearfix">
        <small class="float-right text-muted">{{ message.date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'chatMessageList',
  computed: {
    ...mapState([
      'messages'
    ])
  }
}
</script>

<style scoped>
.message-list {
  height: 60vh !important;
  overflow-y: scroll;
  margin-bottom: 10px;
}
.message-title {
  display: inline;
}
.message {
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
  border-radius: 4px;
}
</style>
