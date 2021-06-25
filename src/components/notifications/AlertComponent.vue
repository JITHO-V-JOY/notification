<template>
<b-card > 
    <b-card-body>
         <b-card-text>
            {{notification.title}} 

    </b-card-text>
    
    <b-button href="#" variant="secondary">Action</b-button>
    </b-card-body>
   
  </b-card>

</template>

<script>
export default {
    name: "AlertComponent",
    props: ['notification']
}
</script>