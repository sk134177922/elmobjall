<template>
  <div id="wrap">
    <div id="top">
      <div id="t">
        <img src="../../assets/back.png" alt @click="back()">
        <p>添加地址</p>
      </div>
    </div>
    <div id="all">
      <div id="center">
        <!-- 联系人 -->
        <div id="lxr">
          <!-- 左 -->
          <div id="lxrL">
            <p style="margin-top:0.15rem;">联系人</p>
          </div>
          <!-- 右 -->
          <div id="lxrR">
            <!-- 上 -->
            <div id="lxrU">
              <input type="text" placeholder="你的名字">
            </div>
            <!-- 下 -->
            <div id="lxrD">
              <img src="../../assets/icon-test.png" alt>
              <span>先生</span>
              <img src="../../assets/icon-test2.png" alt style="margin-left:0.2rem;">
              <span>女士</span>
            </div>
          </div>
        </div>
        <!-- 联系电话 -->
        <div id="lxdh">
          <p>联系电话</p>
          <input type="text" placeholder="你的手机号">
          <img src="../../assets/jiaL.png" alt>
        </div>
        <div id="lxr">
          <!-- 左 -->
          <div id="lxrL">
            <p style="margin-top:0.15rem;">送餐地址</p>
          </div>
          <!-- 右 -->
          <div id="lxrR">
            <!-- 上 -->
            <div id="lxrU">
                <router-link to style="color:gray;font-size:0.16rem;">小区/写字楼/学校等</router-link>
            </div>
            <!-- 下 -->
            <div id="lxrD">
              <img src="../../assets/icon-test.png" alt>
              <span>先生</span>
              <img src="../../assets/icon-test2.png" alt style="margin-left:0.2rem;">
              <span>女士</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xzdz",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
}
#top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
  color: #fff;
}
#top p {
  font-size: 0.2rem;
  font-weight: bold;
}
#t {
  width: 55%;
  height: 100%;
  margin-left: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#t img {
  width: 0.12rem;
}
#all {
  width: 100%;
  background-color: #fff;
}
#center {
  width: 90%;
  margin: 0 auto;
}
#lxr {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(241, 241, 241);
}
#lxrL {
  width: 30%;
  height: 1rem;
  font-size: 0.18rem;
}
#lxrR {
  width: 70%;
  height: 1rem;
}
#lxrD img {
  width: 0.2rem;
  margin-right: 0.05rem;
}
#lxrU {
  height: 50%;
  border-bottom: 1px solid rgb(241, 241, 241);
}
#lxrU input {
  width: 100%;
  height: 80%;
  font-size: 0.18rem;
  color: gray;
}
#lxrD {
  height: 50%;
  font-size: 0.18rem;
}
#lxrU,
#lxrD {
  display: flex;
  align-items: center;
}
#lxdh{
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.17rem;
    border-bottom: 1px solid rgb(241, 241, 241);
}
#lxdh input{
    width: 50%;
    height: 80%;
    margin-top: 0.02rem;
    font-size: 0.17rem;
    color: gray;
}
#lxdh img{
    width: 0.17rem;
}
</style>
