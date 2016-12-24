<template>
  <div class="article-detail">
    <h2 class="title">{{ title }}</h2>
    <div class="content" v-html="content"></div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                name: "文章详细",
                title: null,
                postId: null,
                content: null,
            }
        },
        methods: {
            show_detail(id) {
                var self = this;
                let callback = {
                    success: function(data) {
                        var result = data.data;
                        if (result.statusCode == 200) {
                            self.title = result.result.title;
                            self.content = result.result.content;
                        }
                    },
                    error: function(data) {
                        console.log(data);
                    }
                }

                let apiURL = API.makeApiUrl(API.getPost.url, {
                    postId: id
                });
                ajax.get(apiURL).then(callback.success).catch(function(err) {
                    console.log(err);
                })
            }
        },
        created() {
            this.postId = this.$route.params.id;
            this.show_detail(this.postId);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
    
    .article-detail {
        width: 800px;
        margin: 0 auto;
    }
</style>