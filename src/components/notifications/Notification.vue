<template>
        <component :is="notification" ref="type" />
</template>

<script>
        import Pull from './Pull.vue'
        import Push from './Push.vue'
        import {notificationType} from '../../../public/config'
        export default {
            name:"Notification",
            components:{
                Pull,
                Push
            },
            computed:{
                /**
                 * to dynamically render specific notification component
                 */
                notification: function(){
                    if(notificationType === "PUSH")
                        return Push
                    return Pull   
                }   
            }
        }
</script>