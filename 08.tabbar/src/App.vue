<template>
  <div id="app">
    <tabbar>
      <tabbarItem>
        <img slot="item-icon" src="../src/assets/home-24px.svg" alt="" srcset="" />
        <span slot="item-text">標題</span>
      </tabbarItem>
      <tabbarItem></tabbarItem>
      <tabbarItem></tabbarItem>
      <tabbarItem></tabbarItem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from './components/tabbar/tabbar'
import tabbarItem from './components/tabbar/tabbarItem'
export default {
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>
@import './assets/style.css';
</style>
