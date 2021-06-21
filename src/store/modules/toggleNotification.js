const state = {
    show:"none"
};

const getters = {
    getDisplay : (state)=> state.show
}

const actions={
    toggleDisplay({commit}){
        const show = state.show === "block" ? "none": "block";
        commit('changeDisplay', show);
    }
};

const mutations={
    changeDisplay(state, show){
        state.show = show
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}