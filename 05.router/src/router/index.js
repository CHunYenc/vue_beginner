import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import hello from '../components/HelloWorld.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
        path: '',
        redirect: '/home'
    }, {
        path: '/home/:id',
        component: Home
    }, {
        path: '/about',
        component: About
    }, {
        path: '/hello',
        component: hello
    }],
    mode: 'history',
    // TODO 更改被點擊的網頁 class
    // linkActiveClass: 'active'
});

export default router