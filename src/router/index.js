import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)
const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.isLogin)) {//判断是否需要登录
    if (store.getters['user/token']) {
      to.name === 'login' && router.push({name: 'home'});
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next()
  }
});

// 点击同一路由多次或是push的路由是当前界面的url，报错解决方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
