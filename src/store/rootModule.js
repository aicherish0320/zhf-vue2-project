// import { getSlider } from '@/api/public'
import * as types from './action-types'

export default {
  state: {
    sliders: []
  },
  mutations: {
    [types.SET_SLIDERS](state, payload) {
      state.sliders = payload
    }
  },
  actions: {
    async [types.SET_SLIDERS]({ commit }) {
      // const { data } = await getSlider()
      setTimeout(() => {
        commit(types.SET_SLIDERS, [
          {
            _id: 1,
            url: 'https://www.keaidian.com/uploads/allimg/190424/24110307_35.jpg'
          },
          {
            _id: 2,
            url: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
          },
          {
            _id: 3,
            url: 'https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg'
          }
        ])
      }, 1000)
    }
  },
  modules: {}
}
