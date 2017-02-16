import * as types from '../types'
import api from '../../api/Rest-api.js'
import router from '../../router'
var isLoggedIn = function() {
    var token = localStorage.getItem('user');
    if (token) {

        return JSON.parse(localStorage.getItem('user'))

    } else {

        return false;
    }
}


const state = {
    token: isLoggedIn() || null
}
const getters = {
    userLoginInfo: state => state.token
}

const mutations = {
    [types.USER_LOGIN](state, status = NaN) {
        state.token = isNaN(status) ? !state.token : status
    },
    [types.USER_SIGNIN](state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('accessToken', JSON.stringify(user));
        state.token = user
    },
    [types.USER_SIGNOUT](state) {
        sessionStorage.removeItem("accessToken");
        localStorage.removeItem('user');
        state.token = null;
        state.user_login_info = null;
        //要检查当前的路由名字如果是需要验证的则必须跳转到登录页面

    },
    [types.USER_REG](state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.token = user
    }

}

const actions = {
    userLoginAjax({ commit }, data) {
        return api.userlogin(JSON.stringify(data));
    },
    userLogout({ commit }, route) {
        var route = route;
        api.get(api.logout.url).then(function(response) {
                if (response.data.statusCode == 200) {
                    commit(types.USER_SIGNOUT);

                    if (route == '/article' || route == '/user') {
                        router.push('/');
                    }

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