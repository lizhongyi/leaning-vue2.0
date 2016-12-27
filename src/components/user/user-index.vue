<template>
    <div id="user">
<h1 class="user-title">用户页面</h1> 
<router-link to="/user/10" exact>userHome</router-link>
<router-link to="/user/recommend" exact>recommend</router-link>
 <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: 'user'
    }
</script>

<style>

</style>