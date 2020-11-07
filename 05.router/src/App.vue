<template>
  <div id="app">
    <!-- TODO repalce 可以讓使用者無法返回 -->
    <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" tag="button">about</router-link>
    <router-link :to="'/hello' + id" tag="button">hello</router-link>
    <!-- TODO 使用 Func -->
    <button @click="ClickHome()">BtnLink</button>
    <router-view></router-view>
    {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    ClickHome() {
      this.$router.push('/home')
      // this.$router.replace('/home')
      console.log('ClickHome')
    }
  }
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
