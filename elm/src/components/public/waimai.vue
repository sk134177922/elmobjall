<template>
  <div>
    <div id="con">
        <div id="top">
      <div id="t">
        <router-link :to="'/sousuo?geohash='+geohash">
          <img :src="sousuo" alt>
        </router-link>
        <!-- <router-link :to="'/sosuo?geohash='+geohash+'&show=true'"> -->
        <!-- <router-link :to="'/sosuo?show=true'">
          <img :src="sousuo" alt>
        </router-link> -->
        <!-- <p>{{name}}</p> -->
        <p @click="gotocity">{{dedaoall.name}}</p>
        <!-- <router-link to="/login" style="color:#fff;">登录|注册</router-link> -->
        <router-link to="/login" class="w" v-if='xiantouxiang' style="color:#fff;">登陆|注册</router-link>
          <router-link to="/myself" class="w" v-else>
           <img src="../../assets/touxiang2.png" alt  id='txall' >
          </router-link>
      </div>
      <!-- 轮播图 -->
        <div id="lunbo">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="lunbo1">
            <div class="lb" v-for="(v,i) in arrs" v-show="i<=7" :key="i" style="padding:0.1rem 0">
                <router-link :to="'/shop?Title='+v.title" style="color:gray">
                <img :src="'https://fuss10.elemecdn.com'+v.image_url" alt>
                <p>{{v.title}}</p>
                </router-link>
            </div>
            </swiper-slide>
            <swiper-slide class="lunbo1" style="padding:0 0 0.15rem 0;">
            <div class="lb" v-for="(v,i) in arrs" v-show="i>=8" :key="i" style="padding:0.1rem 0;">
                <router-link :to="'/shop?Title='+v.title" style="color:gray">
                <img :src="'https://fuss10.elemecdn.com'+v.image_url" alt>
                <p>{{v.title}}</p>
                </router-link>
            </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>

    </div>
    </div>
    <div id="fenge"></div>
    <div id="bottom">
      <p id="near">
        <span class="el-icon-office-building"></span>
        <span>附近商家</span>
      </p>
      <!-- <button @click="getlast()">尝试</button> -->
      <ul>
        <li :key="i" v-for="(value,i) in content" class="shop_li" @click="sentAllcon(value)">
          <!-- <router-link :to="'/shopdetial?shopId='+value.id"> -->
          <img :src="'https://elm.cangdu.org/img/'+value.image_path" alt class="shop_img">
          <div class="li_right">
            <p class="infor">
              <span>
                <span class="pingpai">品牌</span>
                {{value.name}}
              </span>

              <span class="zhunshida" :key="i" v-for="(v,i) in value.supports">{{v.icon_name}}</span>
            </p>
            <p class="pingjia">
              <el-rate
                v-model="value.rating"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                class="xingji"
              ></el-rate>
              <span>月售:{{value.rating_count}}单</span>
              <span style="float:right">
              <span>{{value.delivery_mode.text}}</span>
              <span>{{value.supports[1].name}}</span>
              </span>
            </p>

            <p class="qisong">
              ￥{{value.float_minimum_order_amount}}起送/{{value.piecewise_agent_fee.tips}}
              <span class="zuiyou">
                <span class="distance">{{value.distance}}/</span>
                <span>{{value.order_lead_time}}</span>
              </span>
            </p>
          </div>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
     <!-- 导航条 -->
         <div id="bottom_bottom">
            <router-link to="/waimai">
            <img :src="waimaisrc" alt="" >
            </router-link>
            <router-link to="/sousuo">
            <img :src="sousuosrc" alt="" >
            </router-link>
            <router-link to="/dd">
            <img :src="dingdansrc" alt="" >
            </router-link>
            <router-link to="/myself">
            <img :src="touxiangsrc" alt="" >
            </router-link>
        </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "waimai",
  data() {
    return {
      datas: "",
      longitude: "",
      latitude: "",
      content: {},
      rating: "",
      shopId: [],
      name: "",
      geohash:"",
      arrs: [],
      sousuo: require("../../assets/fangdajing.png"),
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
       waimaisrc:require("../../assets/SSS1.png"),
      sousuosrc:require("../../assets/zhinanzhen.png"),
      dingdansrc:require("../../assets/dingdan1.png"),
      touxiangsrc:require("../../assets/touxiang2.png"),

    };
  },
  created() {
    this.getlast();
    this.getnear();
    this.getName();
    this.getLunBo();
    loadingInstance = Loading.service({});
    loadingInstance.close();
     console.log(this.$route.query);
  },
   computed: {
    xiantouxiang(){
      console.log(this.$store.state.dl)
      return this.$store.state.dl
    },
    dedaoall(){
      console.log(this.$store.state.mingzi)
      return this.$store.state.mingzi
    }
  },
  methods: {
    getlast() {
      this.datas = this.$route.query;
      this.latitude = this.$route.query.weidu;
      this.longitude = this.$route.query.jingdu;
    },
    gotocity(){
      this.$router.push({
        name:'allcity'
      })
    },
    getnear() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.content = res.data;
        console.log(this.content);
        // this.shopId=this.content[1].id;
        // console.log(this.shopId)
      });
    },
    sentAllcon(v) {
      this.$router.push({
        name: "shopdetial",
        query: { shopId: v.id }
      });
      this.$store.commit("getAllcontent", v);
      this.$store.commit("getcanguanId", v.id);
      console.log(v);
    },
    getName() {
      if (this.$store.state.mingzi.name) {
        this.name = this.$store.state.mingzi.name;
      }else{
        this.name = this.$route.query.Name;
      }
      if (this.$store.state.mingzi.geohash) {
         this.geohash = this.$store.state.mingzi.geohash
      }else{
        this.geohash = this.$route.query.geohash
      }
    },
    // 轮播图
    getLunBo() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.arrs = res.data;
      });
    }

  }
};
</script>
<style scoped>
/* 头像css */
#txall{
  width:0.3rem;
}
#con {
  width: 3.75rem;
  height: 2.5rem;
  background-color: #fff;
}
#fenge {
  width: 3.75rem;
  height: 0.2rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}
#near {
  width: 3.55rem;
  display: inline-block;
  font-size: 0.1rem;
  color: #999;
  padding: 0.1rem;
  background-color: #fff;
}
.shop_li {
  float: left;
  width: 3.75rem;
  border-bottom: 1px solid lightgray;
}
.shop_img {
  width: 0.7rem;
  float: left;
  padding: 0.1rem;
}
.li_right {
  float: right;
  width: 2.65rem;
  /* border: 1px solid red; */
  /* height: 0.7rem; */
  margin: 0.1rem 0.1rem 0.1rem 0;
}
.xingji {
  width: 100%;
  font-size: 0.1rem;
}
.infor {
  width: 2.55rem;
}
.zhunshida {
  border: 0.025rem solid #f1f1f1;
  color: #999;
  float: right;
  font-size: 0.1rem;
  display: inline-block;
}
.pingjia {
  font-size: 0.1rem;
}
.pingpai {
  background-color: #ffd930;
}
.qisong {
  margin-top: 0.07rem;
  font-size: 0.1rem;
}
.distance {
  margin-left: 0.2rem;
}
/* top的css */
#top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 144, 232);
}
#t {
  width: 3.5rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  color: #fff;
}
#t img {
  width: 0.2rem;
}
/* 轮播图 */
#lunbo {
  width: 100%;
  background-color: #fff;
}
.lunbo1 {
  width: 100%;
  margin: 0 auto;
  font-size: 0.12rem;
  color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.lb {
  width: 25%;
  text-align: center;
}
.lunbo1 img {
  width: 0.5rem;
}
/* 导航条 */
#bottom_bottom{
    width: 3.75rem;
    padding: 0.1rem 0;
    position:fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
}
#bottom_bottom img{
    width: 0.3rem;
}
.zuiyou{
  float: right;
}
</style>
