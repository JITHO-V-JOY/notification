<template>
    <div class="notification" v-bind:style="{display: display}">
        <b-navbar sticky variant="danger" type="faded">
            <b-navbar-brand style="color:white;" href="#">Alert</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                      <i class="fas fa-times" style="color:white;" v-on:click="$emit('closeNotifications')"></i>
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
       
        <div v-if="unreadCount">
                <div v-for="notification in notifications" v-bind:key="notification.id">
                    <AlertComponent v-if="!notification.read"  v-bind:notification="notification" v-on:readNotification="readNotification"/>
                </div>
        </div>
        <div v-else class="alertHome">
            <img src="../../../public/images/alert.svg" height="293.66px" width="320px" alt="">
            <p>You don't have any alerts</p>
            <small>You will see notifications appear here</small>
        </div>
    </div>
</template>

<script>
import AlertComponent from './AlertComponent.vue'
import {getCount } from './services'

export default {
   name:"Notification",
   props:['display', 'notifications'],
   data(){
       return{
           count:0,
       }
   },
   computed:{
       unreadCount : function(){
           let notifications =  this.notifications.filter((notification)=> notification.read === false);
           return notifications.length
       }
   },
   components:{
       AlertComponent
   },
   methods:{
       accessNotificationCount(){
           setInterval(async function(){
               this.count = await getCount()
               this.$emit('getCount', this.count)
           }.bind(this), 10000)
       },
       readNotification(id){
           console.log("id", id)
           this.$emit('readNotification', id);
       }
   },
   async created(){
       this.accessNotificationCount()
   }
  
}
</script>