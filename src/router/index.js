import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  routes
})

export default router
