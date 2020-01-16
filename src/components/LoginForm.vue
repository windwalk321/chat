<template>
  <b-form class="mx-auto">
    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="@">
      <b-input id="inline-form-input-username" placeholder="Username"></b-input>
    </b-input-group>
    <b-button
      variant="primary"
      class="float-right mt-2"
    >Login</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'loginForm'
}
</script>
