import { createStore } from 'vuex';

const state = {
    selectedIndustryId: -1
}

const mutations = {
    selectIndustryId(state, industry) {
        state.selectedIndustryId = industry
    }
}

export default createStore({
    state,
    mutations
})