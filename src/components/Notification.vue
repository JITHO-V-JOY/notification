<template>
    <div class="notification" v-bind:style="{display: getDisplay}">
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   name:"Notification",
   computed:mapGetters(['getDisplay']),
  
}
</script>