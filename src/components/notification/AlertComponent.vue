<template>
     <b-card>
      <b-card-text>
        {{notification.title}}
      </b-card-text>
        <b-button variant="primary">show</b-button>   
     </b-card>
</template>

<script>
export default {
   name:"AlertComponent",
   props:['notification']
}
</script>