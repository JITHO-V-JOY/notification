<template>
    <div>
    <div class="alertHeader">
        <span>Alerts</span>
        <i class="fas fa-times" v-on:click="toggleDisplay"></i>
    </div>
    <div class="alertHome">
        <img src="../../../public/images/notification.jpg" height="200px" width="200px" alt="">
        <p>You don't have any alerts</p>
        <small>You will see notifications from projects you work on appear here</small>
        <button class="alertbtn" v-on:click="toggleAlert">See alert history</button>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name:"AlertHome",
   methods:{
       ...mapActions(['toggleDisplay', 'toggleAlert'])
   }
}
</script>