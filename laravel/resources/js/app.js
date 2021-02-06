// require('./bootstrap');

// window.Vue = require('vue').default;

// Vue.component('home-component', require('./components/HomeComponent.vue').default);
// Vue.component('sample-component', require('./components/SampleComponent.vue').default);

// const app = new Vue({
//     el: '#app',
// });

import Vue from 'vue'
import router from './router' // router.jsでエクスポート内容を定義
import App from './App.vue' // ルートコンポーネントの定義

// #appの所にHello, Worldを突っ込む！
new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    components: { App }, // ルートコンポーネントの宣言
    template: '<App />' // ルートコンポーネントの表示
  });