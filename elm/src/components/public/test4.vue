<template>
  <div id="wrap">
    <div id="top">
      <!-- <img src='../../assets/back.png' alt class="p1" @click="back"> -->
      <img src="../../assets/back.png" alt class="p1" @click="back()" />
      <div class="a1">
        <p style="font-weight:bold;">{{datas.cityName}}</p>
        <router-link style="color:white;font-size:0.15rem;" to="/allcity">切换城市</router-link>
      </div>
    </div>
    <div id="content">
      <input v-model="keyword" id="inp" type="text" placeholder="输入学校，商务楼，地址" />
      <div id="submit" @click="sub()">提交</div>
    </div>
    <p v-show="show" id="search">搜索历史</p>
    <!-- 相关地址 -->
    <div id="relative">
      <ul id="ul1">
        <li
          class="li1"
          @click="addss(v.name,v.address,v.geohash,v.longitude,v.latitude,v)"
          style=" text-align:left"
          :key="i"
          v-for="(v,i) in arr"
        >
          <router-link
            tag="p"
            v-model="address"
            :to="'/waimai?Name='+v.name+'&weidu='+v.latitude+'&jingdu='+v.longitude+'&geohash='+v.geohash"
          >
            <p class="vName">{{v.name}}</p>
            <p style=" text-align:left" class="p2">{{v.address}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div id="bottom">
      <ul id="ul2">
        <li class="li2" style="text-align:left" :key="i" v-for="(v,i) in names">
          <router-link
            tag="p"
            v-model="address"
            :to="'/waimai?Name='+names[i]+'&weidu='+latitudes[i]+'&jingdu='+longitudes[i]+'&geohash='+geohashs[i]"
          >
            {{names[i]}}
            <br />
            <p class="p3">{{dress[i]}}</p>
            <!-- <p>{{v.geohash}}</p> -->
          </router-link>
        </li>
        <li v-if="show1" class="qk" @click="addc()">
          <p v-if="show2">清空历史</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      city_id: "",
      keyword: "",
      type: "",
      datas: {},
      address: "", //存储搜索的地址,点击一次赋一个值
      addresses: [], //存储搜索的地址
      arr: [],
      names: [],
      dress: [],
      geohashs: "",
      show: true,
      show1: true,
      show2: false,
      longitudes: [],
      latitudes: []
      // names:''
    };
  },
  created() {
    this.datas = this.$route.query;
    this.addhi();
    this.$store.commit("getcityid", this.$route.query.city_id);
  },

  methods: {
    sub() {
      const URL =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.datas.city_id +
        "&keyword=" +
        this.keyword +
        "&type=search";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        this.arr = response.data;
        this.$store.commit("getgeohash", response.data);
        this.show = false;
        // this.show2 = !this.show2;
        if (this.arr.message == "参数错误") {
          this.show2 = false;
          this.show = true;
        }
      });
    },
    back() {
      this.$router.back();
    },

    addss(a, b, c, d, e, v) {
      if (localStorage.name) {
        if (localStorage.name.indexOf(a) == -1) {
          localStorage.name += "," + a;
          localStorage.address += "," + b;
          localStorage.geohash += "w" + c;
          localStorage.longitude += "," + d;
          localStorage.latitude += "," + e;
        }
        console.log(c);
        console.log(v);
        this.$store.commit('getmingzi',v)
        this.$store.commit('dedaojindu',v.longitude);
        this.$store.commit('dedaoweidu',v.latitude)
      } else {
        localStorage.name = a;
        localStorage.address = b;
        localStorage.geohash = c;
        localStorage.longitude = d;
        localStorage.latitude = e;
      }
      this.$store.commit("getmingzi", v);
    },
    addhi() {
      if (localStorage.name) {
        this.names = localStorage.name.split(",");
        this.dress = localStorage.address.split(",");
        this.geohashs = localStorage.geohash.split("w");
        this.$store.commit("getjinweidu", this.geohashs);
        this.longitudes = localStorage.longitude.split(",");
        this.latitudes = localStorage.latitude.split(",");
        if (this.names.length > 0) {
          this.show2 = true;
        }
      }

      //  console.log(this.geohashs);
    },
    addc() {
      localStorage.removeItem("name");
      localStorage.removeItem("address");
      localStorage.removeItem("geohash");
      localStorage.removeItem("longitude");
      localStorage.removeItem("longitude");
      (this.names = []), (this.dress = "");
      this.geohashs = "";
      this.longitude = "";
      this.longitude = "";
      console.log(this.names.length);
      if (this.names.length == 0 || this.names.length == "") {
        this.show1 = false;
      }
      console.log(this.show1);
      console.log(this.names);
    },
    back() {
      this.$router.back();
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
  /* border: 1px solid black; */
  position: fixed;
  width: 3.75rem;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.2rem;
  color: white;
  top: 0;
  /* margin-bottom: 0.1rem; */
}
.p1 {
  position: absolute;
  left: 0.1rem;
  top: 0.16rem;
  width: 0.12rem;
}
.a1 {
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.a1 p {
  position: fixed;
  left: 40%;
  text-align: center;
}
#inp {
  font-size: 0.16rem;
  width: 90%;
  padding: 2%;
  /* margin-left: 2.5%; */
  border: 1px solid rgb(187, 187, 187);
  border-radius: 0.03rem;
}
#content {
  /* border: 1px solid red; */
  padding: 2%;
  margin-top: 0.53rem;
  background-color: #fff;
  text-align: center;
}
#submit {
  width: 90%;
  padding: 2.5%;
  margin-left: 2.5%;
  margin-top: 3%;
  background-color: rgb(49, 144, 232);
  color: #fff;
  font-size: 0.15rem;
  outline: none;
  border-radius: 0.03rem;
}
#search {
  /* width: 100%; */
  /* border: 1px solid blue;   */
  position: absolute;
  left: 2%;
  padding: 2%;
}
#relative {
  /* border: 1px solid red;  */
  margin-top: 3%;
  margin-left: 0;
}

#ul1 li {
  /* margin-top: 1%; */
  padding: 0.2rem 0;
  border-bottom: 1px solid rgb(212, 212, 212);
  font-size: 0.15rem;
  color: black;
  background-color: white;
}
.li1 > p {
  margin-left: 2%;
}
.p2 {
  margin-top: 2%;
  font-size: 0.1rem;
  color: gray;
}
#bottom {
  margin-top: 8%;
  /* border: 1px solid red; */
  width: 100%;
  background-color: white;
}
#ul2 {
  margin-top: 0.1rem;
  margin-left: 2%;
}
.li2 {
  width: 100%;
  margin-top: 0.05rem;
  border-bottom: 1px solid gainsboro;
  font-size: 0.15rem;
  color: black;
  background-color: white;
  padding: 0.1rem;
}
.p3 {
  margin-top: 0.13rem;
  font-size: 0.1rem;
  color: gray;
}
.qk {
  margin-top: 2%;
  font-size: 0.17rem;
  line-height: 0.45rem;
  text-align: center;
}
.vName {
  margin-bottom: 0.1rem;
}
</style>