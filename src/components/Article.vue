<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <ul>
    <li v-for="item in lists">
      <router-link :to="{ name: 'ArticleDetail', params: { id: item.postId }}"> {{ item.articleTitle }} </router-link> 
    </li>
    </ul>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                name: "文章",
                lists: null
            }
        },
        methods: {
            get_list() {
                var self = this;
                let callback = {
                    success: function(data) {
                        var result = data.data;
                        if (result.statusCode == 200) {
                            self.lists = result.result;
                        }
                    },
                    error: function(data) {
                        console.log(data);
                    }
                }
                let apiURL = API.makeApiUrl(API.getArticleList.url, {
                    tag: "格隆汇"
                });
                API.get(apiURL).then(callback.success).catch(function(err) {
                    console.log(err);
                })
            }
        },
        created() {
            this.get_list();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>