<template>
<b-card v-if="notification.read" class="read" > 
    <b-card-body >
         <p> 
           {{notification.message}}
          </p>
            <router-link v-if="notification.type === 'link'" to="/" >Link</router-link>
           <base-form-button v-else href="#" label="Action" :disabled="true" ></base-form-button>
    </b-card-body>

  </b-card>

  <b-card v-else class="not-read" > 
    <b-card-body >
         <b-card-text> 
           {{notification.message}}
          </b-card-text>
            <router-link v-if="notification.type === 'link'" to="/" class="link">Link</router-link>
           <base-form-button v-else href="#" label="Action" ></base-form-button>
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
    margin: 5px 1px;
  }
  .not-read{
    background: whitesmoke;
    margin: 5px 1px;
  }
 
</style>

