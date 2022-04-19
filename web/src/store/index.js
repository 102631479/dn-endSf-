import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idAdmin: '',
        updataUrl: 'http://183.134.74.133:8082/api/resource/upload',
        token: "",
        name: ''
    },
    mutations: {
        GetToken(state, payload) {
            state.token = payload
        },
        GetidAdmin(state, payload) {
            state.idAdmin = payload
        },
        GetName(state, payload) {
            state.name = payload
        }
    },
    actions: {},
    modules: {},
    plugins: [createPersistedState()]

})