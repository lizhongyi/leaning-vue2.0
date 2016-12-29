<template>
    <div id="recommend'">
    <h1>推荐用户</h1>
     <ul>
         
         <div v-if="pendding" class="pendding">加载中...</div>
    <li v-for="item in userList">
        <div class="user-avatar"><img :src="item.avatar" width="50" height="50" alt=""></div>
      <router-link :to="'/user/'+item.userId"  exact> {{ item.nickname }} </router-link> 
      <div class="userFollow"></div>
      <!--<router-link :to="{path:'',parmas:{id:item.userId}}"  exact> {{ item.nickname }} </router-link>-->
    </li>
    </ul>
    </div>
</template>
<script>
    export default {
        name: 'recommend',
        data() {
            return {
                userList: null,
                pendding: false
            }
        },
        created: function() {
            this.showUsetList(1, 5)
        },
        methods: {
            showUsetList: function(page, count) {
                this.pendding = true;
                var self = this;
                //成功回调函数
                let callback = {
                    success: function(data) {
                        var result = data.data;
                        if (result.statusCode == 200) {
                            self.userList = result.result.userList;
                            console.log(self.userList)
                            self.pendding = false;
                        }
                    },
                    error: function(data) {
                        console.log(data);
                    }
                }
                let apiURL = API.makeApiUrl('/api/search/user?keyword=long&count=10&page=1', {

                });
                ajax.get(apiURL).then(callback.success).catch(function(err) {
                    console.log(err);
                })

            }
        }
    }
</script>

<style>

</style>