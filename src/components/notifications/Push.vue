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
       
        <div v-if="count">
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
import { getNotifications} from './services'


export default {
   name:"Push",
   data(){
       return{
           count:0,
           show:false,
           notifications:[],
           display:"none"
       }
   },
   components:{
       AlertComponent
   },
   methods:{
       /**
        * When user clicks the bell icon in the header this function will get invoked
        * filter the unread and readed messages
        * update the notifications data, toggle show for overlay, and update display value to show notification component
        */
        showNotifications(){
            if(this.display === "none" && this.count > 0){
                getNotifications((notifications, err)=>{
                    if(err){
                        console.log("error", err)
                    }
                    if(notifications){
                          let unread = notifications.filter((notification)=> notification.read === false)
                          let readed = notifications.filter((notification)=> notification.read === true)
                          this.notifications = [...unread, ...readed]
                          this.show = this.show ? false : true
                          this.display = (this.display === "block" ? "none": "block")
                    }
                })
            }
       },
        /**
        * invoked when user clicks the close button in the Alert Header
        * toggle show for overlay
        * and hide visibility of the notification component
        */
        closeNotifications(){
            this.show = this.show ? false : true
            this.display = (this.display === "block") ? "none": "block"
      },
   }
  
}
</script>