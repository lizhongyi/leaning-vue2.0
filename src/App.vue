<template>
 <div id="app">
      <app-header></app-header>
      <router-view></router-view>
      <bot-menu></bot-menu>
	  <app-footer v-show="show_footer()"></app-footer>
  </div> 	  
</template>

<script>
    import appHeader from './components/public/App-header'
    import appFooter from './components/public/App-footer'
    import botMenu from './components/public/bot-menu'
    export default {
        name: 'app',
        components: {
            appHeader,
            appFooter,
            botMenu

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