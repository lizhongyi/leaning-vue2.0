import * as types from '../types'
const state = {
    userLogin: false
}
const getters = {
    userLoginStatus: state => userLogin ? '已登录' : '未登录'
}
export default {
    state,
    getters
}