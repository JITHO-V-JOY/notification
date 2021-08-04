<template>
    <div class="notification" v-bind:style="{display: display}">
        <div class="alert-header">
            <h4 style="color:white">Alerts</h4>
             <i class="fas fa-times" style="color:white; font-size: 18px; cursor: pointer;" v-on:click="closeNotifications"></i>
        </div>
       
       
        <div v-if="notifications[0]">
            <div v-for="notification in notifications" v-bind:key="notification.id">
                <AlertComponent  v-bind:notification="notification"/>
            </div>
        </div>
        <div v-else class="alertHome">
            <img src="../../../public/img/alert.svg" width="324.08px"  height="293.66px" alt="">           
            <p>You don't have any alerts</p>
            <small>You will see notifications appear here</small>
        </div>
    </div>
</template>

<script>
import AlertComponent from './AlertComponent.vue'
import { getNotifications, getCount } from './services'
import { timeInterval } from '../../../public/config/notification'


export default {
   name:"Pull",
   data(){
       return{
           count:0,
           notifications:[],
           display:"none"
       }
   },
   components:{
       AlertComponent
   },
   methods:{
       /**
        * Pull Notification method
        * repeated on each time interval and update the count 
        */
       getNotificationCount(){
            setInterval(() => {
                 getCount((count, err)=>{
                     if(err){
                        console.log("error", err)
                     }else{
                        this.count = count;
                     }
                 })
             }, timeInterval)
       },
       /**
        * When user clicks the bell icon in the header this function will get invoked
        * filter the unread and readed messages
        * update the notifications data, toggle show for overlay, and update display value to show notification component
        */
        showNotifications(){
            if(this.count > 0){
                    getNotifications((notifications, err)=>{
                        if(err){
                            alert("error", err);
                        }
                        if(notifications){
                            let unread = notifications.filter((notification)=> notification.read === false)
                            let readed = notifications.filter((notification)=> notification.read === true)
                            this.notifications = [...unread, ...readed]
                            this.display = (this.display === "block" ? "none": "block")
                        }
                    });
              
                }else{
                   
                    this.display = (this.display === "block" ? "none": "block")
                }
               
           
       },
       /**
        * invoked when user clicks the close button in the Alert Header
        * toggle show for overlay
        * and hide visibility of the notification component
        */
        closeNotifications(){
            this.display = (this.display === "block") ? "none": "block"
      },
   },
    
   async created(){
       /**
        * starts fetching notification count
        */
       this.getNotificationCount()
   }
  
}
</script>

<style scoped>
    .notification {
        display: none;
        background-color: #c9cece;
        height: 100%;
        position: fixed;
        z-index: 1051;
        right: 0;
        min-width: 356px;
        border-radius: 0px;
        top: 0;
        overflow: scroll;
        border: none;
    }

    .alert-header{
        background: #7e7e7e;
        display: flex;
        justify-content: space-between;
        color: white;
        height: 66px;
        padding: 15px;
        margin: 0px;
        top:0;
        z-index: 1052;
        position: sticky;
      
    }

    .notification::-webkit-scrollbar {
        display: none;
    }

    .alertHome {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        padding: 10px;
        color: #0c0b0b;
    }

    .alertHome p {
         text-align: center;
    }

    .alertHome img {
        max-width: 100%;
        height: auto;
        margin: 29.66px;
    }

    .alertHome small {
        text-align: center;
        font-size: 15px;
    }

</style>
