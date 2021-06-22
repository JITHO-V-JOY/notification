import Vuex from 'vuex';
import Vue from 'vue';
import toggleNotification from './modules/toggleNotification'
import services from './modules/services';

// Load Vuex

Vue.use(Vuex);

//create store

export default new Vuex.Store({
    modules:{
        toggleNotification,
        services
    }
})