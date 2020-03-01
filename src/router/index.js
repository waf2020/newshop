import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   {path:'/',redirect:'/home'},
   {path:'/home',component:()=>import('../views/home/home.vue')},
   {path:'/category',component:()=>import('../views/category/category.vue')},
   {path:'/shopcart',component:()=>import('../views/shopcart/shopcart.vue')},
   {path:'/profile',component:()=>import('../views/profile/profile.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
