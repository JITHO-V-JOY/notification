<template>
    <div>
        <component :is="alertComponent"/>
    </div>
       
</template>

<script>
import AlertHome from './AlertHome.vue'
import AlertHistory from './AlertHistory.vue'
import { mapGetters } from 'vuex'


export default {
    name:"Alert",
    components:{
        AlertHome,
        AlertHistory
    },
    computed:{
        ...mapGetters(['getToggle']),
        alertComponent(){
            if (this.getToggle){
                return AlertHome
            }else{
                return AlertHistory
            }
        }
    }
}
</script>