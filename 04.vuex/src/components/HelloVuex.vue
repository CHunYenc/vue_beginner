<template>
  <div>
    <span>--響應式--</span>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">Click</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdatename">異步</button>
    <hr />
    <span>--響應式--</span>
    <h1>
      {{ $store.state.info }}
    </h1>
    <button @click="updatainfo">Click</button>
    <hr />
    <span>--HelloVuex--</span>
    <h1>
      {{ $store.state.counter }}
    </h1>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu(10)">新增物件</button>

    <hr />
    <span>--getter--</span>
    <h2>{{ $store.getters.powerCOunter }}</h2>
    <h2>{{ $store.getters.stuD20 }}</h2>
    <h2>{{ $store.getters.stuD20Length }}</h2>
    <h2>{{ $store.getters.MoreAgeStu(20) }}</h2>
  </div>
</template>

<script>
import { INCREMENT } from '../store/mutations-type'

export default {
  name: 'HelloVuex',
  props: {
    counter: Number,
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    substraction() {
      this.$store.commit('decrement')
    },
    addCount(Count) {
      this.$store.commit('incrementCount', Count)
      // //
      // this.$store.commit({
      //   type: 'incrementCount',
      //   Count,
      // })
    },
    addStu() {
      const stu = { id: 6, name: 'why6', age: 35 }
      this.$store.commit('addUser', stu)
    },
    updatainfo() {
      // (1)
      // this.$store.dispatch('aUpdateInfo', {
      //   // console.log('已經完成。'),
      //   message: '我是攜帶的訊息',
      //   success: () => {
      //     console.log('完成囉！')
      //   },
      // })
      // this.$store.commit('updateinfo')
      // },
      // (2)
      // this.$store.dispatch('aUpdateInfo', '我是攜帶的訊息')
      this.$store.dispatch('aUpdateInfo', '我是攜帶的訊息').then(res => {
        console.log('裡面已經提交')
        console.log(res)
      })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdatename() {
      this.$store.dispatch('aUpdateName')
    },
    // computed: {
    // 移至 getter 製作
    // StuD20() {
    //   return this.$store.state.students.filter(s => {
    //     return s.age > 20
    //   })
    // },
    // },
  },
}
</script>
