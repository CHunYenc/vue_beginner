<template>
  <div id="app">
    <!-- TODO Header -->
    <div class="header">
      <h1>數據可視化</h1>
      <div class="showTime">
        123123
        <router-link :to="echarts">haha</router-link>
      </div>
    </div>
    <!-- TODO Main -->
    <div class="mainbox">
      <div class="column">
        <div class="panel">
          <div class="panel_bar">
            <h2>柱狀圖 - 就業行業</h2>
            <div class="panel_chart">圖表</div>
            <div class="panel_footer"></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel_bar">
            <h2>柱狀圖 - 就業行業</h2>
            <div class="panel_chart">圖表</div>
            <div class="panel_footer"></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel_bar">
            <h2>柱狀圖 - 就業行業</h2>
            <div class="panel_chart">圖表</div>
            <div class="panel_footer"></div>
          </div>
        </div>
      </div>
      <!-- TODO Center -->
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>123456</li>
              <li>000000</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人數</li>
              <li>市場供應人數</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>
      <!-- TODO Right -->
      <div class="column">
        <div class="column">
          <div class="panel">
            <div class="panel_bar">
              <h2>柱狀圖 - 就業行業</h2>
              <div class="panel_chart">圖表</div>
              <div class="panel_footer"></div>
            </div>
          </div>
          <div class="panel">
            <div class="panel_bar">
              <h2>柱狀圖 - 就業行業</h2>
              <div class="panel_chart">圖表</div>
              <div class="panel_footer"></div>
            </div>
          </div>
          <div class="panel">
            <div class="panel_bar">
              <h2>柱狀圖 - 就業行業</h2>
              <div class="panel_chart">圖表</div>
              <div class="panel_footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      time: null
    }
  },
  components: {},
  created: {},
  method: {}
}
</script>

<style lang="less" scoped>
@import '../assets/css.css';
</style>
