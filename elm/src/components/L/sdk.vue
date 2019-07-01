<template>
  <div id="wrap">
    <ul id="shopList">
      <li v-for="(v,i) in shopList" :key="i" class="lis" @click="sentAllcon(v)">
        <!-- <router-link :to="'/shopdetial?shopId='+v.id"> -->
          <p>
            <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt>
            <span class="pinpai">品牌</span>
            <span class="name">{{v.name}}</span>
            <span class="bzp" v-for="(v,i) in supports" :key="i">{{v.icon_name}}</span>
          </p>
          <p class="line2">
            <span>
              <el-rate
                v-model="v.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                class="ping"
              ></el-rate>
            </span>
            <span class="ys">月售{{v.recent_order_num}}单</span>
            <span class="zs">{{v.delivery_mode.text}}</span>
            <span class="zsd">{{v.supports[1].name}}</span>
          </p>
          <p class="bottom">
            <span>￥{{v.float_minimum_order_amount}}起送 / 配送费约￥{{v.float_delivery_fee}}</span>
            <span>{{v.distance}} / {{v.order_lead_time}}</span>
          </p>
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sdk",
  data() {
    return {
      shopList: [],
      supports: []
    };
  },
  created() {
    this.getPxShop();
  },
  methods: {
    //获取排序列表的商品
    getPxShop() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=2";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.shopList = res.data;

        for (var i = 0; i < res.data.length; i++) {
          // console.log(res.data[i].supports)
          this.supports = res.data[i].supports;
          this.supports.reverse();
        }
      });
    },
    //跳餐馆详情页
    sentAllcon(v) {
      this.$router.push({
        name: "shopdetial",
        query: { shopId: v.id }
      });
      this.$store.commit("getAllcontent", v);
      this.$store.commit("getcanguanId", v.id);
      console.log(v);
    }
  }
};
</script>
<style scoped>
#wrap{
  width: 3.75rem;
  /* overflow: hidden; */
}
#shopList {
  background-color: #fff;
}
#shopList img {
  width: 0.7rem;
  float: left;
}
#shopList li {
  border-bottom: 1px solid gainsboro;
}
#shopList li p {
  width: 95%;
  padding: 0.15rem 0;
  margin: 0 auto;
  position: relative;
}
.pinpai {
  color: black;
  background-color: rgb(255, 217, 48);
  font-size: 0.1rem;
  padding: 0.01rem 0.03rem;
  border-radius: 0.03rem;
  position: absolute;
  top: 0.17rem;
  left: 0.8rem;
}
#shopList li p .name {
  color: black;
  position: absolute;
  top: 0.16rem;
  left: 1.2rem;
  font-size: 0.15rem;
  font-weight: bold;
}
.bzp {
  color: gray;
  padding: 0.01rem;
  font-size: 0.1rem;
  border: 1px solid gainsboro;
  border-radius: 0.02rem;
  float: right;
}
.ping {
  font-size: 0.1rem;
  float: left;
}
.ys{
  font-size: 0.1rem;
  color: gray;
  float: left;
}
.zs{
  font-size: 0.1rem;
  padding: 0.01rem;
  color: #fff;
  border-radius: 0.03rem;
  background-color: #57A9FF;
  position: absolute;
  top: 0.12rem;
  right: 0.33rem;
}
.zsd{
  color: #57A9FF;
  border: 1px solid #57A9FF;
  border-radius: 0.03rem;
  font-size: 0.1rem;
  position: absolute;
  right: -0.07rem;
  top: 0.12rem;
}
.bottom{
  position: absolute;
  top: 0rem;
  left: 0rem;
}
.bottom span:nth-child(1){
  color: #000;
  font-size: 0.11rem;
}
.bottom span:nth-child(2){
  color: gray;
  font-size: 0.11rem;
  position: absolute;
  right: -0.08rem;
  top: 0.18rem;
}
.lis{
  height: 1rem;
}
</style>
