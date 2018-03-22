// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from "vue-router";
import goods from "./components/goods/goods.vue";
import ratings from "./components/ratings/ratings.vue";
import seller from "./components/seller/seller.vue";
import VueResource from 'vue-resource'
import './assets/css/common.less'

Vue.config.productionTip = false;

Vue.use(VueRouter); //使用路由
Vue.use(VueResource); //使用vue-resouce

const routes = [ //定义路由
    { path: '/goods', component: goods },
    { path: '/seller', component: seller },
    { path: '/ratings', component: ratings }
];

const router = new VueRouter({ //创建 router 实例，然后传 `routes` 配置
    routes // （缩写）相当于 routes: routes
});

const app = new Vue({ //创建和挂载根实例。
    router,
    render: h => h(App) //必须加上，不加上显示不了内容
}).$mount('#app');