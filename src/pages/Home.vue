<template lang="html">
  <div class="home">
    {{phoneBooks}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['phoneBooks'])
  }
}
</script>
<style lang="css">
</style>
