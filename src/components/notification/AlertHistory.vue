<template>
    <div>
        <div class="alertHistoryHead">
            <span><i class="fas fa-long-arrow-alt-left" v-on:click="toggleAlert" style="margin: left 0.5re;"></i> History</span>
            <i class="fas fa-times" v-on:click="toggleDisplay"></i>
        </div>
        <AlertComponent v-for="notification in getAllNotifications" v-bind:notification="notification" v-bind:key="notification.id"/>
        

    </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AlertComponent from './AlertComponent.vue'
export default {
   name:"AlertHistory",
   components:{
       AlertComponent
   },
   computed:{
       ...mapGetters(['getAllNotifications'])
   },
   methods:{
       ...mapActions(['toggleDisplay', 'toggleAlert'])
   }
}
</script>
