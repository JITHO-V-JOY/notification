<template>
  <div class="home">
      <Header/> 
      <Main /> 
      <Notification />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Notification from '../components/Notification.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Notification
  }
}
</script>
