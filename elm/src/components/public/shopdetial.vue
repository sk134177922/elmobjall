<template>
  <div>
    <!-- 餐馆详情页面 -->
    <div id="topandmiddle">
      <div class="allcon">
        <div v-if="show" class="top">
          <img :src="'https://elm.cangdu.org/img/'+datas.image_path" alt="" style="width:3.75rem;height:3.3rem;filter: blur(10px);opacity:0.8">
          <span class="el-icon-arrow-left jiantouleft" @click="back()"></span>
          <img :src="'https://elm.cangdu.org/img/'+datas.image_path" alt class="imgInfor">
          <div class="top_right">
            <p class="shopName">{{datas.name}}</p>
            <p class="gonggao">
              商家配送/分钟送达/{{datas.piecewise_agent_fee.tips}}
              <span class="el-icon-arrow-right jiantouright" @click="goToshangjiaAll()"></span>
            </p>
            <p class="gonggao">公告:{{datas.promotion_info}}</p>
          </div>
          <p v-if="datas.activities.length > 0" class="top_bottom" @click="addSome()">
            <span class="red">{{datas.activities[0].icon_name}}</span>
            <span>{{datas.activities[0].description}}(App专享)</span>
            <span class="huodongto">
              <span>{{datas.activities.length}}个活动</span>
              <span class="el-icon-arrow-right"></span>
            </span>
          </p>
        </div>
        <!-- 商品/评价按钮 -->
        <div class="middle">
          <div class="middle_left">
              <span @click="goshangping(shopId)" class="spleft">商品</span>
          </div>
          <div class="middle_right">
              <span @click="gopingjia(shopId)" class="pjright">评价</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 食品列表 -->
    <div class="bottom">
      <router-view></router-view>
    </div>
    <!-- 商家公告部分 -->
    <div id="inforSome" v-if="inforShow">
      <p style="height:1rem;line-height:1rem;font-size:0.3rem;text-align:center">{{datas.name}}</p>
      <p style="text-align:center">优惠信息</p>
      <p
        :key="Si"
        v-for="(Sv,Si) in datas.activities"
        style="font-size:0.1rem;padding:0.1rem 0"
      >{{Sv.icon_name}}{{Sv.description}}(App专享)</p>
      <p style="text-align:center">商家公告</p>
      <p style="font-size:0.1rem;padding:0.1rem 0">{{datas.promotion_info}}</p>
      <p style="text-align:center;margin-top:1rem">
        <img src="../../assets/quxiao.png" alt style="width:1rem;height:1rem;" @click="addSome">
      </p>
    </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "shopdetial",
  data() {
    return {
      shopId: "",
      data: {},
      datas: [],
      show: false,
      allSelect: [],
      zz: 1,
      inforShow: false,
      zongPrice:0,
      showcount:false
    };
  },
  created() {
    this.getshopId();
    this.getShopdetial();
    // this.Ac();
    //  console.log(this.zongPrice)
    console.log(this.$route.query)
    loadingInstance = Loading.service({});
    loadingInstance.close();
  },
  computed: {
      Ac(){
      // this.$store.commit("jisuanPrice")
      return this.$store.state.allPrice;
    },
    Af(){
      return this.$store.state.arr2;
    }

  },
  methods: {
    gtezz() {
      // this.zz = this.$route.query.shopId;
       this.zz = this.$store.state.allContent.id;
    },
    getshopId() {
      this.data = this.$route.query;
      this.shopId = this.data.shopId;
      console.log(this.data);
      console.log(this.shopId);
    },
    getShopdetial() {
      this.getshopId();
      this.gtezz();
      console.log(this.zz);
      // const api = 'https://elm.cangdu.org/shopping/restaurant/'+this.shopId;
      const api = "https://elm.cangdu.org/shopping/restaurant/" + this.zz;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.datas = res.data;
        console.log(this.datas);
        this.show = true;
      });
    },
    //去商品页面
    goshangping(v){
      this.getshopId();
      console.log(this.shopId);
      this.$store.commit("getClickid", v);
      var shangPl =document.getElementsByClassName('spleft')
      shangPl[0].style.color='blue';
      shangPl[0].style.borderBottom='2px solid blue'
       var pjrig =document.getElementsByClassName('pjright');
       pjrig[0].style.color='black';
      pjrig[0].style.borderBottom=''
         this.$router.push({
          name:'shangpingleft'
        })
    },
    //去评价页面
    gopingjia(v){
      this.getshopId();
      console.log(this.shopId);
      this.$store.commit("getClickid", v);
        this.$router.push({
          name:'canguanpingjia'
        })
        var shangPl =document.getElementsByClassName('spleft')
      shangPl[0].style.color='black';
      shangPl[0].style.borderBottom=''
       var pjrig =document.getElementsByClassName('pjright');
       pjrig[0].style.color='blue';
      pjrig[0].style.borderBottom='2px solid blue'
    },
    goToshangjiaAll() {
      this.$router.push({
        name: "shangjiaAll"
      });
    },
    addSome() {
      this.inforShow = !this.inforShow;
    },
    // dedaofoodArr(){
    //         this.foodArr=this.$store.state.arr2;
    //         console.log(this.foodArr)
    //     },
    //  deleteAll(){
    //      this.$store.state.arr2=''

          
    //     },
      back(){
        // this.$router.back();
        this.$router.push('waimai')
      },
      showAll(){
        this.showcount=!this.showcount
      }
  }
};
</script>
<style scoped>
.allcon {
  position: fixed;
  top: 0;
  left: 0;
  width: 3.75rem;
  z-index: 100;
}
#topandmiddle {
  width: 3.75rem;
  /* height: 1rem; */
  position: fixed;
  top: 0;
  left: 0;
}
.top {
  color: white;
  font-size: 0.1rem;
  height: 1.2rem;
  background-color: lightgray;
  position: relative;
  overflow: hidden;
}
.top_right {
  width: 2.7rem;
  float: right;
  position: absolute;
  top: 0.1rem;
  right: 0;
}
.top_bottom {
  position: absolute;
  bottom: 0rem;
  width: 3.75rem;
  margin: 0.1rem 0;
  left: 0;
}
.jiantouleft {
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  left: 0;
  font-size: 0.3rem;
  z-index: 10;
  /* float: left; */
}
.jiantouright {
  float: right;
  /* margin-left:0.2rem;  */
}
.imgInfor {
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
  width: 0.7rem;
}
.shopName {
  font-size: 0.2rem;
  color: white;
  margin-bottom: 0.1rem;
}
.gonggao {
  margin-bottom: 0.1rem;
}
.red {
  background-color: red;
  /* border-radius: 5px; */
  margin-left: 0.2rem;
}
.huodongto {
  float: right;
}
/* 第二部分 */
.middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 0.2rem;
  border-bottom: 1px solid lightgray;
  /* background-color: green; */
}
.middle_left,
.middle_right {
  width: 50%;
  padding: 0.1rem 0;
}
/* 第三部分 */
.bottom {
  position: fixed;
  top: 1.59rem;
  left: 0;
}
/* 公告部分 */
#inforSome {
  position: fixed;
  z-index: 111;
  width: 3.75rem;
  height: 100vh;
  background-color: black;
  color: white;
}
/* 购物车部分 */
.bottomgowu1{
          position: fixed;
          width: 3.75rem;
          bottom: 0;
          left: 0;
          background-color: #555;
          height: 0.7rem;
     }
     .bottomgowu1>div:nth-child(1){
         display: inline-block;
          width: 18%;
          background-color: blue;
          border-radius: 50%;
          margin: -2% 0 0 4%; 
     }
     .bottomgowu1>div>img{
          width: 100%;
     }
     .bottomgowu1>div:nth-child(2){
         display: inline-block;
         width: 50%;
         height: 0.7rem;
        background-color: #555;
        color: #fff;
     }
     .bottomgowu1>div:nth-child(3){
         display: inline-block;
         width: 25%;
         padding-top:0.5rem; 
         height: 0.7rem;
         background-color: #4cd964;
         color: white;
         text-align: center;
         /* line-height: 0.7rem; */
         /* font-size: 0.5rem; */
     }
     /* 订单Number */
     .dingdanNum{
       position: fixed;
       bottom: 0.7rem;
       left: 0;
       background-color: #fff;
       width: 3.75rem;
     }
     .spleft{
       color: blue;
       /* border-bottom:2px solid blue;  */
     }
</style>
