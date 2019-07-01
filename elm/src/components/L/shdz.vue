<template>
  <div id="wrap">
    <div id="top">
      <div id="t">
        <img src="../../assets/back.png" alt @click="back()">
        <p>选择地址</p>
      </div>
    </div>
    <!-- 新增收货地址 -->
    <div id="xz">
      <router-link to="/xzdz" id="x">
        <img src="../../assets/jia.png" alt>
        <span style="margin-left:0.1rem;color: #3190e8;">新增收货地址</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "shdz",
  data() {
    return {};
  },
  created() {},
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
#xz {
  width: 100%;
  height: 0.5rem;
  background-color: #fff;
  font-size: 0.18rem;
  position: fixed;
  bottom: 0;
}
#x img {
  width: 0.2rem;
}
#x {
  width: 40%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>
