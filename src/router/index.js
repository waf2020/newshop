import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   {path:'/',redirect:'/home'},
   {path:'/home',component:()=>import('../views/home/home.vue')},
   {path:'/category',component:()=>import('../views/category/category.vue')},
   {path:'/shopcart',component:()=>import('../views/shopcart/shopcart2.vue')},
   {path:'/profile',component:()=>import('../views/profile/profile.vue')},
   {path:'/detail/:iid',component:()=>import('../views/detail/detail.vue')},
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
