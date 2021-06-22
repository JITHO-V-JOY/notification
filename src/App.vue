<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name:"App",
  methods:{
        ...mapActions(['getCount', 'getNotifications', 'getNewNotifications'])

  },
  created() {
    this.getNewNotifications();
    this.getCount();
    this.getNotifications();
  }
}
</script>


