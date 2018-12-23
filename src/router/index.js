import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import BlankLayout from '@/components/layout/BlankLayout.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import { Forbidden, NotFound, InternalServerError } from '@/components/errors'

import UserInterceptor from './interceptors/user'
import RoleInterceptor from './interceptors/role'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: BlankLayout,
      children: [{ path: '', name: 'login', component: Login }]
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          meta: {
            requiresUser: true
          },
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            requiresUser: true
          },
          component: () =>
            import(/* webpackChunkName: "about" */ '@/views/About.vue')
        },
        {
          path: '/example',
          name: 'example-list',
          meta: {
            requiresUser: true,

            breadcrumb: [
              { name: '示例模块', path: '/example' },
              { name: '列表页' }
            ]
            // breadcrumb: ['示例模块 /example', '列表页']
          },
          component: () =>
            import(/* webpackChunkName: "example" */ '@/views/example/Table.vue')
        },
        {
          path: '/example/new',
          name: 'example-form',
          meta: {
            requiresUser: true,

            breadcrumb: ['示例模块 /example', '表单页']
          },
          component: () =>
            import(/* webpackChunkName: "example" */ '@/views/example/Form.vue')
        },
        {
          path: '/example/admin-authorized',
          name: 'example-admin-authorized',
          meta: {
            requiresUser: true,
            requiresRole: 'ADMIN',

            breadcrumb: ['示例模块 /example', '管理员权限']
          },
          component: () =>
            import(/* webpackChunkName: "example" */ '@/views/example/AdminAuthorized.vue')
        },

        { path: '/403', component: Forbidden },
        { path: '/404', component: NotFound },
        { path: '/500', component: InternalServerError },
        { path: '*', component: NotFound }
      ]
    }
  ]
})

router.beforeEach(UserInterceptor)
router.beforeEach(RoleInterceptor)

export default router
