import router from '@/router/index'

export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo(state, userInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.userInfo = userInfo
    },

    loginOut(state) {
      state.userInfo = {}
      router.push({ path: '/login', redirect: '/home' })
      sessionStorage.clear()
      window.location.reload()
    },
    setLocation(state,location){
      state.userInfo.location = location
    }
  },
  actions: {
    async LoginIn({ commit }, loginInfo) {
      commit('setUserInfo', loginInfo)
    },
    async LoginOut({ commit }) {
      // const res = await LoginOut()
      commit("loginOut")
    },
    async setLocation({commit},location){
      commit("setLocation",location)
    }
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    token(state) {
      return state.userInfo.token
    },
    username(state) {
      return state.userInfo.username
    },
    location(state){
      return state.userInfo.location
    }
  }
}