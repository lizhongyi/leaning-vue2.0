import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/Login'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        Login
    },

    strict: debug
        // plugins: debug ? [createLogger()] : []
        // plugins: middlewares
})