<template>
  <div id="wrap">
    <div id="top">
      <div id="t">
        <img src="../../assets/back.png" @click="back()">
        <span style="font-weight:bold;font-size:0.2rem;">{{n}}</span>
        <router-link to="/test4" style="color:white;font-size:0.15rem;">切换城市</router-link>
      </div>
    </div>
    <div id="center">
      <div id="bd">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="s">
        <br>
        <button @click="getS()">提交</button>
      </div>
    </div>
    <div id="ss">
      <ul>
        <li v-for="(v,i) in arr" :key="i">
          <router-link :to="'/waimai?Name='+v.name+'&weidu='+v.latitude+'&jingdu='+v.longitude">
            <p style="color:black;font-size:0.12rem;margin-bottom:0.05rem;">{{v.name}}</p>
            <p style="color:gray;font-size:0.08rem;">{{v.address}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "localcity",
  data() {
    return {
      id: "",
      n: "",
      s: "",
      arr: [],
      datas: {}
    };
  },
  created() {
    this.datas = this.$route.query;
    this.id = this.$route.query.cityId;
    // console.log(this.$route);
    this.getN();
  },
  methods: {
    getN() {
      const api = "https://elm.cangdu.org/v1/cities/" + this.id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.n = res.data.name;
      });
    },
    back() {
      this.$router.back();
    },
    getS() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.s +
        "&type=search";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        this.arr = res.data;
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
  padding: 0.15rem 0;
}
#t {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#top img {
  width: 0.12rem;
}
#center {
  width: 100%;
  margin-top: 0.1rem;
  background-color: white;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
}
#bd {
  width: 90%;
  margin: 0 auto;
  padding: 0.1rem 0;
}
#bd input {
  width: 100%;
  height: 0.25rem;
  border: 1px solid gainsboro;
  border-radius: 0.03rem;
  font-size: 0.1rem;
}
#bd button {
  width: 100%;
  height: 0.25rem;
  margin-top: 0.1rem;
  color: white;
  font-size: 0.12rem;
  background-color: rgb(49, 144, 232);
  border: 1px solid rgb(49, 144, 232);
  border-radius: 0.03rem;
}
#ss {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
}
#ss li {
    padding: 0.1rem;
  border-bottom: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
}
</style>
