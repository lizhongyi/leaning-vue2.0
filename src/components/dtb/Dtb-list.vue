<link rel="stylesheet" href="styles/home.css" />
<link rel="stylesheet" href="styles/search.css">
<link rel="stylesheet" href="styles/tmPagination.css">

<div class="container" style="margin-top: 120px;margin-bottom: 80px">
    <div ng-controller="SearchPostController">
        <div search-sub-box></div>
        <div class="search-dash-board pull-left">
            <ul>
                <li class="active">
                    <a href="#/search/{{key}}">帖子</a>
                </li>
                <li>
                    <a href="#/searchStock/{{key}}">股票</a>
                </li>
                <li>
                    <a href="#/searchUser/{{key}}">用户</a>
                </li>
                <li>
                    <a href="#/searchNews/{{key}}">新闻</a>
                </li>
            </ul>
        </div>
        <div class="search-box">
            <p>搜索到相关
                <font color='#178bb8'>{{key}}</font> 的帖子</p>
            <hr/>
            <!--遍历搜索信息-->
            <waiting wait-text="正在加载数据,请稍后……" ng-show="searchPostList==null "></waiting>
            <ul class="media-list">
                <li class="media" ng-repeat="object in searchPostList">
                    <div class="media-left hide">
                        <a href="#">
                            <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjE0LjUiIHk9IjMyIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9nPjwvc3ZnPg=="
                                data-holder-rendered="true" style="width: 64px; height: 64px;">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading" ng-bind-html="object.titleDisp" ng-hide="object.titleDisp == 'null'" ng-click="jump('/articleDetail',object.id)"></h4>
                        <a ng-bind-html="object.summaryDisp" ng-href="jump('/articleDetail',object.id)" ng-show="object.summaryDisp!=null && object.summaryDisp!='null'"></p>
                            <span class="tag">{{(object.createDate*1000) | date : 'yyyy-MM-dd'}}</span>
                            <span class="tag" ng-click="jump('/userInfo',object.userId)"><img ng-src="images/icon_16px.png">{{object.nickName}}</span>
                </li>
            </ul>
            <div id="pagination-box">
                <tm-pagination conf="paginationConf"></tm-pagination>
            </div>
            </div>
        </div>
    </div>
</div>
}, hideBtn() { } }, directives: { focus: { // 指令的定义--- inserted: function(el) { // 聚焦元素 el.focus() } }, touch: { }, xianshi: { inserted: function(el, bind) { // 聚焦元素 if (bind.value) { el.style.display = '' } else { el.style.display = 'none' } } } } }
</script>

<style lang="stylus">

</style>