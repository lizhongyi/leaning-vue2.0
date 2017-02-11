<template>
    <div id="login">
<h1 class="user-title">用户登陆</h1> 
<div class="login-box">
    <form id="user-login" name="user-login">
        <input type="text" id="username" v-model="user.userName" name="username"/>
        <input type="text" id="password" v-model="user.password" name="password"/>
        <input type="button" value="login" @click="submit" id="submit"/>
        <div v-if="userLoginMessage.text != null" :class="userLoginMessage.css" id="message">{{ userLoginMessage.text}}</div>
    </from>
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
        name: 'login',
        data() {
            return {
                user: {
                    userName: null,
                    password: null,

                }
            }
        },
        created: function() {

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
            ...mapGetters(['userLoginMessage'])
        },
        methods: {
            submit: function() {
                this.$store.dispatch('userLoginAjax', this.user);
            }
        }
    }
</script>

<style>
    #message {
        color: #000;
    }
    
    #message.error {
        color: #FF0000;
    }
    
    #message.success {
        color: green;
    }
</style>