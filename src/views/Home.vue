<template>
  <div class="home">
    <div v-bind:style="{opacity: getOpacity}">
       <Header/> 
      <Main /> 
    </div>
      <Notification />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Notification from '../components/notifications/Notification.vue'
export default {
  name: 'Home',
  computed:{
    ...mapGetters(['getOpacity'])
  },
  components: {
    Header,
    Main,
    Notification
  }
}
</script>
