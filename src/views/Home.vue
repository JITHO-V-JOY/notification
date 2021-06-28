<template>
  <div class="home">
    <div v-bind:style="{opacity: opacity}">
      <Header v-on:showNotifications="showNotifications" v-bind:count="count"/> 
      <Main /> 
    </div>
      <Notification ref="notification" v-on:getCount="getCount"  v-on:getOpacity="getOpacity"/>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Notification from '../components/notifications/Notification.vue'


export default {
  name: 'Home',
  data(){
    return{
      opacity: 1,
      count:0
    }
  },
  components: {
    Header,
    Main,
    Notification
  },
  methods:{
    showNotifications(){
        this.$refs.notification.showNotifications()
    },
    getCount(count){
      this.count = count
    },
    getOpacity(opacity){
      this.opacity = opacity
    }
  }
}
</script>
