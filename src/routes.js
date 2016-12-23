// 导入之前写好的两个模板
import Home from './components/Home.vue'
import Hello from './components/Hello.vue'

// 编写路由集合
const routes = [
  {
    name: 'Home', // 路由名，这个字段是可选的
    path: '/', // 路由路径，这里是根路径所以是'/'
    component: Home // 模板
  }, // 这些是常用的
  {
    name: 'Hello',
    path: '/hello',
    component: Hello
  }
]
// 导出路由集合
export default routes