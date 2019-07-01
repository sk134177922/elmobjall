<template>
  <div>
    <!-- 头部 -->
    <div id="com_top">
      <img @click="goBack()" src="../../assets/back.png" alt>
      <span>搜索</span>
    </div>
    <!-- 搜索框 -->
    <div id="search1">
      <input type="text" placeholder="请输入商家或美食名称" @input="watchInp()" @focus="watchInp()" v-model="inp" ref="type">
      <button @click="getSearch()" id="btnbtn">提交</button>
      <!-- 搜索历史 -->
      <div v-if="searchHis">
        <p>搜索历史</p>
        <ul id="search_ul">
          <li v-for="(v,i) in nameArr" :key="i" @click="onceAge(i)">
            {{v}}
            <img @click.stop="deleHis(i)" src="../../assets//quxiao.png" alt>
          </li>
        </ul>
        <p @click="deleAllHis()">清空搜索历史</p>
      </div>
      <!-- 暂无搜索结果 -->
      <div v-if="wujieguo" id="noneData">
        <p>暂无搜索结果!</p>
      </div>
    </div>
    <!-- 输入框中的叉叉 -->
    <img @click="deleInp()" src="../../assets/quxiao.png" id="img1" alt v-if="inpDele">
    <!-- 展示搜到的店铺 -->
    <div v-if="showShangjia">
      <p class="p1">商家</p>
      <ul id="searchJ">
        <li v-for="(v,i) in searchAll" :key="i" @click="goShopDetail(i)">
          <img :src="'https://elm.cangdu.org/img/'+v.image_path" alt>
          <span id="li_span">
            <p>{{v.name}}</p>
            <p>
              月售
              <span>{{v.recent_order_num}}</span>单
            </p>
            <p>
              <span>{{v.float_minimum_order_amount}}</span>
              <span>起送/</span>
              <span>距离</span>
              <span>{{v.distance}}</span>
            </p>
          </span>
        </li>
      </ul>
    </div>
    <!-- 弹框 -->
    <!-- <div id="box" v-if="showtool">
      <img src="../imgs/tishi.jpg" alt>
      <p>{{import1}}</p>
      <button @click="closeTool()">确认</button>
    </div> -->
  </div>
</template>
<script>
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "second",
  data() {
    return {
      wujieguo: false,
      searchHis: true,
      inpDele: false,
      inp: "",
      searchAll: [],
      showShangjia: false,
      nameArr: [],
      showtool: false,
      import1: "",
      shopId: ""
    };
  },
  created() {
    this.local();
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    closeTool() {
      this.showtool = false;
    },
    // 本地存储
    local() {
      if (!localStorage.name) {
        this.searchHis = false;
        return;
      } else {
        const name1 = localStorage.name;
        this.nameArr = name1.split(",");
      }
    },
    watchInp() {
      if (this.$refs.type.value.length > 0) {
        this.inpDele = true;
      } else {
        this.inpDele = false;
        this.searchHis = true;
        this.showShangjia = false;
        this.wujieguo = false;
        this.local();
      }
    },
    deleInp() {
      this.inp = "";
      this.showShangjia = false;
      this.searchHis = true;
      this.inpDele = false;
      this.wujieguo = false;
      this.local();
    },
    onceAge(i) {
      this.inp = this.nameArr[i];
      this.getSearch();
    },
    // 点击店铺进入详情
    goShopDetail(i) {
      this.$store.commit("searchId", this.searchAll[i].id);
      this.$router.push({
        name: "shopshow"
      });
    },
    getSearch() {
      if(this.inp==""){
        this.showtool=true;
        this.import1="请输入搜索内容";
        return;
      }
      loadingInstance = Loading.service({
        fullscreen: true,
        text: "拼命加载中……"
      });
      this.searchHis = false;
      this.showShangjia = true;

      if (localStorage.name) {
        if (localStorage.name.indexOf(this.inp) == -1) {
          localStorage.name += "," + this.inp;
        }
      } else {
        localStorage.name = this.inp;
      }
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.$store.state.geohash +
        "&keyword=" +
        this.inp;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        if (res.data.message) {
          this.showtool = true;
          this.import1 = res.data.message;
          this.wujieguo = false;
          loadingInstance.close();
          return;
        } else {
          this.searchAll = res.data;
          if (this.searchAll.length <= 0) {
            this.showShangjia = false;
            this.wujieguo = true;
          }else{
            this.wujieguo=false;
          }
          loadingInstance.close();
        }
      });
    },
    deleHis(a) {
      localStorage.removeItem("name");
      if (this.nameArr.length == 1) {
        this.nameArr = [];
      }
      for (var ky = 0; ky < this.nameArr.length; ky++) {
        if (ky != a) {
          if (localStorage.name) {
            if (localStorage.name.indexOf(this.nameArr[ky]) == -1) {
              localStorage.name += "," + this.nameArr[ky];
            }
          } else {
            localStorage.name = this.nameArr[ky];
          }
        }
      }
      this.local();
    },
    deleAllHis() {
      this.nameArr = "";
      this.searchHis = false;
      localStorage.removeItem("name");
    }
  }
};
</script>

<style scoped>
#bc {
  position: fixed;
  top: 0;
  left: 0;
}
/* 输入框部分 */
#search1 {
  margin-top: 0.1rem;
}
#search1 input {
  width: 72%;
  margin: 0 0 0.1rem 4%;
  padding: 0.05rem 0.01rem 0.05rem 0.08rem;
  background-color: #f2f2f2;
  font-weight: bold;
  border: 0;
  border-radius: 0.05rem;
  font-size: 0.15rem;
}
#img1 {
  position: absolute;
  top: 0.6rem;
  right: 0.9rem;
}
#btnbtn {
  float: right;
  margin-right: 0.16rem;
  width: 15%;
  text-align: center;
  background-color: rgb(0, 132, 255);
  color: white;
  font-size: 0.15rem;
  border: 0;
  padding: 0.05rem 0.1rem 0.05rem 0.1rem;
  border-radius: 0.05rem;
}
#search1 > div:nth-of-type(1) > p:nth-of-type(1),
.p1 {
  font-size: 0.14rem;
  padding: 0.1rem 0 0.1rem 0.1rem;
  font-weight: bold;
  background-color: #f2f2f2;
}
#search1 > div:nth-of-type(1) > p:nth-of-type(2) {
  text-align: center;
  font-size: 0.15rem;
  color: rgb(0, 132, 255);
  margin-bottom: 0.5rem;
  font-weight: bold;
  padding: 0.1rem 0 0.1rem 0;
}
#search_ul li {
  font-size: 0.15rem;
  padding: 0.1rem 0 0.1rem 0.15rem;
  border-bottom: 0.01rem solid #ddd;
}
#search_ul li img {
  float: right;
  margin-right: 0.1rem;
  margin-top: 0.06rem;
  width: 0.15rem;
}
/* 搜索无结果 */
#noneData {
  text-align: center;
  border-top: 0.03rem solid #ddd;
  font-size: 0.15rem;
  padding: 0.1rem 0 0.1rem 0;
}

/* 搜索到的店铺 */
#searchJ li {
  border-bottom: 0.01rem solid #ccc;
  overflow: hidden;
}
#searchJ li img {
  float: left;
  width: 0.65rem;
  margin: 0.1rem 0.05rem 0 0.1rem;
}
#li_span {
  float: left;
  font-size: 0.14rem;
  margin: 0.1rem 0 0.2rem 0;
  padding-bottom: 0.1rem;
  border-bottom: 0.01rem solid #ccc;
  width: 75%;
}
/* 头部 */
#com_top {
width: 100%;
background-color: #3190e8;
padding-bottom: 0.1rem;
}
#com_top > span {
margin-left: 1.2rem;
color: white;
font-weight: bold;
font-size: 0.2rem;
}
#com_top > img {
width: 0.15rem;
margin-left: 0.1rem;
}
</style>
