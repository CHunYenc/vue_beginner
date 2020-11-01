<template>
  <div id="app">
    <router-link to="/">index</router-link>
    <router-link to="echarts">echarts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
#app {
  a {
    font-size: 0.6rem;
    padding: 0 0 0 0.2rem;
  }
  a:link {
    color: white;
  }
  a:visited {
    color: green;
  }
}
</style>
