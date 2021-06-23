<template>
    <header>
        <h2>
            <label for="">
                <span class="fas fa-bars"></span>
            </label>
            Demo
        </h2>
        <div class="user-wrapper">
            <i class="fas fa-bell" v-on:click="toggleDisplay"><b-badge  v-if="count" class="danger">{{count}}</b-badge></i>
             <img src="../../public/images/user.png" width="40px" height="40px" alt="">
             <div>
                <h4>Admin</h4>
             </div>
        </div>
    </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' 
import {getCount} from './notifications/services'
export default {
  name:"Header",
  data(){
      return {
          count:0
      }
  },
  computed:mapGetters(['getNotificationCount']),
  methods: {
      ...mapActions(['toggleDisplay'])
  },
  async created(){
       this.count = await getCount()
   }
}
</script>

