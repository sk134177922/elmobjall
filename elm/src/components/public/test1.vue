<template>
  <div id="wrap">
    <div class="mid">
      <div class="mid-left">
        <ul v-if="obj">
          <li v-for="(v,i) in obj" :key="i" @click="bianse(i)" class="bianse">
            <a :href="'#ab'+i"><div>{{v.name}}<span v-if="nums[i]">{{nums[i]}}</span></div></a>
            
            <!-- <span v-if="v[i]">{{v[i].__v}}</span> -->
          </li>
        </ul>
      </div>
      <div class="mid-right">
        <div v-for="(v,i) in obj" :key="'a'+i" class="m-r-f">
          <div class="title-p">
            <span :id="'ab'+i">{{v.name}}</span>
            <span>{{v.description}}</span>
          </div>
          <div v-for="(k,b) in v.foods" :key="'b'+b" class="m-block" @click.stop="nextpage(k,shopdata)">
            <img :src="k.image_path" alt>
            <div class="m-b-text">
              <p>
                <span class="k-name">{{k.name}}</span>
                <span
                  :class="classB"
                  v-if="k.attributes.length>0 && k.attributes[0] && k.attributes[0].icon_color=='f07373'"
                >{{k.attributes[0].icon_name}}</span>
                <span
                  :class="classB"
                  v-if="k.attributes.length>0 && k.attributes[1] && k.attributes[1].icon_color=='f07373'"
                >{{k.attributes[1].icon_name}}</span>
              </p>
              <div
                :class="classA"
                v-if="k.attributes.length>0 && k.attributes[1] && k.attributes[1].icon_color=='5ec452'"
              >
                <span>{{k.attributes[1].icon_name}}品</span>
              </div>

              <p class="k-des">{{k.description}}</p>
              <p class="k-tip">{{k.tips}}</p>
              <!-- <p :class="(k.attributes[0].icon_color=='5ec452')?classA:classB" v-if="k.attributes.length>0 && k.attributes[0]">{{k.attributes[0].icon_name}}</p> -->
              <div
                :class="classA"
                v-if="k.attributes.length>0 && k.attributes[0] && k.attributes[0].icon_color=='5ec452'"
              >
                <span>{{k.attributes[0].icon_name}}品</span>
              </div>

              <span
                v-if="k.activity"
                :style="'color:#'+k.activity.image_text_color+';border-radius:0.05rem;display:inline-block;border:1px solid #'+k.activity.icon_color"
              >{{k.activity.image_text}}</span>
              <div class="p-20">
                <span v-if="k.specfoods[0]">￥{{k.specfoods[0].price}}起</span>
                <span
                  v-if="k.specifications.length"
                  @click.stop="ordertips(k)"
                  class="gui3"
                >选{{k.specifications[0].name}}</span>

                <div class="jiajian" v-else>
                  <span class="jianhao" @click.stop="delle(i,b)" v-if="k.is_featured>0">-</span>
                  <span v-if="k.is_featured>0">{{k.is_featured}}</span>
                  <span class="jiahao" @click.stop="addd(i,b)">+</span>


                  <!-- <span class="jianhao" @click.stop="k.__v--;goureduce(k.specfoods[0].price)" v-if="k.__v>0">-</span>
                  <span v-if="k.__v>0">{{k.__v}}</span>
                  <span class="jiahao" @click.stop="k.__v++;gouadd(k.specfoods[0].price)">+</span> -->



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="boll" class="contenttips" @click="hideshow()">
      <div v-if="kobj" class="ordertips" v-show="boll" @click.stop="showh()">
        <p>{{kobj.name}}</p>
        <p v-if="kobj.specfoods">{{kobj.specfoods[0].name}}</p>
        <div v-if="kobj.specfoods" class="guige">
          <span
            class="sureone"
            @click="firstsure()"
            v-if="kobj.specfoods[0].specs_name"
          >{{kobj.specfoods[0].specs_name}}</span>
          <span
            class="suretwo"
            @click="secondsure()"
            v-if="kobj.specfoods[1].specs_name"
          >{{kobj.specfoods[1].specs_name}}</span>
        </div>

        <div class="pricedog" v-if="kobj.specifications">
          <span v-if="kobj.specfoods[0].specs_name && elsesee">￥{{kobj.specfoods[0].price}}</span>
          <span v-if="kobj.specfoods[1].specs_name && ifsee">￥{{kobj.specfoods[1].price}}</span>
          <span @click.stop="addgou(kobj)">加入购物车</span>
        </div>
      </div>
    </div>
    <div class="boto">
      <div class="gou00">
        <!-- <p>{{(goumoney).toFixed(2)}}</p> -->
        <p>{{(this.$store.state.totalprice).toFixed(2)}}</p>
        <p>配送费￥{{shopdata.float_delivery_fee}}</p>
      </div>
      <div class="haicha">
        <p class="classp1" v-if="this.$store.state.totalprice<20">还差￥{{chaqian}}起送</p>
        <p class="classp2" v-if="this.$store.state.totalprice>=20">请结算</p>
      </div>
      <img src="../../../static/imgs/gouwuche.png" v-if="this.$store.state.totalprice<20" class="goshop">
      <img src="../../../static/imgs/gouwuche.png" v-else class="goshopblue">
      <div class="countnum" v-if="num">{{num}}</div>
      <!-- <div v-if="gounum" class="countnum">{{gounum}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "stores_gifts",
  data() {
    return {
      elsesee: true,
      ifsee: false,
      boll: false,
      shopid: "",
      shopdata: "",
      food: "",
      classA: "cca",
      classB: "ccb",
      kobj: {},
      countnumber: 0,
      pricenum: 0,
      jiansee: false,
      gounum:0,
      goumoney:0,
      allprice:0,
      chaqian:"",
      lishi:""
    };
  },
  created() {
    this.getSid();
    this.getfood();
    // console.log("created shop");
    // console.log(this.$store.state.shopID);
    this.allprice = this.$store.state.totalprice;
    
  },
  methods: {
    getSid() {
      const api =
        "https://elm.cangdu.org/shopping/restaurant/" +
        this.$store.state.shopID;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        this.shopdata = res.data;
   this.chaqian=this.shopdata.float_minimum_order_amount-this.$store.state.totalprice;
      });
    },
    getfood() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
        this.$store.state.shopID;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        for (var i = 0; i < res.data.length; i++) {
          for (var g = 0; g < res.data[i].foods.length; g++) {
            var zz = /^(https)/;
            var bol = zz.test(res.data[i].foods[g].image_path);
            if (bol == false) {
              res.data[i].foods[g].image_path =
                "https://elm.cangdu.org/img/" + res.data[i].foods[g].image_path;
            }
          }
        }
        // console.log(res.data);
        this.$store.commit("getobj", res.data);
        // this.food = res.data;
      });
    },
    ordertips(v) {
      this.kobj = v;
      this.boll = true;
    },
    addd(a, b) {
      this.$store.commit("getindex", {
        a: a,
        b: b
      });
      this.chaqian=this.shopdata.float_minimum_order_amount-this.$store.state.totalprice;
    },
    delle(a, b) {
      this.$store.commit("getdele", {
        a: a,
        b: b
      });
        this.chaqian=this.shopdata.float_minimum_order_amount-this.$store.state.totalprice;
    },
    nextpage(k,b) {
      this.$store.commit("recqian",this.chaqian);
      this.$router.push({
        name: "intro3ji",
        query: { vi: k, ci: this.num ,gi:b}
      });
    },
    hideshow() {
      this.boll = false;
    },
    showh() {
      this.boll = true;
    },
    firstsure() {
      var sureone = document.getElementsByClassName("sureone")[0];
      var suretwo = document.getElementsByClassName("suretwo")[0];
      this.elsesee = true;
      this.ifsee = false;
      sureone.style.color = "rgb(49, 143, 231)";
      suretwo.style.color = "black";
      suretwo.style.border = "1px solid rgb(220,220,220)";
      sureone.style.border = "1px solid rgb(49, 143, 231)";
    },
    secondsure() {
      var sureone = document.getElementsByClassName("sureone")[0];
      var suretwo = document.getElementsByClassName("suretwo")[0];
      this.ifsee = true;
      this.elsesee = false;
      sureone.style.color = "black";
      sureone.style.border = "1px solid rgb(220,220,220)";
      suretwo.style.color = "rgb(49, 143, 231)";
      suretwo.style.border = "1px solid rgb(49, 143, 231)";
    },
    bianse(a) {
      // console.log("点击");

      var bianse = document.getElementsByClassName("bianse");
      // console.log(bianse);
      for (var i = 0; i < bianse.length; i++) {
        bianse[i].style.backgroundColor = "rgb(246,244,245)";
        // bianse[i].style.color="gray";
        //  bianse[i].style.fontWeight=0;
      }
      bianse[a].style.backgroundColor = "white";
      // bianse[a].style.color="black";
      // bianse[a].style.fontWeight="bold";
    },
     gouadd(b){
      this.gounum++;
      this.goumoney+=b;
    },
    goureduce(c){
      this.gounum--;
      this.goumoney-=c;
    },
    addgou(bc){
      if(this.elsesee){
        this.goumoney+=bc.specfoods[0].price;
        this.gounum++;
        this.$store.state.totalprice+=bc.specfoods[0].price;
        // this.num++;
      }
      if(this.ifsee){
        this.goumoney+=bc.specfoods[1].price;
        this.gounum++;
        this.$store.state.totalprice+=bc.specfoods[1].price;
        // this.num++;
      }
       this.boll = false;
       bc.is_featured++;
    }
  },
  computed: {
    // obj() {
    //   return this.$store.state.obj;
    // },
     
    nums() {
      var arr = [];
      for (var i = 0; i < this.$store.state.obj.length; i++) {
        var a = 0;
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          a += this.$store.state.obj[i].foods[k].is_featured;
        }
        // console.log(a);
        arr.push(a);
      }
      return arr;
    },
    num() {
      var a = 0;
      for (var i = 0; i < this.$store.state.obj.length; i++) {
        for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
          a += this.$store.state.obj[i].foods[k].is_featured;
        }
      }
      return a;
    }
   
  }
};
</script>

<style scoped>
#wrap {
  /* border: 2px solid red; */
  /* box-sizing: border-box; */
  overflow: hidden;
}
.mid {
  width: 100%;
}
::-webkit-scrollbar {
  display: none;
}
.mid-left {
  margin-top: 1.5rem;
  overflow-y: scroll;
  background-color: lightblue;
  /* font-size: 0.12rem; */
  width: 25%;
  height: 77vh;
  float: left;
}
.bianse {
  background-color: rgb(246, 244, 245);
  list-style-type: none;
  width: 100%;
  height: 0.6rem;
  /* line-height: 0.6rem; */
  font-size: 0.16rem;
  border-bottom: 1px solid lightgray;
  color: gray;
}
.bianse div span{
  text-align: center;
  margin-top: 0.1rem;
  display: block;
  width: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.12rem;
  height: 0.2rem;
  float: right;
  margin-right: 0.05rem;
  background-color: red;
  border-radius: 50%;
  color: white;
}
.bianse div{
  width: 100%;
  line-height: 0.6rem;
  height: 0.6rem;
  color: black;
}
.mid-right {
  margin-top: 1.5rem;
  overflow: hidden;
  overflow-y: scroll;
  width: 75%;
  height: 77vh;
  float: left;
  /* margin-bottom: 1rem; */
}
.m-r-f {
  width: 100%;
  /* height: 1rem; */
  background-color: lightpink;
}
.title-p {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: rgb(248, 246, 249);
}
.title-p span:nth-child(1) {
  display: inline-block;
  /* padding-bottom: 0.05rem; */
  font-size: 0.2rem;
}
.title-p span:nth-child(2) {
  display: inline-block;
  font-size: 0.15rem;
}
.m-block {
  width: 100%;
  height: 1.3rem;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}
.m-block > img {
  margin-top: 0.15rem;
  width: 16%;
  float: left;
}
.m-b-text {
  margin-left: 2%;
  float: left;
  margin-top: 0.1rem;
  width: 82%;
  height: 0.9rem;
}
.cca {
  width: 0.5rem;
  height: 0.4rem;
  background-color: rgb(76, 219, 101);
  color: white;
  font-size: 0.14rem;
  text-align: center;
  transform: rotateZ(-45deg);
  position: absolute;
  top: -0.15rem;
  left: -0.2rem;
}
.cca span {
  display: block;
  /* line-height: 0.4rem; */
  font-size: 0.1rem;
  padding-top: 0.25rem;
  /* transform: rotateZ(45deg); */
}
.ccb {
  color: red;
  border: 1px solid orangered;
  border-radius: 0.05rem;
  float: right;
  margin-right: 0.1rem;
  font-size: 0.08rem;
  padding: 0.01rem;
}
.k-name {
  display: inline-block;
  height: 0.18rem;
  margin-bottom: 0.05rem;
  font-size: 0.16rem;
  font-weight: bold;
}
.k-des {
  font-size: 0.12rem;
  margin-bottom: 0.05rem;
}
.k-tip {
  margin-bottom: 0.05rem;
  font-size: 0.12rem;
}
.p-20 {
  margin-top: 0.05rem;
  font-size: 0.16rem;
}
.gui3 {
  border-radius: 0.05rem;
  padding: 0.05rem;
  display: block;
  margin-right: 0.05rem;
  float: right;
  color: white;
  background-color: rgb(49, 143, 231);
}
.contenttips {
  width: 3.75rem;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
}
.ordertips {
  width: 2.55rem;
  height: 1.9rem;
  background-color: white;
  position: absolute;
  top: 30vh;
  border-radius: 0.1rem;
  left: 0.6rem;
  overflow: hidden;
}
.ordertips > p:nth-child(1) {
  margin-top: 0.1rem;
  font-size: 0.2rem;
  text-align: center;
}
.ordertips > p:nth-child(2) {
  margin-top: 0.3rem;
  font-size: 0.16rem;
  margin-left: 0.15rem;
}
.guige {
  margin-left: 0.15rem;
  margin-top: 0.2rem;
  font-size: 0.16rem;
}
.guige span:nth-child(1) {
  display: inline-block;
  border: 1px solid rgb(49, 143, 231);
  color: rgb(49, 143, 231);
  padding: 0.06rem;
  margin-right: 0.05rem;
  border-radius: 0.05rem;
}
.guige span:nth-child(2) {
  display: inline-block;
  border: 1px solid rgb(220, 220, 220);
  padding: 0.05rem;
  border-radius: 0.05rem;
}

/* .pricedog{

} */
.boto {
  width: 100%;
  height: 0.45rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(66, 65, 70);
}
.goshop {
  width: 10%;
  background-color: rgb(66, 65, 70);
  border-radius: 50%;
  border: 0.05rem solid gray;
  padding: 0.05rem;
  position: absolute;
  top: -0.15rem;
  left: 0.1rem;
}

.goshopblue {
  width: 10%;
  background-color: rgb(49, 143, 231);
  border-radius: 50%;
  border: 0.05rem solid gray;
  padding: 0.05rem;
  position: absolute;
  top: -0.15rem;
  left: 0.1rem;
}
.boto > div {
  float: left;
}
.gou00 {
  width: 70%;
}
.gou00 > p {
  margin-left: 30%;
  color: white;
}
.gou00 > p:nth-child(1) {
  margin-top: 0.03rem;
  font-size: 0.2rem;
}
.gou00 > p:nth-child(2) {
  font-size: 0.12rem;
}
.haicha {
  width: 30%;
  height: 0.45rem;
  background-color: rgb(80, 81, 83);
  /* background-color: red; */
  font-size: 0.14rem;
  color: white;
  text-align: center;
  line-height: 0.45rem;
}
.classp1{
background-color: rgb(80, 81, 83);
}
.classp2{
  background-color: rgb(75,218,100);
}
.countnum {
  width: 0.25rem;
  height: 0.25rem;
  /* padding: 0.03rem; */
  position: absolute;
  line-height: 0.25rem;
  text-align: center;
  top: -0.2rem;
  left: 0.5rem;
  font-size: 0.2rem;
  background-color: red;
  border-radius: 50%;
}
.jianhao {
  /* margin-right: 0.05rem; */
  border-radius: 50%;
  padding: 0.05rem;
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  display: block;
  margin-right: 0.05rem;
  float: left;
  color: white;
  background-color: rgb(49, 143, 231);
}
.jiahao {
  border-radius: 50%;
  padding: 0.05rem;
  display: block;
  margin-right: 0.05rem;
  float: right;
  color: white;
  background-color: rgb(49, 143, 231);
}
.jiajian {
  width: 30%;
  float: right;
  overflow: hidden;
  /* border: 1px solid red; */
}
.jiajian span:nth-child(2) {
  /* line-height: 0.22rem; */
  font-size: 0.12rem;
}
.pricedog {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: rgb(245, 247, 244);
  position: absolute;
  bottom: 0;
  left: 0;
}
.pricedog span:nth-child(1) {
  margin-left: 0.1rem;
  font-size: 0.18rem;
  color: orangered;
}
.pricedog span:nth-child(2) {
  border-radius: 0.05rem;
  display: block;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  width: 1rem;
  float: right;
  font-size: 0.16rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
  color: white;
  background-color: rgb(49, 143, 231);
}
</style>
