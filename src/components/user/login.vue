<template>
    <div id="login">
<h1 class="user-title">用户登陆{{userLoginStatus}}</h1> 
<div class="login-box">
    <form id="user-login" name="user-login">
        <input type="text" id="username" name="username"/>
        <input type="text" id="password" name="password"/>
        <input type="button" value="login" @click="submit()" id="submit"/>
        <div v-if="message.text != null" :class="message.css" id="message">{{ message.text }}</div>
    </from>
</div>
</div>
</template>

<script>
    import {
        mapState,
        mapGetters
    } from 'vuex';
    export default {
        name: 'login',
        data() {
            return {
                username: null,
                password: null,
                message: {
                    text: null,
                    css: null
                },
                formData: {}
            }
        },
        created: function() {

        },
        computed: {
            ...mapGetters(['userLoginStatus'])
        },
        methods: {
            validate: function() {
                if (document.querySelector("#username").value && document.querySelector("#password").value) {
                    let data = {};
                    data.userName = document.querySelector("#username").value;
                    data.password = document.querySelector("#password").value;
                    this.formData = JSON.stringify(data);
                    return true;
                } else {
                    this.message.text = "please input right！";
                    this.message.css = 'error';
                    return false;
                }

            },
            submit: function() {
                if (!this.validate()) return false;

                this.message.text = "login ...";
                this.message.css = null;
                var $this = this;
                let callback = {
                    success: function(data) {
                        var result = data.data;
                        if (result.statusCode == 200) {
                            $this.message = "login success!";
                            setTimeout(() => {
                                $this.message.text = null;
                            }, 2000)
                        } else {
                            $this.message.text = result.message;
                            $this.message.css = 'error';
                        }
                    },
                    error: function(data) {
                        console.log(data);
                    }
                }
                let apiURL = API.makeApiUrl('/api/user/login', {

                });
                ajax.post(apiURL, this.formData).then(callback.success).catch(function(err) {
                    console.log(err);
                })
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