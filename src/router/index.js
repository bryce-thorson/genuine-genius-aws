import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Purchasing from '../views/Purchasing.vue'
import SignIn from '../views/SignIn.vue'
import CreateAccount from '../views/CreateAccount.vue'
import CreateCustomerAccount from '../views/CreateCustomerAccount.vue'

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
  },
  {
    path: '/Purchasing',
    name: 'Purchasing',
    component: Purchasing
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/CreateCustomerAccount',
    name: 'CreateCustomerAccount',
    component: CreateCustomerAccount
  }
]

const router = new VueRouter({
  routes
})

export default router
