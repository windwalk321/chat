<template>
  <div class="login">
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col class="mx-auto" md="4">
          <login-form />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
