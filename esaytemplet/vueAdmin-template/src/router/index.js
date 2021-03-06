import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'sitemap' }
    }]
  },
    {
    path: '/stack',
    component: Layout,
    meta: { title: '微服务管理', icon: 'sitemap' },
    children: [
      {
        path: 'index',
        name: '微服务',
        component: () => import('@/views/stack/index'),
        meta: { title: '微服务', icon: 'sitemap' }
      },
      {
        path: 'add',
        name: '新增微服务',
        component: () => import('@/views/stack/add'),
        meta: { title: '新增微服务', icon: 'sitemap' }
      }
    ]
  },
    {
    path: '/host',
    component: Layout,
    meta: { title: '主机管理', icon: 'host' },
    children: [
      {
        path: 'index',
        name: '主机管理',
        component: () => import('@/views/host/index'),
        meta: { title: '主机管理', icon: 'host' }
      },
       {
        path: 'containers',
        name: '容器管理',
        component: () => import('@/views/host/containers'),
        meta: { title: '容器管理', icon: 'containerservice' }
      }
    ]
  },
  {
    path: '/chat',
    component: Layout,
    redirect: '/example/table',
    name: '运维监控',
    meta: { title: '运维监控', icon: 'count' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/plug',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '云组件',
        component: () => import('@/views/form/index'),
        meta: { title: '云组件', icon: 'sale' },
      }
    ]
  },
  {
    path: '/appstorn',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '应用市场',
        component: () => import('@/views/form/index'),
        meta: { title: '应用市场', icon: 'app' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '系统设置',
        component: () => import('@/views/form/index'),
        meta: { title: '系统设置', icon: 'sys' }
      }
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

