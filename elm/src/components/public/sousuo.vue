<template>
  <div id="wrap">
    <div id="top">
      <div id="left">
        <img src="../../assets/back.png" alt @click="back()" />
        <p>搜索</p>
      </div>
    </div>
    <div id="inp">
      <input type="text" placeholder="请输入商家或美食名称" v-model="content" id="inp"/>
      <button @click="SS(content)">提交</button>
    </div>
    <p id="so">很抱歉！无搜索结果</p>
    <ul id="shopL" style="width:100%;">
      <li
        v-for="(v,i) in datas"
        :key="i"
        class="shopList"
        style="width:100%;"
        @click="sentAllcon(v)"
      >
        <!-- <router-link class="shop" :to="'/shopdetial?shopId='+v.id"> -->
        <div class="center">
          <div class="shopImg">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt />
          </div>
          <div class="shopInfo">
            <p>
              {{v.name}}
              <span class="zf">支付</span>
            </p>
          </div>
          <br />
          <p class="dan">月售 {{v.recent_order_num}} 单</p>
          <br />
          <p class="jl">{{v.float_minimum_order_amount}} 元起送 / 距离{{v.distance}}</p>
        </div>
        <!-- </router-link> -->
      </li>
    </ul>
    <p id="a">搜索历史</p>
    <ul id="bc" v-show="pan">
      <li v-for="(v,i) in acd" :key="i" class="his" @click="dian(v)"><span>{{v}}</span><span @click.stop="x(i,v)">X</span></li>
    </ul>
    <p id="q" @click="q()" style="display:inline-black;">清空搜索历史</p>
    <!-- 导航条 -->
    <div id="bottom_bottom">
      <router-link to="/waimai">
        <img :src="waimaisrc" alt />
      </router-link>
      <router-link to="/sousuo">
        <img :src="sousuosrc" alt />
      </router-link>
      <router-link to="/dd">
        <img :src="dingdansrc" alt />
      </router-link>
      <router-link to="/myself">
        <img :src="touxiangsrc" alt />
      </router-link>
    </div>
  </div>
</template>
<script>
var items = localStorage.getItem("items");
var arr = JSON.parse(items);
export default {
  name: "sousuo",
  data() {
    return {
      content: "",
      datas: [],
      geohash: "",
      contents: [],
      waimaisrc: require("../../assets/SSS.png"),
      sousuosrc: require("../../assets/zhinanzhen1.png"),
      dingdansrc: require("../../assets/dingdan1.png"),
      touxiangsrc: require("../../assets/touxiang2.png"),
      pan:true,
      shuju:''
    };
  },
  created() {
    this.getGeohash();
  },
  computed: {
    acd() {
      return this.$store.state.cunchudizhi;
    },
  },
  watch:{
    content(){
        this.pan=false;
        if(this.content=="")
        {
           this.pan=true;
            var so = document.getElementById("so");
          so.style.display = "none";
        }
    }
  },
  methods: {
    // 点击搜索按钮
    SS(v) {
      console.log(v)
      if(this.content.length==0){
        var bc = document.getElementById("bc");
        var q = document.getElementById("q");
        bc.style.display="inline-black"
        q.style.display="inline-black"
      }else{
        var bc = document.getElementById("bc");
        var q = document.getElementById("q");
        bc.style.display="none"
        // q.style.display="none"
      }
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.$store.state.mingzi.geohash +
        "&keyword=" +
        this.content;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.datas = res.data;
        console.log(res);
        if (res.data.message || res.data.length == 0) {
          var shopL = document.getElementById("shopL");
          var so = document.getElementById("so");
          shopL.style.display = "none";
          so.style.display = "inline-block";
        } else {
          var shopL = document.getElementById("shopL");
         
          shopL.style.display = "inline-block";
           var so = document.getElementById("so");
          so.style.display = "none";
        }
        this.$store.commit("cundizhia", v);
        console.log(this.$store.state.cunchudizhi);
      });
    },
    back() {
      this.$router.back();
    },
    // 获取经纬度
    getGeohash() {
      // console.log(this.$route)
      this.geohash = this.$route.query.geohash;
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
    },
    q(a){
      this.$store.commit('shanchuall',a);
    },
    x(a,b){
      // this.$store.state.cunchudizhi.splice(a,1);
      this.$store.commit('shanchuli',a);
    },
    dian(v){
      this.content=v;
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
}
#left {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.2rem;
  color: #fff;
}
#left img {
  width: 0.12rem;
  margin-left: 0.1rem;
}
#left p {
  font-weight: bold;
}
#inp {
  width: 100%;
  height: 0.6rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#inp input {
  width: 70%;
  height: 0.35rem;
  background-color: rgb(242, 242, 242);
  border: 1px solid gainsboro;
  border-radius: 0.03rem;
  font-size: 0.17rem;
  font-weight: bold;
  padding-left: 0.05rem;
}
#inp button {
  width: 22%;
  height: 0.35rem;
  background-color: rgb(49, 144, 232);
  color: #fff;
  border: 1px solid rgb(49, 144, 232);
  border-radius: 0.03rem;
  outline: none;
  font-size: 0.15rem;
  font-weight: bold;
}
.shopList {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  border-bottom: 1px solid gainsboro;
}
.shopImg img {
  width: 0.5rem;
  float: left;
  margin-right: 0.1rem;
}
.shopInfo p {
  color: #000;
  float: left;
}
.center {
  width: 95%;
  margin: 0 auto;
  padding-top: 0.1rem;
  font-size: 0.15rem;
  margin-bottom: 1rem;
}
.zf {
  font-size: 0.15rem;
  color: orange;
  border: 1px solid orange;
}
.dan {
  color: #000;
  font-size: 0.15rem;
}
.jl {
  color: #000;
}
#so {
  width: 3.55rem;
  padding: 0.1rem;
  text-align: center;
  font-size: 0.17rem;
  background-color: #fff;
  border-top: 1px solid rgb(175, 175, 175);
  display: none;
}
/* 历史记录样式 */
#showone {
  margin-top: 2rem;
  margin-left: 0.6rem;
}
/* 导航条 */
#bottom_bottom {
  width: 3.75rem;
  padding: 0.1rem 0;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
}
#bottom_bottom img {
  width: 0.3rem;
}
#bc {
  width: 100%;
  /* padding: 0.1rem 0; */
  background-color: #fff;
}
.his {
  width: 95%;
  margin: 0 auto;
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 1px solid rgb(218, 218, 218);
  /* padding-left: 0.1rem; */

  font-size: 0.17rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#a {
  margin: 0.1rem 0;
  padding-left: 0.1rem;
  font-size: 0.13rem;
}
#q {
  width: 100%;
  height: 2.4rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.18rem;
  color: #3190e8;
}
</style>
