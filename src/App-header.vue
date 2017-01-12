<template>
    <div id="header">
  <div id="top-menu"><router-link to="/login" class="login-btn">login</router-link><a href="reg" class="reg">sigup</a> {{userLoginStatus}}</div>
  <div class="menu">
   <router-link to="/" exact> home</router-link>
   <router-link to="/article" exact> article</router-link>
   <router-link to="/user" exact> user</router-link>
  </div>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex'
    export default {
        name: "header",
        data() {
            return {

            }
        },computed: {
            ...mapGetters(['userLoginStatus'])
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>