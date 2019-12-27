export const appRouter = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('../views/Home.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/manage.vue'),
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/serve',
    name: 'serve',
    component: () => import('../views/serve.vue'),
    meta:{
      keepAlive:true
    }
  },
];

export default [
  ...appRouter,
  {
    path: '/404',
    name: 'NotFound',
    alias: '*',
    meta: {
      title: '404 - 找不到页面',
    },
    component: () => import('../views/404.vue'),
  },
];
