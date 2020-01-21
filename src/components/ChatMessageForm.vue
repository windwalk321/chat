<template>
  <b-form @submit.prevent="onSubmit">
    <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
    <b-form-group>
      <b-form-input
        v-model.trim="message"
        id="form-input-text"
        placeholder="Write a message..."
      ></b-form-input>
      <b-button type="submit" variant="primary" class="float-right mt-2">
        Send
      </b-button>
    </b-form-group>
  </b-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'chatMessageForm',
  data () {
    return {
      message: ''
    }
  },
  computed: {
    ...mapState([
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'sendMessage'
    ]),
    async onSubmit () {
      const message = await this.sendMessage(this.message)
      if (message) {
        this.message = ''
      }
    }
  }
}
</script>
