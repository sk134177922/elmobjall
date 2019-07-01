<template>
  <div>
    <div id="top">
      <div id="topone">
        <img @click="back()" src="../../assets/back.png" alt>
        <span id="topspan">在线支付</span>
      </div>
    </div>
    <div id="center">
      <div id="pay">
        <p>支付剩余时间</p>
        <!-- 倒计时 -->
        <p>00:{{minute}}:{{second}}</p>
      </div>
    </div>
    <p id="p2">选择支付方式</p>
    <div id="bottom">
      <div id="bottomone">
        <img id="oneimg1" src="../../assets/zhifubao.png" alt>
        <p id="onep1">支付宝</p>
        <img @click="change1()" id="img1" :src="imgSrc" alt>
      </div>
      <div id="bottomtwo">
        <img id="twoimg1" src="../../assets/weixin.png" alt>
        <p id="twop1">微信</p>
        <img @click="change2()" id="img1" :src="imgSrc2" alt>
      </div>
    </div>
    <p @click="show1()" id="sure">确认支付</p>
    <div v-if="show" class="animated heartBeat 2s" id="div1">
      <img id="divimg" src="../../assets/未标题-1.png" alt>
      <p id="divp1">当前环境无法支付,请打开官方APP进行付款</p>
      <p @click="disshow()" id="divp2">确认</p>
    </div>
    <div v-if="beginshow"  class="animated heartBeat 2s" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <p id="divp1">暂不开放支付功能</p>
                <p @click="disshow()" id="divp2">确认</p>
    </div>
    <div  v-if="endshow" class="animated heartBeat 2s" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <p id="divp1">支付超时</p>
                <p id="divp2">确认</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "buyvip",
  data() {
    return {
      imgSrc: require("../../assets/icon-test.png"),
      imgSrc2: require("../../assets/icon-test2.png"),
      show: false,
      beginshow: true,
      minutes: 15,
      seconds: 0,
      endshow:false,
    };
  },
  mounted() {
      this.add()
  },
  methods: {
    back() {
      if(this.beginshow == true){

      }else{
        this.$router.go(-1);
      }
    },
    change1() {
      this.imgSrc2 = require("../../assets/icon-test2.png");
      this.imgSrc = require("../../assets/icon-test.png");
    },
    change2() {
      this.imgSrc = require("../../assets/icon-test2.png");
      this.imgSrc2 = require("../../assets/icon-test.png");
    },
    show1() {
      this.show = true;
    },
    disshow() {
      this.show = false;
      this.beginshow = false;
    },

    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          this.endshow = true;
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },


};
</script>
<style scoped>
#top {
  width: 3.75rem;
  /* height: 1.3rem; */
}
#topone {
  width: 3.75rem;
  height: 0.4rem;
  background-color: rgb(49, 144, 232);
  position: relative;
  border-bottom: 1px solid rgb(96, 168, 234);
}
#topone > img {
  width: 0.15rem;
  margin-top: 0.07rem;
  margin-left: 0.07rem;
}
#topspan {
  position: absolute;
  top: 0.1rem;
  text-align: center;
  left: 1.5rem;
  font-size: 0.18rem;
  color: white;
}
#center {
  width: 3.75rem;
  height: 1.5rem;
  background-color: white;
  position: relative;
}
#p2 {
  display: inline-block;
  width: 3.75rem;
  height: 0.4rem;
  text-indent: 0.17rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
  color: rgb(102, 102, 102);
}
#bottom {
  width: 3.75rem;
  height: 1.5rem;
  background-color: white;
}
#bottomone {
  width: 3.75rem;
  height: 0.75rem;
  border-bottom: 1px solid rgb(250, 250, 250);
  position: relative;
}
#bottomtwo {
  width: 3.75rem;
  height: 0.75rem;
  position: relative;
}
#oneimg1 {
  position: absolute;
  top: 0.13rem;
  left: 0.2rem;
  width: 0.5rem;
}
#twoimg1 {
  position: absolute;
  top: 0.13rem;
  left: 0.15rem;
  width: 0.6rem;
}
#onep1 {
  position: absolute;
  top: 0.3rem;
  left: 0.75rem;
  font-size: 0.16rem;
}
#twop1 {
  position: absolute;
  top: 0.35rem;
  left: 0.75rem;
  font-size: 0.16rem;
}
#img1 {
  width: 0.25rem;
  position: absolute;
  top: 0.3rem;
  right: 0.15rem;
}
#sure {
  position: absolute;
  left: 0.2rem;
  margin-top: 0.1rem;
  height: 0.4rem;
  border-radius: 0.05rem;
  background-color: rgb(76, 217, 100);
  display: inline-block;
  font-size: 0.16rem;
  color: white;
  text-align: center;
  line-height: 0.4rem;
  width: 3.35rem;
}
#div1 {
  position: absolute;
  top: 1.9rem;
  left: 0.5rem;
  border-radius: 0.05rem;
  display: inline-block;
  width: 2.8rem;
  height: 1.7rem;
  background-color: white;
}
#divimg {
  position: absolute;
  left: 1rem;
  width: 0.8rem;
}
#divp1 {
  position: absolute;
  top: 1rem;
  left: 0.1rem;
  line-height: 0.2rem;
  display: inline-block;
  width: 2.5rem;
  /* text-indent: 0.08rem; */
  text-align: center;
  font-size: 0.16rem;
}
#divp2 {
  position: absolute;
  top: 1.5rem;
  display: inline-block;
  width: 2.8rem;
  height: 0.4rem;
  background-color: rgb(76, 217, 100);
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.16rem;
  color: white;
  border-bottom-left-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
}
#pay p:nth-child(1) {
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
  font-size: 0.13rem;
  color: rgb(163, 163, 163);
}
#pay p:nth-child(2) {
  font-size: 0.38rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
</style>
