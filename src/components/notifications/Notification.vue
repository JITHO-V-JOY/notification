<template>
    <div class="notification" v-bind:style="{display: getDisplay}">
        <div class="alertHeader">
            <span>Alerts</span>
            <i class="fas fa-times" v-on:click="toggleDisplay"></i>
         </div>
        <div v-if="getNotificationCount">
                <AlertComponent v-for="notification in getAllNewNotifications" v-bind:notification="notification" v-bind:key="notification.id"/>
                <button class="alertbtn" v-on:click="toggleAlert">See alert history</button>
        </div>
        <div v-else class="alertHome">
            <img src="../../../public/images/notification.jpg" height="200px" width="200px" alt="">
            <p>You don't have any alerts</p>
            <small>You will see notifications appear here</small>
            <button class="alertbtn" v-on:click="toggleAlert">See alert history</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import AlertComponent from './AlertComponent.vue'
export default {
   name:"Notification",
   computed:mapGetters(['getDisplay', 'getAllNewNotifications', 'getNotificationCount']),
   components:{
       AlertComponent
   },
   methods:{
       ...mapActions(['toggleDisplay', 'toggleAlert'])
   }
  
}
</script>