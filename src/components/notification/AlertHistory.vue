<template>
    <div class="alertHistoryHead">
        <span><i class="fas fa-long-arrow-alt-left" v-on:click="toggleAlert" style="margin: left 0.5re;"></i> History</span>
        <i class="fas fa-times" v-on:click="toggleDisplay"></i>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name:"AlertHistory",
   methods:{
       ...mapActions(['toggleDisplay', 'toggleAlert'])
   }
}
</script>
