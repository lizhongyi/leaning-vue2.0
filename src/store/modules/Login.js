import * as types from '../types'
import api from '../../api/Rest-api.js'

var isLoggedIn = function() {
    var token = localStorage.getItem('user');
    if (token) {

        return JSON.parse(localStorage.getItem('user'))

    } else {
        return false;
    }
}

const state = {
    token: isLoggedIn() || null,
    message: {
        text: null,
        css: null
    }
}
const getters = {
    userLoginStatus: state => state.token ? '已登录' : '未登录',
    userLoginMessage: state => state.message
}

const mutations = {
    [types.USER__VUEX_LOGIN](state, status = NaN) {
        state.token = isNaN(status) ? !state.token : status
    },
    [types.USER__VUEX_lOGIN_MESSAGE](state, status = NaN) {
        state.message = status
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
        if (!data.userName || !data.password) {
            commit(types.USER__VUEX_lOGIN_MESSAGE, { text: '请填写完整', css: 'error' });
            return;
        }
        api.userlogin(JSON.stringify(data)).then(function(response) {
                if (response.data.statusCode == 200) {
                    commit(types.USER__VUEX_lOGIN_MESSAGE, { text: '登陆成功', css: 'success' });
                    commit(types.USER_SIGNIN, response.data.result.user);
                    commit(types.USER__VUEX_LOGIN, true);

                } else {
                    commit(types.USER__VUEX_lOGIN_MESSAGE, { text: '登陆失败', css: 'error' });
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    userLogout({ commit }) {
        api.get(api.logout.url).then(function(response) {
                if (response.data.statusCode == 200) {
                    commit(types.USER_SIGNOUT);
                }

            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}