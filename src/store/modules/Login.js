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
        state.token = user
    },
    [types.USER_SIGNOUT](state) {
        localStorage.removeItem('user');
        state.token = null;
        state.user_login_info = null;
    },
    [types.USER_REG](state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.token = user
    }

}

const actions = {
    userLoginAjax({ commit }, data) {
        api.userlogin(JSON.stringify(data)).then(function(response) {
                if (response.data.statusCode == 200) {
                    commit(types.USER_SIGNIN, response.data.result.user);
                } else {
                    //次数原本需要要一个公共的消息插件传递信息暂时先用原生的
                    document.querySelector("#login_message").innerHTML = response.data.message;
                    document.querySelector("#login_message").className = 'error';
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