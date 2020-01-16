<template>
  <b-form>
    <b-form-group>
      <b-form-input
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
export default {
  name: 'chatMessageForm'
}
</script>
