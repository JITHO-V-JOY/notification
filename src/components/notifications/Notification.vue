<template>
    <div class="notification" v-bind:style="{display: display}">
        <b-navbar sticky variant="danger" type="faded">
            <b-navbar-brand style="color:white;" href="#">Alerts</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                      <i class="fas fa-times" style="color:white;" v-on:click="closeNotifications"></i>
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
       
        <div v-if="notifications[0]">
            <div v-for="notification in notifications" v-bind:key="notification.id">
                <AlertComponent  v-bind:notification="notification"/>
            </div>
        </div>
        <div v-else class="alertHome">
            <img src="../../../public/images/alert.svg" width="324.08px"  height="293.66px" alt="">           
            <p>You don't have any alerts</p>
            <small>You will see notifications appear here</small>
        </div>
    </div>
</template>

<script>
import AlertComponent from './AlertComponent.vue'
import { getNotifications } from './services'
import { getNotificationCount} from '../../../public/config'

export default {
   name:"Notification",
   data(){
       return{
           count:0,
           opacity:1,
           notifications:[],
           display:"none"
       }
   },
   components:{
       AlertComponent
   },
   methods:{
        async showNotifications(){
            this.opacity = (this.opacity) === 1 ? 0.2 : 1
            this.$emit('getOpacity', this.opacity)
            if(this.display === "none" && this.count > 0){
                this.notifications = await getNotifications();
            }
            this.display = (this.display === "block" ? "none": "block")
       },
        closeNotifications(){
            this.opacity = (this.opacity === 1) ? 0.2 : 1
            this.$emit('getOpacity', this.opacity)
            this.display = (this.display === "block") ? "none": "block"
      },
   },
    
   async created(){
       getNotificationCount((count)=>{
            this.count = count
            this.$emit('getCount', this.count)
       })
       
   }
  
}
</script>