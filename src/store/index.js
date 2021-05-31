
import Vue from "vue"
import Vuex from "vuex"
import { setItem, getItem } from '@/utils/storage.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    // 保存公共数据 在设置vuex中的初值时，先从本地存储中取，如果取不到，则初始为空
    userInfo: getItem('userInfo') || {},
    location: getItem('location') || '演示地点1F'
  },
  mutations:{
    // 保存当前用户信息
    saveUserInfo(state,userInfo){
      state.userInfo = userInfo;
      // 因为刷新会丢失所以进行持久化 调用storage文件里方法
      setItem('userInfo', userInfo)
    },
    saveLocation(state,location){
      state.location = location;
      setItem('location', location)
    },
  }
})