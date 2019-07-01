<template>
  <div id="wrap">
    <div id="top">
      <div id="t">
        <img src="../../assets/back.png" alt @click="back()">
        <p>{{title}}</p>
      </div>
    </div>
    <!-- 新店特惠 排序 筛选 -->
    <div id="list">
      <p @click="classBtn()">
        <span v-if="show">{{classTitle}}</span>
        <span v-else style="color:rgb(49,114,232);">分类</span>
        <img v-if="show" src="../../assets/up1.png" alt>
        <img v-else src="../../assets/up2.png" alt>
      </p>
      <span class="s">|</span>
      <p @click="classBtn2()">
        <span v-if="show2">排序</span>
        <span v-else style="color:rgb(49,114,232);">排序</span>
        <img v-if="show2" src="../../assets/up1.png" alt>
        <img v-else src="../../assets/up2.png" alt>
      </p>
      <span class="s">|</span>
      <p @click="classBtn3()">
        <span v-if="show3">筛选</span>
        <span v-else style="color:rgb(49,114,232);">筛选</span>
        <img v-if="show3" src="../../assets/up1.png" alt>
        <img v-else src="../../assets/up2.png" alt>
      </p>
    </div>
    <!-- 分类列表 -->
    <div class="classList" v-if="!show">
      <div class="classListLeft">
        <ul>
          <li v-for="(v,i) in arrs" :key="i" @click="getShop(v)">
            <p>{{v.name}}</p>
            <p>
              <span id="count">{{v.count}}</span>
              <span id="jiantou">></span>
            </p>
          </li>
        </ul>
      </div>
      <div class="classListRight">
        <ul>
          <li v-for="(v,i) in zz" :key="i" @click="shop(v.name)">
            <router-link class="li" to>
              <span>{{v.name}}</span>
              <span>{{v.count}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 排序 -->
    <div class="paixu" v-if="!show2">
      <ul class="bg">
        <router-link to="/sList">
          <li class="p" @click="none()">
            <img src="../../assets/paixu.png" alt>
            <span>智能排序</span>
          </li>
        </router-link>
        <router-link to="/jlzj">
          <li class="p" @click="none()">
            <img src="../../assets/juli.png" alt>
            <span>距离最近</span>
          </li>
        </router-link>
        <router-link to="/xlzg">
          <li class="p" @click="none()">
            <img src="../../assets/re.png" alt>
            <span>销量最高</span>
          </li>
        </router-link>
        <router-link to="/qjd">
          <li class="p" @click="none()">
            <img src="../../assets/jiage.png" alt>
            <span>起送价最低</span>
          </li>
        </router-link>
        <router-link to="/sdk">
          <li class="p" @click="none()">
            <img src="../../assets/zhong.png" alt>
            <span>配送速度最快</span>
          </li>
        </router-link>
        <router-link to="/pfg">
          <li class="p" @click="none()">
            <img src="../../assets/xing1.png" alt>
            <span>评分最高</span>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div id="sList">
      <router-view></router-view>
    </div>
    <div class="classList" v-if="!show3">
      <div id="shaixuan">
        <div id="peis">
          <p class="fs">配送方式</p>
          <el-checkbox-group v-model="checkboxGroup2" id="duoxuan">
            <el-checkbox-button class="dxk" v-for="(v,i) in peisong" :label="i" :key="i">{{v.text}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div>
          <p class="sx">商家属性（可以多选）</p>
          <el-checkbox-group v-model="checkboxGroup1" id="duoxuan">
            <el-checkbox-button class="dxk" v-for="(v,i) in shuxing" :label="i" :key="i">{{v.name}}</el-checkbox-button>
          </el-checkbox-group>
          <div id="r">
            <p id="qk" @click="qk()">清空</p>
            <p
              class="qd"
              v-show="checkboxGroup1.length>=1||checkboxGroup2.length>=1"
              @click="qd()"
            >确定({{checkboxGroup1.length+checkboxGroup2.length}})</p>
            <p
              class="qd"
              v-show="checkboxGroup1.length==0&&checkboxGroup2.length==0"
              @click="qd()"
            >确定</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "shop",
  data() {
    return {
      checkboxGroup1: [],
      checkboxGroup2: [],
      title: "",
      classTitle: "",
      arrs: [],
      id: "",
      zz: [],
      peisong: [],
      shuxing: [],
      show: true,
      show2: true,
      show3: true
    };
  },
  created() {
    this.getTitle();
    this.getClass();
    this.getPeiSong();
    this.getSuXing();
    loadingInstance = Loading.service({});
    loadingInstance.close();
  },
  methods: {
    getTitle() {
      this.title = this.$route.query.Title;
      this.classTitle = this.title;
    },
    back() {
      this.$router.back();
    },
    // 点击分类
    classBtn() {
      this.show = !this.show;
      this.show2 = true;
      this.show3 = true;
    },
    classBtn2() {
      this.show2 = !this.show2;
      this.show = true;
      this.show3 = true;
    },
    classBtn3() {
      this.show3 = !this.show3;
      this.show = true;
      this.show2 = true;
    },
    // 获取所有商铺列表
    getClass() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.arrs = res.data;
      });
    },
    // 获取商铺列表对应的商品
    getShop(v) {
      this.id = v.id;
      var zz = [];
      if (this.id == v.id) {
        for (let i = 0; i < v.sub_categories.length; i++) {
          zz.push(v.sub_categories[i]);
          this.zz = zz;
        }
      }
    },
    // 点击分类商品
    shop(name) {
      // console.log(name)
      this.show = true;
      this.title = name;
      this.classTitle = name;
    },
    none() {
      this.show2 = true;
    },
    // 配送方式
    getPeiSong() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.peisong = res.data;
      });
    },
    // 商家属性
    getSuXing() {
      const api =
        "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.shuxing = res.data;
      });
    },
    // 点击清空按钮
    qk() {
      this.checkboxGroup1 = [];
      this.checkboxGroup2 = [];
    },
    //点击确定
    qd() {
      this.show3 = !this.show3;
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
  background-color: rgb(49, 114, 232);
}
#t {
  width: 50%;
  height: 100%;
  margin-left: 0.15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 0.18rem;
}
#t img {
  width: 0.12rem;
}
#list {
  width: 100%;
  height: 0.4rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.15rem;
  border-bottom: 1px solid gainsboro;
}
#list .s {
  color: gainsboro;
}
#list img {
  width: 0.2rem;
}
#list p {
  display: flex;
  align-items: center;
}
.classList {
  width: 3.75rem;
  height: 3.15rem;
  position: absolute;
  top: 0.9rem;
  left: 0;
  z-index: 2;
}
.classListLeft {
  width: 50%;
  height: 100%;
  background-color: rgb(243, 243, 243);
  float: left;
}
.classListLeft li {
  height: 0.35rem;
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
}
.classListLeft li p {
  margin: 0 0.1rem;
}
.classListLeft li:hover {
  background-color: #fff;
}
.classListLeft li #count {
  color: white;
  background-color: gray;
  padding: 0.01rem;
  border-radius: 0.15rem;
  font-size: 0.12rem;
}
.classListLeft li #jiantou {
  font-size: 0.13rem;
}
.classListRight {
  width: 50%;
  height: 100%;
  background-color: #fff;
  float: left;
  overflow-y: scroll;
}
.classListRight ul {
  width: 90%;
  margin: 0 auto;
  color: gray;
  font-size: 0.15rem;
}
.classListRight ul .li {
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 1px solid gainsboro;
}
.classListRight ul .li {
  display: flex;
  justify-content: space-between;
  color: gray;
}
.classListRight ul .li:hover {
  color: rgb(49, 114, 232);
}
.classListRight::-webkit-scrollbar {
  display: none;
}
/* 排序 */
.bg {
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0.9rem;
  z-index: 2;
}
.p {
  margin-left: 0.2rem;
  padding: 0.1rem 0;
  color: gray;
  font-size: 0.15rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
}
.p img {
  width: 0.2rem;
  margin-right: 0.1rem;
}
#shaixuan {
  width: 3.55rem;
  /* height: 1rem; */
  z-index: 2;
  background-color: #fff;
  padding: 0.1rem;
}
#peisong {
  width: 1rem;
  font-size: 0.1rem;
}
.fn {
  width: 0.8rem;
  padding: 0.1rem;
  text-align: center;
  font-size: 0.13rem;
  margin-top: 0.1rem;
  border: 1px solid gainsboro;
  border-radius: 0.03rem;
}
.dxk {
  width: 30%;
  margin: 0.03rem;
}
#duoxuan {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
#qk,
.qd {
  font-size: 0.2rem;
  /* padding: 0.1rem; */
  line-height: 0.4rem;
  height: 0.4rem;
  margin-top: 0.05rem;
  border-radius: 0.05rem;
}
#r {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(241, 241, 241);
  text-align: center;
}
#qk {
  width: 40%;

  margin-left: 0.1rem;
  float: left;
  background-color: #fff;
}
.qd {
  width: 40%;
  color: #fff;
  margin-right: 0.1rem;
  float: right;
  background-color: rgb(86, 209, 118);
}
.fs {
  font-size: 0.1rem;
}
.text {
  width: 0.8rem;
  padding: 0.1rem 0;
  border: 1px solid gainsboro;
  border-radius: 0.03rem;
  text-align: center;
  font-size: 0.12rem;
  color: gray;
  margin-top: 0.1rem;
}
.sx {
  margin: 0.1rem 0;
  font-size: 0.1rem;
}
</style>
