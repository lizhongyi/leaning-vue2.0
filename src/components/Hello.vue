<template>
  <div class="hello">
    <h1 @click="test()">{{ name }}</h1>
    <ul>
    <li v-for="item in lists">
      {{ item.articleTitle }} 
    </li>
    </ul>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      name:"vue",
      lists:null
    }
  },
  methods:{
     test(){
       alert(2);
     },
     get_list()
     {
     	  var self = this;
		  let callback = {
		    success:function(data){
			  var result = data.data;
			  if(result.statusCode == 200)
			  {
			     self.lists = result.result;
			  }
			},
			error:function(data)
			{
			    console.log(data);
			}
		  }
     	  let apiURL = '/api/tags/articles?tags=%E6%A0%BC%E9%9A%86%E6%B1%87&limit=22&page=1';
		    axios.get(apiURL).then(callback.success).catch(function(err){
		     console.log(err);
		  })
     }
  },
  created(){
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
