import * as types from '../types'
const state = {
    userLogin: false
}
const getters = {
    userLoginStatus: state => state.userLogin ? '已登录' : '未登录'
}

const mutations = {
    [types.USER__VUEX_LOGIN](state, status = NaN) {
        state.userLogin = isNaN(status) ? !state.userLogin : status
    },
    [types.USER_SIGNIN](state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.token = user
    },
    [types.USER_SIGNOUT](state) {
        localStorage.removeItem('user');
        state.token = null;
    },
    [types.USER_REG](state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.token = user
    }
}

const actions = {
    userLoginAjax({ commit }, data) {
        api.localLogin(data).then(function(response) {
                if (response.data.type == true) {
                    commit(USER_SIGNIN, response.data.token);
                } else {

                }
            })
            .catch(function(error) {
                console.log(error);
            });
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}