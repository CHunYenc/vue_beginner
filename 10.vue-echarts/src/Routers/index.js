import Vue from 'vue'
import VueRouter from 'vue-router'
import echarts from '../views/echarts.vue'
import dashboard from '../views/main.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: dashboard
    }, {
        path: '/echarts',
        component: echarts
    },

]

const router = new VueRouter({
    routes
})

export default router;