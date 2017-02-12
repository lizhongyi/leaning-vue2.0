<template>
    <div id="login">
<h1 class="user-title">用户登陆</h1> 
<div class="login-box">
    <form id="user-login" name="user-login">
        <input type="text" id="username" v-model="user.userName" name="username"/>
        <input type="text" id="password" v-model="user.password" name="password"/>
        <input type="button" value="login" @click="submit" id="submit"/>
        <div :class="message.css" id="login_message">{{ message.text}}</div>
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

                },
                message: {
                    text: null,
                    css: null

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
            ...mapGetters([
                'userLoginInfo'
            ])
        },
        methods: {
            ...mapActions(['userLoginAjax']),
            submit: function() {
                if (!this.user.userName || !this.user.password) {
                    this.message = {
                        text: '请填写完整',
                        css: 'error'
                    }
                    return;
                }
                this.userLoginAjax(this.user);
            }
        }
    }
</script>

<style>
    #login_message {
        color: #000;
    }
    
    #login_message.error {
        color: #FF0000;
    }
    
    #login_message.success {
        color: green;
    }
</style>