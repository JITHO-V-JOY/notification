<template>
         <b-navbar toggleable="lg"  variant="faded" type="light">
            <b-navbar-brand  href="#">Demo</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                         <i class="fas fa-bell" style="font-size: 20px" v-on:click="$emit('showNotifications')"><b-badge v-if="count" pill variant="danger">{{count}}+</b-badge></i>  
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>

<script>
export default {
  name:"Header",
  props:['count'],
}
</script>

