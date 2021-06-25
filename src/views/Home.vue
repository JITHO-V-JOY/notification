<template>
  <div class="home">
    <div v-bind:style="{opacity: opacity}">
      <Header v-on:showNotifications="showNotifications" v-bind:count="count"/> 
      <Main /> 
    </div>
      <Notification ref="notification"  v-bind:display="display" v-bind:notifications="notifications" v-on:getCount="getCount"  v-on:closeNotifications="closeNotifications"/>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Notification from '../components/notifications/Notification.vue'
import {getNotifications} from '../components/notifications/services'
export default {
  name: 'Home',
  data(){
    return{
      opacity: 1,
      display: "none",
      count:0,
      notifications:[]
    }
  },
  components: {
    Header,
    Main,
    Notification
  },
  methods:{
   async showNotifications(){
      this.opacity = (this.opacity) === 1 ? 0.2 : 1
      if(this.display === "none"){
          this.notifications = await getNotifications();
      }
      this.display = (this.display === "block" ? "none": "block")
    },
    closeNotifications(){
      this.opacity = (this.opacity) === 1 ? 0.2 : 1
      this.display = (this.display === "block" ? "none": "block")
    },
    getCount(count){
      this.count = count
    }
  }
}
</script>
