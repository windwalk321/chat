<template>
  <b-form @submit.prevent="onSubmit" class="mx-auto">
    <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
    <b-input-group prepend="@">
      <b-input v-model="username" id="form-input-username" placeholder="Username"></b-input>
    </b-input-group>
    <b-button
      type="submit"
      variant="primary"
      class="float-right mt-2"
    >Login</b-button>
  </b-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'loginForm',
  data () {
    return {
      username: ''
    }
  },
  computed: {
    ...mapState([
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onSubmit () {
      const user = await this.login(this.username)
      if (user) {
        this.$router.push('/chat')
      }
    }
  }
}
</script>
