<template>
  <div class="helslo">
   <router-link to="/" exact> home</router-link>
   <router-link to="/article" exact> article</router-link>
   <router-link to="/user" exact> user</router-link>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>