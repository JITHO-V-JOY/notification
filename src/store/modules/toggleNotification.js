
import {getNotifications} from '../../components/notifications/services'

const state = {
    show:"none",
    notifications:[],
    opacity: 1
};

const getters = {
    getDisplay : (state)=> state.show,
    getOpacity: (state)=> state.opacity,
    getAllNotifications: (state)=> state.notifications
}

const actions={
    async toggleDisplay({commit}){
        if(state.show === "none"){
            const response = await getNotifications();
            commit('setNotifications', response);
        }
        const show = state.show === "block" ? "none": "block"
        const opacity = state.opacity === 1? 0.2:1
        commit('setOpacity', opacity)
        commit('changeDisplay', show)
    }
    
};

const mutations={
    changeDisplay(state, show){
        state.show = show
    },
    setOpacity(state, opacity){
        state.opacity = opacity
    },
    setNotifications(state, notifications){
        state.notifications = notifications
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}