<template>
  <div id="wrap">
    <!-- 顶部 -->
    <div id="top">
      <div id="topText">
        <div id="topLeft">
          <router-link to="/allcity" class="w">ele.me</router-link>
        </div>
        <div id="topRight">
          <router-link to="/login" class="w" v-if='xiantouxiang'>登陆|注册</router-link>
          <!-- <router-link to="/login" class="w"></router-link> -->
          <router-link to="/myself" class="w" v-else>
           <img src="../../assets/touxiang2.png" alt  id='txall' >
          </router-link>
        </div>
      </div>
    </div>
    <!-- 当前定位城市 -->
    <div id="chengshi">
      <div id="cs">
        <div id="csL">
          <p style="color:gray;">当前定位城市：</p>
        </div>
        <div id="csR">
          <p style="font-weight:bold;">定位不准时，请在城市列表中选择</p>
        </div>
      </div>
    </div>
    <!-- 显示定位的div -->
    <div id="dw">
      <router-link :to="'/test4?city_id='+id+'&cityName='+name" id="dingwei">
      <!-- :to="'/city?cityName='+citys.name+'&city_id=' +citys.id" -->
        <p>{{name}}</p>
        <p>
          <img src="../../assets/right.png" alt id="right">
        </p>
      </router-link>
    </div>
    <!-- 热门城市 -->
    <div id="hot">
      <div id="h">
        <p style="color:gray;">热门城市</p>
      </div>
      <div id="remen">
        <p v-for="(v,i) in csArr" :key="i" class="rmcs" @click="chuangsong(v)">
          <router-link :to="'/test4?city_id='+v.id+'&cityName='+v.name">{{v.name}}</router-link>
        </p>
      </div>
    </div>
    <!-- 所有城市 -->
    <div id="suoyou">
      <ul>
        <li v-for="(value,key) in syArr" :key="key" @click="chuangsong(value)">
          <p class="tc"></p>
          <p id="a">
            {{key}}
            <span v-if="key=='A'">(按字母排序)</span>
          </p>
          <ul id="na">
            <li :key="i" v-for="(v,i) in value" class="n">
              <router-link :to="'/test4?city_id='+v.id+'&cityName='+v.name" style="color:gray;">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "allcity",
  data() {
    return {
      name: "",
      csArr: [],
      syArr: {},
      id: ""
    };
  },
  created() {
    this.getName();
    this.getHot();
    this.getSuoyou();
  },
  computed: {
    xiantouxiang(){
      console.log(this.$store.state.dl)
      return this.$store.state.dl
    }
  },
  methods: {
    chuangsong(v){
      console.log(v)
      // this.$store.commit('getmingzi',v);
      this.$store.commit('dedaojindu',v);
      this.$store.commit('dedaoweidu',v);
    },
    //获取定位的地址
    getName() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.name = res.data.name;
        this.id = res.data.id;
        // console.log(res.data)
        // this.chuangsong(res.data)
      });
    },
    // 热门城市
    getHot() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.csArr = res.data;
      });
    },
    // 获取所有城市
    getSuoyou() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        var arr = [];
        //先排序，再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          this.$set(this.syArr, arr[i], res.data[arr[i]]);
        }
      });
    }
  }
};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
#top {
  width: 100%;
  background-color: rgb(49, 144, 232);
  color: white;
}
#topText {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
}
#topLeft,
#topRight {
  padding: 0.15rem 0;
}
#topLeft {
  text-align: left;
}
#topRight {
  text-align: right;
}
/* 白色字体 */
.w {
  color: white;
}
/* 当前定位城市 */
#chengshi {
  width: 100%;
  background-color: white;
  font-size: 0.12rem;
  border-bottom: 1px solid gainsboro;
}
#cs {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem 0;
}
#csL {
  color: #666;
}
#csR {
  color: #9f9f9f;
}
/* 显示定位的router及热门城市 */
#dw {
  width: 100%;
  background-color: white;
  padding: 0.1rem 0;
  border-bottom: 1px solid #bdbdbd;
}
#hot {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 0.1rem;
  border-top: 1px solid #bdbdbd;
}
#rmcs {
  padding: 0.1rem 0;
}
#dingwei {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.13rem;
  color: #5882fa;
}
#right {
  width: 0.1rem;
}
#h {
  width: 95%;
  margin: 0 auto;
}
#h > p {
  font-size: 0.13rem;
  padding: 0.1rem;
}
#remen {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.rmcs {
  width: 25%;
  color: #5882fa;
  padding: 0.1rem 0;
  font-size: 0.12rem;
  border: 1px solid gainsboro;
  box-sizing: border-box;
}
/* 所有城市 */
#suoyou {
  width: 100%;
  /* margin-top: 0.1rem; */
  background-color: white;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
}
#a {
  color: gray;
  padding: 0.1rem 0;
  font-size: 0.14rem;
  margin-left: 0.12rem;
}
#na {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.n {
  width: 25%;
  padding: 0.1rem;
  border: 1px solid gainsboro;
  box-sizing: border-box;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.13rem;
}
.tc {
  width: 100%;
  padding: 0.1rem 0;
  background-color: rgb(243, 243, 243);
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
}
/* 头像css */
#txall{
  width:0.3rem;
}
</style>
