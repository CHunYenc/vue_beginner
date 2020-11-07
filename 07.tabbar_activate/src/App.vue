<template>
  <div id="app">
    <tabbar>
      <tabbarItem>
        <img slot="item-icon" src="../src/assets/tabbar/hot.svg" alt="" srcset="" />
        <img slot="item-icon-activate" src="../src/assets/tabbar/hot_fill.svg" alt="" srcset="" />
        <span slot="item-text">熱銷</span>
      </tabbarItem>
      <tabbarItem>
        <img slot="item-icon" src="../src/assets/tabbar/app.svg" alt="" srcset="" />
        <img slot="item-icon-activate" src="../src/assets/tabbar/app_fill.svg" alt="" srcset="" />
        <span slot="item-text">標題</span>
      </tabbarItem>
      <tabbarItem>
        <img slot="item-icon" src="../src/assets/tabbar/shopbag.svg" alt="" srcset="" />
        <img slot="item-icon-activate" src="../src/assets/tabbar/shopbag_fill.svg" alt="" srcset="" />
        <span slot="item-text">標題</span>
      </tabbarItem>
      <tabbarItem>
        <img slot="item-icon" src="../src/assets/tabbar/star.svg" alt="" srcset="" />
        <img slot="item-icon-activate" src="../src/assets/tabbar/star_fill.svg" alt="" srcset="" />
        <span slot="item-text">標題</span>
      </tabbarItem>
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
  },
  data() {
    return {}
  }
}
</script>

<style>
@import './assets/style.css';
.activate {
  color: red;
}
</style>
