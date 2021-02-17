import Vue from 'vue'
import Vuex from 'vuex'
import { setTokenStorage, removeTokenStorage, getTokenStorage } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  // 开启严格模式
  strict: process.env.NODE_ENV === 'development',
  state: {
    // 从loaclStorage中获取token
    token: getTokenStorage() || {}
  },
  mutations: {
    setToken (state, token) {
      // vuex中存token
      state.token = token
      // localStorage存token
      setTokenStorage(token)
    },

    removeToken (state) {
      // 删除vuex中的token
      state.token = {}
      // 删除localStorage中的token
      removeTokenStorage()
    }
  },
  actions: {
  },
  modules: {
  }
})
