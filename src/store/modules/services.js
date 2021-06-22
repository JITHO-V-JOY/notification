import axios from "axios";

const state = {
    notificationCount: 0,
    notifications: null,
    newNotifications:null
};

const getters = {
    getNotificationCount : (state)=> state.notificationCount,
    getAllNotifications : (state)=> state.notifications,
    getAllNewNotifications : (state)=> state.newNotifications

}

const actions={
    async getCount({commit}){
        const count = await axios.get('http://localhost:3000/notifications');
        console.log("hello",count.data)
        commit('changeCount', count.data.filter((notification)=> notification.read === false).length);
    },

    async getNotifications({commit}){
        const notification = await axios.get('http://localhost:3000/notifications');
        commit('setNotification', notification.data[0]? notification.data: null)
    },
    async getNewNotifications({commit}){
        const newNotification = await axios.get('http://localhost:3000/notifications');
        commit('setNewNotification', newNotification.data.filter((notification)=> notification.read === false))

    }
    
};

const mutations={
    changeCount(state, count){
        state.notificationCount = count
    },
    setNotification(state, notification){
        state.notifications = notification
    },
    setNewNotification(state, newNotifications){
        state.newNotification = newNotifications
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}