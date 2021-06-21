<template>
    <div>
        <AlertHeader/>
        <AlertHome/>
    </div>
       
</template>

<script>
import AlertHeader from './AlertHeader.vue'
import AlertHome from './AlertHome.vue'
export default {
    name:"Alert",
    components:{
        AlertHeader,
        AlertHome

    }
}
</script>