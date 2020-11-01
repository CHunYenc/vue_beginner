<template>
  <div class="toolbar-item" v-on:click="itemClick">
    <div v-if="!activate">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-activate"></slot>
    </div>
    <div :class="{ activate: activate }">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/home-24px.svg" alt="" srcset="" />
    <span>標題1</span> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activate: true
    }
  },
  methods: {
    itemClick() {
      console.log('ItemClick')
    }
  }
}
</script>
<style>
.toolbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.toolbar-item img {
  height: 24px;
}
.toolbar-item span {
  display: block;
  margin-bottom: 5px;
}
.activate {
  color: red;
}
</style>
