<template>
  <div class="home">
    <b-overlay :show="show">
      <Header @showNotifications="showNotifications" :count="notificationCount"/> 
      <Main /> 
        <template #overlay>
          <p></p>
        </template>
        <Notification ref="notification" />
    </b-overlay>
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
      isMounted: false
    }
  },
  components: {
    Header,
    Main,
    Notification
  },
  computed:{
    /**
     * for fetching notification count from service
     */
    notificationCount: function() {
       if(!this.isMounted)
        return 0;
      else{
          return this.$refs.notification.$refs.type.count
      }
    },
    /**
     * computed property show, for toggling overlay
     */
    show: function(){
      if(!this.isMounted)
        return false;
      else
        return this.$refs.notification.$refs.type.show
    }
  },
  methods:{
    /**
     * to display the notification component and its messages
     */
    showNotifications(){
        return this.$refs.notification.$refs.type.showNotifications()
    }
  },
  mounted(){
    /**
     * implemented for computed property, unless {{this.$refs}} will not work
     */
    this.isMounted = true;
  }
}
</script>
