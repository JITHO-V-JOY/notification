import axios from "axios";

const state = {
    notificationCount: 0,
    notifications: []
};

const getters = {
    getNotificationCount : (state)=> state.notificationCount,
}

const actions={
    async getCount({commit}){
        const count = await axios.get('http://localhost:3000/notifications');
        console.log("hello",count.data)
        commit('changeCount', count.data.length);
    },
    
};

const mutations={
    changeCount(state, count){
        state.notificationCount = count
    },
};

export default{
    state,
    getters,
    actions,
    mutations
}