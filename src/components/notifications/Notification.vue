<template>
    <div class="notification" v-bind:style="{display: display}">
        <div class="alertHeader">
            <span>Alerts</span>
            <i class="fas fa-times" v-on:click="$emit('closeDisplay')"></i>
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
   components:{
       AlertComponent
   },
   methods:{
       accessCount(){
           setInterval(async function(){
               this.count = await getCount()
               this.$emit('getCount', this.count)
           }.bind(this), 1000)
       }
   },
   async created(){
       this.accessCount()
   }
  
}
</script>