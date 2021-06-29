<template>
<b-card v-if="notification.read" class="read" > 
    <b-card-body >
         <b-card-text> 
           {{notification.message}}
          </b-card-text>
            <router-link v-if="notification.type === 'link'" to="/" class="link">Link</router-link>
           <b-button v-else href="#" variant="secondary">Action</b-button>
    </b-card-body>

  </b-card>

  <b-card v-else > 
    <b-card-body >
         <b-card-text> 
           {{notification.message}}
          </b-card-text>
            <router-link v-if="notification.type === 'link'" to="/" class="link">Link</router-link>
           <b-button v-else href="#" variant="secondary">Action</b-button>
    </b-card-body>

  </b-card>

</template>

<script>
export default {
    name: "AlertComponent",
    props: ['notification']
}
</script>

<style scoped>
  .read{
    font-style: italic;
    color: rgb(185, 164, 185);
    background: whitesmoke;
  }
  .link{
    background: rgb(4, 173, 4);
    padding: 10px 20px;
    color: white;

    border-radius: 5px ;
    cursor: pointer;
  }
</style>

