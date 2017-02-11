<template>
    <div id="header">
  <div id="top-menu"><router-link to="/login" class="login-btn">login</router-link><a href="reg" class="reg">sigup</a> {{userLoginStatus}} <div v-if="userLoginStatus == '已登录'"><span @click="userLogout">退出登录</a></div></div>
  <div class="menu">
   <router-link to="/" exact> home</router-link>
   <router-link to="/article" exact> article</router-link>
   <router-link to="/user" exact> user</router-link>
  </div>
  </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        name: "header",
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                state: ({
                    Login
                }) => Login,
                mapStateLogin: ({
                    Login
                }) => Login.token
            }),
            ...mapGetters(['userLoginStatus'])
        },
        methods: {
            ...mapActions(['userLogout'])
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>