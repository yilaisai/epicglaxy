export const appRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
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
    component: {
      render(h) {
        return h('h1', {
          attrs: {
            style: 'text-align: center;',
          },
        }, '页面不存在');
      },
    },
  },
];
