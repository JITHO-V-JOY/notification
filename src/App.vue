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
    this.getCount();
    this.getNotifications();
    this.getNewNotifications();
  }
}
</script>


