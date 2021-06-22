const state = {
    show:"none",
    toggle: true
};

const getters = {
    getDisplay : (state)=> state.show,
    getToggle : (state) => state.toggle
}

const actions={
    toggleDisplay({commit}){
        const show = state.show === "block" ? "none": "block";
        commit('changeDisplay', show);
    },
    toggleAlert({commit}){
        const toggle = !state.toggle;
        commit('changeAlert', toggle)
    }
};

const mutations={
    changeDisplay(state, show){
        state.show = show
    },
    changeAlert(state, toggle){
        state.toggle = toggle
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}