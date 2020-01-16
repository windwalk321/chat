<template>
  <b-list-group class="pt-1" flush>
    <b-list-group-item
      v-for="(user, index) in users"
      :key="index"
    >
      {{ user.name }}
      <b-badge
        pill
        :variant="statusColor(user.presence)"
      >
        {{ user.presence }}
      </b-badge>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'chatUserList',
  computed: {
    ...mapState([
      'users'
    ])
  },
  methods: {
    statusColor (status) {
      return status === 'online' ? 'success' : 'warning'
    }
  }
}
</script>
