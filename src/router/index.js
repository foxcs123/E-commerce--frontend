import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Wrapper from '../components/Wrapper.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    component: Wrapper,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      },
      {
        path: 'about-us',
        name: 'aboutus',
        component: AboutUs
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
