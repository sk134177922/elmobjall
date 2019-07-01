<template>
  <div id="wrap">
    <div id="top">
      <div id="topCenter">
        <img src="../../assets/back.png" alt @click="back()">
        <span style="font-weight:bold;">确认订单</span>
        <router-link to="/login" style="color:#fff;">登录|注册</router-link>
      </div>
    </div>
    <!-- 收货地址 -->
    <div id="shdz">
      <router-link to="/shdz" class="shdz">
        <p id="shdzL">
          <img src="../../assets/dwei.png" alt>
          <span>请添加一个收货地址</span>
        </p>
        <p id="shdzR">
          <img src="../../assets/right.png" alt>
        </p>
      </router-link>
      <img src="../../assets/t.png" alt id="t">
    </div>
    <!-- 送达时间 -->
    <div id="sdsj">
      <div id="sd">
        <p id="sdsjText">送达时间</p>
        <div id="right">
          <p>尽快送达 | 预计 16:43</p>
          <span>蜂鸟转送</span>
        </div>
      </div>
    </div>
    <!-- 支付方式 -->
    <div id="zhifu">
      <div id="zhifuC">
        <p id="zhifuCp1" @click="zffs()">
          <span style="color:black;font-size:0.17rem;">支付方式</span>
          <span>在线支付 ></span>
        </p>
        <p id="zhifuCp2">
          <span>红包</span>
          <span>暂时只在饿了么APP中支持</span>
        </p>
      </div>
    </div>
    <div id="zffs">
      <p id="zffsP1">支付方式</p>
      <p id="zffsP2">
        <span>货到付款（商家不支持货到付款）</span>
        <img src="../../assets/icon-test2.png" alt>
      </p>
      <p id="zffsP2" @click="qx()">
        <span style="color:black;">在线支付</span>
        <img src="../../assets/icon-test.png" alt>
      </p>
      <p id="qx" @click="qx()">取 消</p>
    </div>
    <div id="info">
      <!-- 头像昵称 -->
      <div id="nameImg">
        <img src="http://elm.cangdu.org/img/16b7261e13946470.jpg" alt>
        <span>嗷嗷嗷</span>
      </div>
      <div id="shopInfo">
        <div id="shop">
          <div>
            <span>ds</span>
            <p>
              <span style="color: rgb(255, 102, 0);">x1</span>
              <span>￥20</span>
            </p>
          </div>
          <div>
            <span>餐盒</span>
            <span>￥39760.5</span>
          </div>
          <div>
            <span>配送费</span>
            <span>￥4</span>
          </div>
        </div>
        <!-- 订单信息 -->
        <div id="ddInfo">
          <!-- 订单 -->
          <div id="dingdan">
            <p style="color:gray;font-size:0.15rem;">订单 ¥39784.5</p>
            <div>
              <p style="margin-bottom:0.2rem;">待支付</p>
              <p>¥39784.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单备注 -->
    <div id="beizhu">
      <div id="beizhuC">
        <div>
          <p style="color:black;font-size:0.17rem;">订单备注</p>
          <p>口味、偏好等></p>
        </div>
        <div>
          <p>发票抬头</p>
          <p>商家不支持开发票></p>
        </div>
      </div>
    </div>
    <!-- 待支付，确认订单 -->
    <div id="dzf">
      <div id="dzfC">
        <p>待支付 ￥39952.5</p>
        <p id="qrxd">确认下单</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dd",
  data() {
    return {};
  },
  created() {},
  methods: {
    back() {
      this.$router.back();
    },
    zffs() {
      var zffs = document.getElementById("zffs");
      var a = -4;
      zffs.style.display = "inline-block";
      var set = setInterval(function() {
        a += 0.04;
        zffs.style.bottom = a + "rem";
        if (a >= 0.5) {
          clearInterval(set);
        }
      }, 1);
    },
    qx() {
      var zffs = document.getElementById("zffs");
      var a = 0;
      zffs.style.display = "inline-block";
      var set = setInterval(function() {
        a -= 0.04;
        zffs.style.bottom = a + "rem";
        if (a <= -4) {
          clearInterval(set);
          zffs.style.display = "none";
        }
      }, 1);
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  overflow: hidden;
}
#top {
  width: 3.75rem;
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
}
#top img {
  width: 0.12rem;
}
#topCenter {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 0.17rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#shdz {
  width: 100%;
  height: 0.7rem;
  background-color: #fff;
}
.shdz {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#shdzL {
  display: flex;
  align-items: center;
}
#shdzL img {
  width: 0.3rem;
}
#shdzL span {
  color: #000;
  font-size: 0.15rem;
}
#shdzR img {
  width: 0.08rem;
}
#t {
  width: 100%;
  position: absolute;
  left: 0;
  top: 1.16rem;
}
#sdsj {
  width: 100%;
  height: 0.9rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
  border-left: 0.05rem solid rgb(49, 144, 232);
}
#sd {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#sdsjText {
  font-size: 0.2rem;
  font-weight: bold;
}

#right p {
  color: rgb(49, 144, 232);
  font-size: 0.16rem;
  padding-bottom: 0.15rem;
}
#right span {
  color: #fff;
  background-color: rgb(49, 144, 232);
  font-size: 0.12rem;
  padding: 0.03rem;
  border-radius: 0.04rem;
  float: right;
}
#zhifu {
  width: 100%;
  height: 0.8rem;
  margin-bottom: 0.1rem;
  background-color: #fff;
}
#zhifuC {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  color: gray;
}
#zhifuCp1 {
  border-bottom: 1px solid rgb(236, 236, 236);
}
#zhifuCp1,
#zhifuCp2 {
  width: 100%;
  height: 50%;
  font-size: 0.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#zffs {
  width: 100%;
  background-color: #fff;
  display: none;
  position: fixed;
  bottom: -100rem;
}
#zffsP1 {
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.17rem;
  background-color: rgb(250, 250, 250);
}
#zffsP2 {
  width: 90%;
  height: 0.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#zffsP2 span {
  color: rgb(173, 173, 173);
  line-height: 0.6rem;
  font-size: 0.17rem;
}
#zffsP2 img {
  width: 0.2rem;
}
#qx {
  width: 90%;
  height: 0.4rem;
  margin: 0 auto;
  text-align: center;
  line-height: 0.4rem;
  color: #fff;
  font-size: 0.2rem;
  background-color: rgb(107, 236, 107);
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
  border-radius: 0.05rem;
}
#info {
  width: 100%;
  /* height: 1rem; */
  background-color: #fff;
}
#nameImg {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid rgb(236, 236, 236);
  display: flex;
  align-items: center;
  font-size: 0.15rem;
}
#nameImg img {
  width: 0.3rem;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
}
#shopInfo {
  width: 100%;
}
#shop {
  width: 95%;
  margin: 0 auto;
  color: gray;
  border-bottom: 1px solid rgb(236, 236, 236);
}
#shop div {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
}
#shop div p {
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#ddInfo {
  width: 100%;
  /* height: 1rem; */
  background-color: #fff;
}
#dingdan {
  width: 95%;
  margin: 0 auto;
  padding: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  font-size: 0.17rem;
  color: rgb(255, 102, 0);
}
#beizhu {
  width: 100%;
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem 0;
  background-color: #fff;
}
#beizhuC {
  width: 95%;
  margin: 0 auto;
  font-size: 0.15rem;
  color: gray;
}
#beizhuC div {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#dzf{
  width: 100%;
  height: 0.5rem;
  color: #fff;
  font-size: 0.17rem;
  background-color: rgb(60, 60, 60);
  position: fixed;
  bottom: 0;
}
#dzfC{
  width: 90%;
  height: 100%;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#dzfC #qrxd{
  width: 35%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background-color: rgb(86, 209, 118);
}
</style>
