// 1.vueコンポーネント/VueRouterの定義
import Vue from 'vue'
import VueRouter from 'vue-router'
 
// 2.ページコンポーネントの定義
import HomeScreen from './pages/HomeScreen.vue'
import ReaderStandbyScreen from './pages/ReaderStandbyScreen.vue'


// 3.ルートコンポーネントを有効にする
Vue.use(VueRouter)
 
// 4.パスのマッピング
const routes = [
  {
    path: '/',
    component: HomeScreen
  },
  {
    path: '/ReaderStandbyScreen',
    component: ReaderStandbyScreen
  }
]
// 5.インスタンスの生成
const router = new VueRouter({
    mode: 'history',
    routes
})
// 6.インスタンスのエクスポート
export default router