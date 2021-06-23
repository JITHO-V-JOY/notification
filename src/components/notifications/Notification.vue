<template>
    <div class="notification" v-bind:style="{display: getDisplay}">
        <div class="alertHeader">
            <span>Alerts</span>
            <i class="fas fa-times" v-on:click="toggleDisplay"></i>
         </div>
        <div v-if="count">
                <AlertComponent v-for="notification in notifications" v-bind:notification="notification" v-bind:key="notification.id"/>
                
        </div>
        <div v-else class="alertHome">
            <img src="../../../public/images/alert.svg" height="293.66px" width="324.08px" alt="">
            <p>You don't have any alerts</p>
            <small>You will see notifications appear here</small>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import AlertComponent from './AlertComponent.vue'
import {getCount, getNotifications} from './services'

export default {
   name:"Notification",
   data(){
       return{
           count:0,
           notifications:[]
       }
   },
   computed:mapGetters(['getDisplay', 'getAllNewNotifications', 'getNotificationCount']),
   components:{
       AlertComponent
   },
   methods:{
       ...mapActions(['toggleDisplay', 'toggleAlert'])
   },
   async created(){
     this.count = await getCount();
     this.notifications = await getNotifications();
   }
  
}
</script>