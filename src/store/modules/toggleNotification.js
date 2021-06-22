

const state = {
    show:"none",
    toggle: true,
    opacity: 1
};

const getters = {
    getDisplay : (state)=> state.show,
    getToggle : (state) => state.toggle,
    getOpacity: (state)=> state.opacity
}

const actions={
    toggleDisplay({commit}){
        const show = state.show === "block" ? "none": "block"
        const opacity = state.opacity === 1? 0.2:1
        commit('setOpacity', opacity)
        commit('changeDisplay', show)
    },
    toggleAlert({commit}){
        const toggle = !state.toggle;
        commit('changeAlert', toggle)
    },
    
};

const mutations={
    changeDisplay(state, show){
        state.show = show
    },
    changeAlert(state, toggle){
        state.toggle = toggle
    },
    setOpacity(state, opacity){
        state.opacity = opacity
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}