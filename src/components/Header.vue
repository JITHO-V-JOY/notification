<template>
    <header>
        <h2>
            <label for="">
                <span class="fas fa-bars"></span>
            </label>
            Demo
        </h2>
        <div class="user-wrapper">
            <i class="fas fa-bell" v-on:click="toggleDisplay"><b-badge class="danger">{{getNotificationCount}}</b-badge></i>
             <img src="../../public/images/user.png" width="40px" height="40px" alt="">
             <div>
                <h4>Admin</h4>
             </div>
        </div>
    </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' 
export default {
  name:"Header",
  computed:mapGetters(['getNotificationCount']),
  methods: {
      ...mapActions(['toggleDisplay'])
  }
}
</script>

