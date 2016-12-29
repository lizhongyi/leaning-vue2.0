import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'

import userFollow from './user/user-follow'
import userLogin from './user/userLogin'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    // actions,
    // getters,
    users:{
    userLogin
    },
    

    strict: debug
        // plugins: debug ? [createLogger()] : []
        // plugins: middlewares
})