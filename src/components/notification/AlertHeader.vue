<template>
    <div class="alertHeader">
        <span>Alerts</span>
        <i class="fas fa-times" v-on:click="toggleDisplay"></i>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"AlertHeader",
    methods:{
        ...mapActions(['toggleDisplay'])
    }
}
</script>