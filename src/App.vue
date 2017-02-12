<template>
 <div id="app">
      <app-header></app-header>
      <router-view></router-view>
	  <app-footer v-show="show_footer()"></app-footer>
  </div> 	  
</template>

<script>
    import appHeader from './App-header'
    import appFooter from './App-footer'
    export default {
        name: 'app',
        components: {
            appHeader,
            appFooter

        },
        methods: {
            show_footer: function() {
                if (this.$route.name != 'Login') {
                    return true
                } else {
                    return false;
                }
            },
            show_header: function() {
                if (this.$route.name != 'Login') {
                    return true
                } else {
                    return false;
                }
            }
        }


    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    .u-link--Active {
        color: #ff0000
    }
</style>