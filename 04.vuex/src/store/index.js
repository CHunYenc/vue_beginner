/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import {
  INCREMENT
} from './mutations-type.js'

Vue.use(Vuex);

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111111'
    },
    fullname2(state) {
      return state.name + '222222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(content) {
      setTimeout(() => {
        content.commit('updateName', "wuwuwutest")
      }, 1000);
    }
  },
}

const store = new Vuex.Store({
  state: {
    counter: 10000,
    students: [{
        id: 1,
        name: 'why1',
        age: 19
      },
      {
        id: 2,
        name: 'why2',
        age: 19
      },
      {
        id: 3,
        name: 'why3',
        age: 21
      },
      {
        id: 4,
        name: 'why4',
        age: 21
      },
      {
        id: 5,
        name: 'why5',
        age: 21
      },
    ],
    info: {
      name: 'Kobe',
      height: 100,
      age: 40
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, Count) {
      console.log(Count)
      state.counter += Count
    },
    addUser(state, user) {
      // console.log(user)
      state.students.push(user)
    },
    updateinfo(state) {
      // 修改
      state.info.name = 'coderwhy'
      // 這樣會新增至 info 但不會立即顯示，因為沒有
      // state.info['address'] = 'LOKE'
      // 可新增可修改
      // Vue.set(state.info, "address", 'teestststest')
      // 這樣也是無法立即顯示刪除
      // delete state.info.age
      // 要使用 vue.delete
      // Vue.delete(state.info, 'age')
      // 無法進行異步操作
      // setTimeout(() => {
      //   state.info.name = 'test'
      // }, 1000);
    }
  },
  getters: {
    powerCOunter(state) {
      return state.counter * state.counter
    },
    stuD20(state) {
      return state.students.filter(s => {
        return s.age > 20
      })
    },
    stuD20Length(state, getters) {
      return getters.stuD20.length
    },
    MoreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  actions: {
    // (1)
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateinfo')
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // },
    // (2)
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateinfo')
    //     console.log(payload)
    //   }, 1000)
    // }
    // (3)
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updatainfo');
          console.log(payload);

          resolve('111111')
        })
      })
    }

  },
  modules: {
    a: moduleA
  }
})

export default store