<template>
    <div id="login">
<h1 class="user-title">用户登陆</h1> 
<div class="login-box">
    <form id="user-login" name="user-login">
        <input type="text" id="username" v-model="username" name="username"/>
        <input type="text" id="password" v-model="password" name="password"/>
        <input type="button" value="login" @click="userLoginAjax" id="submit"/>
        <div v-if="message.text != null" :class="message.css" id="message">{{ message.text }}</div>
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
                username: null,
                password: null,
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
                }) => Login.userLogin
            }),
        },
        methods: {
            validate: function() {
                if (this.username && this.password) {
                    var data = {
                        userName: this.username,
                        password: this.password
                    };
                    console.log(data);
                    this.submit(JSON.stringify(data));

                } else {
                    this.message.text = "please input right！";
                    this.message.css = 'error';
                    return false;
                }

            },
            submit: function(data) {
                // if(!data) return false;
                // this.message.text = "login ...";
                // this.message.css = null;
                // var $this = this;
                // let callback = {
                //     success: function(data) {
                //         var result = data.data;
                //         if (result.statusCode == 200) {
                //             $this.message.text = "login success!";
                //             $this.$store.userLogin = true;
                //             setTimeout(() => {
                //                 $this.message.text = null;
                //             }, 2000)
                //         } else {
                //             $this.message.text = result.message;
                //             $this.message.css = 'error';
                //         }
                //     },
                //     error: function(data) {
                //         console.log(data);
                //     }
                // }
                // let apiURL = API.makeApiUrl('/api/user/login', {

                // });
                // ajax.post(apiURL, data).then(callback.success).catch(function(err) {
                //     console.log(err);
                // })

                this.$store.dispatch('UserLogin', this.user);
            },
            ...mapMutations(['USER__VUEX_lOGIN']),
            ...mapActions(['userLoginAjax'])


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