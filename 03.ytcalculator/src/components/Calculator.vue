<template>
  <div class="calcalator">
    <div class="display">{{ current || "0" }}</div>
    <div class="btn" @click="clear">AC</div>
    <div class="btn" @click="sign">+/-</div>
    <div class="btn" @click="percent">%</div>
    <div class="btn operator" @click="divide">÷</div>
    <div class="btn" @click="append('7')">7</div>
    <div class="btn" @click="append('8')">8</div>
    <div class="btn" @click="append('9')">9</div>
    <div class="btn operator" @click="times">X</div>
    <div class="btn" @click="append('6')">6</div>
    <div class="btn" @click="append('5')">5</div>
    <div class="btn" @click="append('4')">4</div>
    <div class="btn operator" @click="minus">-</div>
    <div class="btn" @click="append('1')">1</div>
    <div class="btn" @click="append('2')">2</div>
    <div class="btn" @click="append('3')">3</div>
    <div class="btn operator" @click="add">+</div>
    <div class="btn zero" @click="append('0')">0</div>
    <div class="btn" @click="dot">.</div>
    <div class="btn operator" @click="equal">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: "123",
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    // AC
    clear() {
      this.current = "";
    },
    // +/- 正負
    sign() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    // %
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    // 按一個值時
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    // 小數點
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    // 除
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    // 乘
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    // 減
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    // 加
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    // 等於
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
      console.log(this.current);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calcalator {
  margin: 0 auto;
  width: 400px;
  font-size: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  background-color: #333;
  color: white;
  grid-column: 1/5;
}
.zero {
  grid-column: 1/3;
}
.btn {
  background-color: #eee;
  border: 1px solid #999;
}
.operator {
  background-color: orange;
  color: white;
}
</style>
