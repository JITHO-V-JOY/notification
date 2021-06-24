<template>
<b-card > 
    <div class="close">
             <i class="fas fa-times"  v-on:click="$emit('readNotification', notification.id)"></i>
    </div>
    
    <b-card-text>
            {{notification.title}} 

    </b-card-text>
    
    
    <b-button href="#" variant="secondary">Action</b-button>
  </b-card>

</template>

<script>
export default {
    name: "AlertComponent",
    props: ['notification']
}
</script>