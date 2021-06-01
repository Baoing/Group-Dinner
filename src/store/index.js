
import Vue from "vue"
import Vuex from "vuex"

import user from './modules/user'

import VuexPersistence from 'vuex-persist'
// 持久化储存
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user']
})

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    vanLoading: true, // app页面加载load
    // 保存公共数据 在设置vuex中的初值时，先从本地存储中取，如果取不到，则初始为空
  },
  mutations:{
    // app页面加载load--隐藏状态
    vanLoadingHide (state) {
      state.vanLoading = false
    },
    // app页面加载load--显示状态
    vanLoadingShow (state) {
      state.vanLoading = false
    }
  },
  modules: {
    user
  },
  getters:{
    token(){
      return '1111'
    }
  },
  plugins: [vuexLocal.plugin]
})