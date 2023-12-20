import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/NosotrosView')
  },
  {
    path: '/documental',
    name: 'Documental',
    component: () => import(/* webpackChunkName: "documental" */ '../views/DocumentalView')
  },
  {
    path: '/json',
    name: 'Json',
    component: () => import(/* webpackChunkName: "documental" */ '../views/ListaProyectos.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: '/transportescaverovue/',
  routes
})

export default router
