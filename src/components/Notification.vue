<template>
    <div class="notification" v-bind:style="{display: getDisplay}">
        <Alert/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Alert from './notification/Alert.vue'

export default {
   name:"Notification",
   computed:mapGetters(['getDisplay']),
   components:{
       Alert
   }
  
}
</script>