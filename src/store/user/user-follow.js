import * as types from '../types'

const state = {
    userFollow: false,
    userFollowPending: false
}

const getters = {
    userFollowStatus: state => state.userFollow ? '已关注' : '未关注'
}

const mutations = {
    [types.USER__VUEX_FOLLOW](state, status = NaN) {
        state.userFollow = isNaN(status) ? !state.userFollow : status
    },
    [types.USER__VUEX_FOLLOW_PENDING](state, status = NaN) {
        state.userFollowPending = isNaN(status) ? !state.userFollowPending : status
    }
}

const actions = {
    userFollowAjax({ commit }, status) {
        commit(types.USER__VUEX_FOLLOW_PENDING)
        setTimeout(() => {
            commit(types.USER__VUEX_FOLLOW_PENDING)
            commit(types.USER__VUEX_FOLLOW, status)
        }, 2000)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}