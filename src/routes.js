// 导入之前写好的两个模板
import Home from './components/Home.vue'
import Article from './components/article/Article.vue'
import userHome from './components/user/user-home.vue'
import userIndex from './components/user/user-index.vue'
import userRecommend from './components/user/user-recommend.vue'

// 编写路由集合
const routes = [{
            name: 'Home', // 路由名，这个字段是可选的
            path: '/', // 路由路径，这里是根路径所以是'/'
            component: Home, // 模板
            meta: {
                title: '首页'
            },
        }, // 这些是常用的
        {
            name: 'Article',
            path: '/article',
            component: Article
        },
        {
            name: 'ArticleDetail',
            path: '/article/detail/:id',
            component: require('./components/article/Article-detail.vue')
        },
        {
            name: 'Login',
            path: '/login',
            component: require('./components/user/login.vue')
        },
         {
            name: 'Dtb',
            path: '/dtb',
            component: require('./components/dtb/Dtb-list.vue')
        },
        {
            path: '/user',
            component: userIndex,
            children: [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                { path: '/user/recommend', component: userRecommend },
                { path: '/user/:id', component: userHome },
            ]
        }

    ]
    // 导出路由集合
export default routes