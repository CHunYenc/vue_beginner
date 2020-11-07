<template>
  <div class="toolbar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
    <!-- <img src="../../assets/home-24px.svg" alt="" srcset="" />
    <span>標題1</span> -->
  </div>
</template>
<script>
export default {}
</script>
<style>
.toolbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.toolbar-item span {
  display: block;
  margin-bottom: 5px;
}
</style>
