<template>
    <div style="background-color:#fff;padding-bottom:0.8rem;">
          <div class="top">
               <img src="../../assets/zuojiantou.png" alt="" class="zuojiantou" @click="gotodetial()">
               <span>{{name}}</span>
          </div>
          <p class="datu">
               <img :src="'https://elm.cangdu.org/img/'+tudizhi" alt="">
          </p>
          <p class="infor">{{infor}}</p>
          <p class="fname">{{name}}</p>
          <p>
               <span class="ratscore">评分</span>
               <span class="ratwidth">
                    <el-rate
               v-model="rat"
               disabled
               show-score
               text-color="#ff9900"
               score-template="{value}" class="ratwidth1">
               </el-rate>
               </span>

          </p>
          <p>
               <span class="monthsale">月售{{xiaosou}}单</span>
               <span>售价￥20起</span>
          </p>
          <p>
               <span class="pincount">
                    评论数{{pinglunshu}}
               </span>
               <span class="haoping"> 
                    好评率{{manyidu}}%
               </span>
          </p>
         <!-- 购物车 -->
        <div class="bottomgowu" id="gwc">
               <div class="gou00" id="ps">
                <!-- <p>{{(goumoney).toFixed(2)}}</p> -->
                <p>{{(this.$store.state.totalprice).toFixed(2)}}</p>
                <!-- <p>配送费￥{{shopdata.float_delivery_fee}}</p> -->
                <p>配送费￥5</p>
            </div>
            <div class="haicha" id="js">
                <p class="classp1" v-if="this.$store.state.totalprice<20">还差￥20起送</p>
                <p class="classp2" id="p2" v-if="this.$store.state.totalprice>=20">去结算</p>
            </div>
            <img src="../../assets/gouwuche.png" v-if="this.$store.state.totalprice<20" class="goshop" @click="clall">
            <img src="../../assets/gouwuche.png" v-else class="goshopblue" @click="clall">
            <div class="countnum" v-if="num">{{num}}</div>
            <!-- <div v-if="gounum" class="countnum">{{gounum}}</div> -->
            </div>
            <!-- 点击购物车时显示的 -->
            <div class="cargo" v-if="shopping && sk1.length>0">
                <p v-if="sk1.length>0 && shopping" class="pshop1"><span>购物车</span><span @click="clearall(sk1)" class="clearall">清空</span></p>
                <div class="cargoline" v-for="(y,z) in sk1" :key="z">
                <div><span>{{y.name}}</span></div>
                <div>
                    <span v-if="y.specfoods.length==1 ">￥{{y.specfoods[0].price}}</span>
                    <span v-if="y.specfoods.length>1 & elsesee">￥{{y.specfoods[0].price}}</span>
                    <span v-if="y.specfoods.length>1 & ifsee">￥{{y.specfoods[1].price}}</span>
                    </div>
                <span class="jiangou" @click.stop="dejian(y._id)">-</span>
                <span class="reduceadd">{{y.is_featured}}</span>
                <span class="jiagou" @click.stop="adjia(y._id)">+</span>
                </div>
                </div>
    
    </div>
</template>
<script>
export default {
    name:"foods",
    data() {
        return {
            rat:1,
            name:'',
            infor:'',
            xiaosou:1,
            pinglunshu:1,
            manyidu:1,
            tudizhi:'',
            shopping:false,
            elsesee: true,
            ifsee: false,
            classB: "ccb",
            classA: "cca",

        }
    },
    created() {
          console.log(this.$route.query)
          this.rat=this.$route.query.foodrat;
          this.rat=parseFloat(this.rat);
          this.name=this.$route.query.mingzi;
          this.infor=this.$route.query.miaosu;
          this.xiaosou=this.$route.query.yuesou
          this.pinglunshu=this.$route.query.pinglun;
          this.manyidu=this.$route.query.haoping;
          this.tudizhi=this.$route.query.tupian;
    },
     computed: {
          // 购物车显示数量
        num() {
        var a = 0;
        for (var i = 0; i < this.$store.state.obj.length; i++) {
            for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
            a += this.$store.state.obj[i].foods[k].is_featured;
            }
        }
        return a;
        },
        //显示总价
        zongjiage(){
            return this.$store.state.totalprice
        },
        //显示购物车
         //点击购物车时显示所有订单
        sk1(){
            var ak=[];
            for (let i = 0; i <  this.$store.state.obj.length; i++) {
                for (var k = 0; k < this.$store.state.obj[i].foods.length; k++) {
                    if (this.$store.state.obj[i].foods[k].is_featured>0) {
                        ak.push(this.$store.state.obj[i].foods[k])
                    } 
                }  
            }
            return ak;
        }
     },
    methods: {
         back(){
             this.$router.back();
         },
         gotodetial(){
              this.$router.push({
                   name:'shopdetial'
              })
         },
          //点击购物车时显示所有订单
        clall(){
            this.shopping=!this.shopping;
        },
        adjia(a){
        this.$store.commit("goujia",a);
        },
        dejian(b){
        this.$store.commit("goujian",b);
        },
        clearall(s){
        for(var i=0;i<s.length;i++){
            s[i].is_featured=0;
        }
        this.$store.state.totalprice=0;
        this.shopping=false;
        this.chaqian=20;
        }

    },
}
</script>
<style scoped>
 div{
        /* background-color: #fff; */
    }
     .top{
          width: 3.75rem;
          height: 0.5rem;
          background-color: #3190e8;
          position: relative;
          top: 0;
          left: 0;
          color: white;
          font-size: 0.2rem;
          display: flex;
          align-items: center;
     }
     .zuojiantou{
          width: 0.3rem;
     }
     .top>span{
          /* display: inline-block; */
          /* margin-top: 0.21rem;  */
          position:absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%,-50%);
     }
     .datu{
          width: 3.75rem;
          height: 3.75rem;
     }
     .datu>img{
          width: 100%;
          height: 100%;
     }
     .infor{
          width: 3.65rem;
          margin-top: 0.1rem;
          background-color: #fff;
          color: #666;
          padding: 0.05rem 0 0.05rem 0.1rem;
          font-size: 0.15rem;
     }
     .fname{
          margin-top:0.2rem;
          padding-left:0.1rem ;
          font-size: 0.23rem;
     }
     .ratwidth{
          width: 3rem;
     }
     .ratscore{
          display: inline-block;
      padding-left:0.1rem ;
     margin-top:0.1rem;
     }
     .ratwidth1{
          width: 3rem;
          display: inline-block;
     }
     .monthsale{
          display: inline-block;
          padding-left:0.1rem ;
          margin-top:0.1rem;
          color: #666;
     }
     .pincount{
          display: inline-block;
          padding-left:0.1rem ;
          margin-top:0.1rem;
          color: #666;
     }
     .haoping{
          color: #666;
     }
     .bottomgowu{
          position: fixed;
          width: 3.75rem;
          bottom: 0;
          left: 0;
          background-color: #555;
          height: 0.5rem;
     }
     .bottomgowu>div:nth-child(1){
         display: inline-block;
          width: 18%;
          /* background-color: blue; */
          border-radius: 50%;
          margin: -2% 0 0 4%; 
     }
     .bottomgowu>div>img{
          width: 100%;
     }
     .bottomgowu>div:nth-child(2){
         display: inline-block;
         width: 50%;
         height: 0.7rem;
        background-color: #555;
        color: #fff;
     }
     .bottomgowu>div:nth-child(3){
         display: inline-block;
         width: 25%;
         padding-top:0.5rem; 
         height: 0.7rem;
         background-color: #4cd964;
         color: white;
         text-align: center;
     }
/* 购物车样式 */
    .bottomgowu{
    width: 100%;
    height:  0.7rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgb(66, 65, 70);
    z-index: 10;
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
    .bottomgowu > div {
    float: left;
    }
    .gou00 {
    width: 70%;
    margin-left:0.3rem;
    position: fixed;
    left: 1rem; 
    }
    .gou00 > p {
    /* margin-left: 30%; */
    color: white;
    }
    .gou00 > p:nth-child(1) {
    margin-top: 0.15rem;
    font-size: 0.2rem;
    }
    .gou00 > p:nth-child(2) {
    font-size: 0.12rem;
    }
    .haicha {
    width: 10%;
    /* height:  0.5rem; */
    background-color: rgb(80, 81, 83);
    /* background-color: red; */
    font-size: 0.14rem;
    color: white;
    text-align: center;
    line-height:  0.7rem;
    /* float: right; */
    margin-left:2rem; 
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
    /* 点击后显示的购物车样式 */
    .cargo{
    width: 100%;
    max-height: 2.8rem;
    position: fixed;
    left: 0;
    bottom:0.7rem; 
    overflow-y: scroll;
    z-index: 8;
    background-color:white;
    }
    .cargoline{
    width: 100%;
    height: 0.35rem;
    /* background-color: yellow; */
    }
    .cargoline>div{
    float: left;
    height: 0.35rem;
    }
    .cargoline>div:nth-child(1){
    width:65%;
    line-height: 0.35rem;
    font-size: 0.16rem;
    font-weight: bold;
    background-color: #fff;
    }
    .cargoline>div:nth-child(2){
    width: 15%;
    font-size: 0.16rem;
    /* border: 1px solid red; */
    color: red;
    font-weight: bold;
    box-sizing: border-box;
    /* background-color:yellow; */
    line-height: 0.35rem;
    }
    .cargoline>div:nth-child(3){
    width: 20%;
    background-color: lightblue;
    line-height: 0.35rem;
    }
    .jiangou {
    /* margin-right: 0.05rem; */
    border-radius: 50%;
    font-size: 0.15rem;
    padding: 0.05rem;
    padding-left: 0.08rem;
    padding-right: 0.08rem;
    display: block;
    margin-right: 0.05rem;
    float: left;
    color: white;
    margin-top: 0.05rem;
    background-color: rgb(49, 143, 231);
    }
    .jiagou {
    border-radius: 50%;
    padding: 0.05rem;
    display: block;
    font-size: 0.15rem;
    margin-right: 0.05rem;
    margin-top: 0.05rem;
    float: right;
    color: white;
    background-color: rgb(49, 143, 231);
    }
    .reduceadd{
    line-height: 0.35rem;
    }
    .pshop1{
    height: 0.35rem;
    line-height: 0.35rem;
    background-color: rgb(239,239,239);
    }
    .pshop1 span:nth-child(2){
    float: right;
    margin-right: 0.1rem;
    }
#gwc{
     height: 0.5rem;
}
#js{
     width: 30%;
     position: absolute;
     right: 0;
     line-height: 0.5rem;
     font-size: 0.15rem;
}
#ps{
     line-height: 1.3em;
     position: absolute;
     left: 0.7rem;
}
#ps p{
     font-weight: bold;
}
#p2{
     font-weight: bold;
     font-size: 0.17rem;
}
</style>
