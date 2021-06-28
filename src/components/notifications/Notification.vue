<template>
        <Pull v-if="type === 'PULL'" ref="pull" v-on:getCount="getCount"  v-on:getOpacity="getOpacity" />
</template>

<script>
        import Pull from './Pull.vue'
        import {notificationType} from '../../../public/config'
        export default {
        name:"Notification",
        data(){
            return{
                type: notificationType
            }
        },
        components:{
            Pull
        },
        methods:{
            getCount(count){
                this.$emit('getCount', count)
            },
            getOpacity(opacity){
                this.$emit('getOpacity', opacity)
            },

            showNotifications(){
                this.$refs.pull.showNotifications()
            }
        }
        }
</script>