
import Vue from 'vue'
import Router from 'vue-router'
import wbIndex from "../pages/wbIndex"
import wbMagazine from "../pages/wbMagazine"
import wbChoose from "../pages/wbChoose"
import wbMy from "../pages/wbMy"
import wbProtect from "../pages/wbProtect"
import wbLogin from "../pages/wbLogin"
import wbReg from "../pages/wbReg"
import wbShared from "../pages/wbShared"
import wbDetail from "../pages/wbDetail"
import wbCarts from "../pages/wbCarts"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wbIndex',
      component: wbIndex
    },
    {
      path: '/wbMagazine',
      name: 'wbMagazine',
      component: wbMagazine
    },
    {
      path: '/wbChoose',
      name: 'wbChoose',
      component: wbChoose
    },
    {
      path: '/wbMy',
      name: 'wbMy',
      component: wbMy
    },
    {
      path: '/wbProtect',
      name: 'wbProtect',
      component: wbProtect
    },
    {
      path: '/wbLogin',
      name: 'wbLogin',
      component: wbLogin
    },
    {
      path: '/wbReg',
      name: 'wbReg',
      component: wbReg
    },
    {
      path: '/wbShared',
      name: 'wbShared',
      component:wbShared
    },
    {
      path: '/wbDetail',
      name: 'wbDetail',
      component:wbDetail
    },
    {
      path: '/wbCarts',
      name: 'wbCarts',
      component:wbCarts
    }
  ]
})


