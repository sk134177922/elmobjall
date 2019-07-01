<template>
    <div>
       <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">我的优惠</span>
            </div>
            </div>
            <div id="center">
                <span>红包</span>
                <span @click="span2()">商家代金卷</span>
            </div>

            <div id="title">
                <p>有</p>
                <p>{{length}}</p>
                <p>个红包即将到期</p>
                <img id="titleimg" src="../../assets/question.png" alt="">
                <span @click="hongbaoexplain()">红包说明</span>
            </div>

            <div id="hongbao" :key="i" v-for="(v,i) in datas">
                <div id="hongbaoleft">
                     <span id="left1">￥</span>
                     <span id="left2">{{v.amount.toFixed(1)}}</span>
                     <span id="left3">{{v.description_map.sum_condition}}</span>
                </div>
                <div id="hongbao6">

                </div>
                <div id="hongbaoright">
                    <span id="right1">{{v.description_map.validity_delta}}</span>
                    <span id="right2">分享红包</span>
                    <span id="right3">{{v.description_map.validity_periods}}</span>
                    <span id="right4">{{v.description_map.phone}}</span>
                </div>
               
            </div>

            <div id="word">
                <span>限品类: 快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</span>
            </div>

            <p @click="historyhongbao()" id="history">查看历史红包</p>
            <img id="img1" src="../../assets/iconfontjiantou2.png" alt="">

            <div id="bottom">
                <div @click="duihuan()" id="bleft">
                    兑换红包
                </div>
                <div @click="tuijian()" id="bright">
                    推荐有奖
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name:"discount",
    data(){
        return{
            datas:"",
            length:""
        }
    },
    created() {
        // this.getdetail();
        this.length = this.$store.state.length;
        // this.getlegth();
         this.datas = this.$store.state.detail;
    },
    methods:{
        back(){
            this.$router.push({
                name:"myself"
            })
        },
        span2(){
            this.$router.push({
                name:"shopdiscount"
            })
        },
        hongbaoexplain(){
            this.$router.push({
                name:"hongbaoexplain"
            })
        },
        historyhongbao(){
            this.$router.push({
                name:"historyhongbao"
            })
        },
        duihuan(){
            this.$router.push({
                name:"duihuan"
            })
        },
        tuijian(){
           this.$router.push({
                name:"tuijian"
            }) 
        },
    }
}
</script>
<style scoped>
#top{
    width: 3.75rem;
    /* height: 1.3rem; */
}
#topone{
    width: 3.75rem;
    height: 0.4rem;
    background-color: rgb(49, 144, 232);
    position: relative;
    border-bottom: 1px solid rgb(96, 168,234)
}
#topone>img{
    width: 0.15rem;
    margin-top: 0.07rem;
    margin-left: 0.07rem;
}
#topspan{
    position: absolute;
    top: 0.1rem;
    text-align: center;
    left: 1.5rem;
    font-size: 0.18rem;
    color: white;
}
#center{
    width: 3.75rem;
    height: 0.5rem;
    background-color:white;
    position: relative;
}
#center>span:nth-child(1){
    position: absolute;
    width: 0.5rem;
    height: 0.35rem;
    border-bottom: 2px solid rgb(49, 144, 232);
    text-align: center;
    line-height: 0.35rem;
    top: 0.05rem;
    left: 0.6rem;
    font-size: 0.18rem;
    color: rgb(49, 144, 232);
}
#center>span:nth-child(2){
    position: absolute;
    width: 0.9rem;
    height: 0.35rem;
    text-align: center;
    line-height: 0.35rem;
    top: 0.05rem;
    right: 0.6rem;
    font-size: 0.18rem;
}
#title{
    margin-top: 0.15rem;
    width: 3.75rem;
    /* height: 0.5rem; */
    /* line-height: 0.5rem; */
    font-size: 0.1rem;
    position: relative;
}
#title>p{
    display: inline-block;
}
#title>p:nth-child(1){
 margin-left: 0.15rem;
}
#title>p:nth-child(2){
 color: red;
}
#titleimg{
    width: 0.21rem;
    position: absolute;
    top: -0.05rem;
    right: 0.6rem;
}
#title>span{
    position: absolute;
    top: -0.02rem;
    right: 0.1rem;
    color: rgb(49, 144, 232)
}
#hongbao{
    width: 3.35rem;
    margin-left: 0.2rem;
    height: 1rem;
    border-top: 2px solid red;
    background-color: #fff;
    display: flex;
    border-radius: 0.05rem;
    margin-top: 0.15rem;
    position: relative;
}
#hongbaoleft{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: relative;
}
#hongbaoright{
    width: 2.3rem;
     height: 1rem;
     position: relative;
}
#left1{
    position: absolute;
    top: 0.5rem;
    left: 0.13rem;
    color: red;
    font-size: 0.18rem;
}
#left2{
    position: absolute;
    font-size: 0.35rem;
    top: 0.35rem;
    left: 0.3rem;
    color: red;
}
#left3{
    position: absolute;
    font-size: 0.12rem;
    top: 0.73rem;
    left: 0.22rem;
    color: rgb(197, 197, 197);
}
#right1{
    position: absolute;
    top: 0.21rem;
    font-size: 0.19rem;
    right: 0.15rem;
    color: red;
}
#right2{
    position: absolute;
    top: 0.25rem;
    left: 0.17rem;
    font-size: 0.16rem;
}
#right3{
    position: absolute;
    top: 0.5rem;
    left: 0.18rem;
    font-size: 0.12rem;
    color: rgb(197, 197, 197);
}
#right4{
     position: absolute;
    top: 0.69rem;
    left: 0.18rem;
    font-size: 0.12rem;
    color: rgb(197, 197, 197);
}
#hongbao6{
    position: absolute;
    top: 0.25rem;
    left: 1rem;
    height: 0.6rem;
    border: 1px dashed rgb(237, 237, 237);
}
#word{
    width: 3.35rem;
    height: 0.5rem;
    background-color: rgb(249, 249, 249);
    margin-left: 0.2rem;
    border-bottom-left-radius: 0.05rem;
    border-bottom-right-radius: 0.05rem;
    position: relative;
}
#word span:nth-child(1){
    display: inline-block;
    width: 3.1rem;
    position: absolute;
    top: 0.1rem;
    left: 0.15rem;
    font-size: 0.12rem;
    line-height: 0.2rem;
    color:rgb(153, 153, 153);
}
#history{
    position: absolute;
    top: 5.5rem;
    left: 1.5rem;
     font-size: 0.12rem;
    color:rgb(153, 153, 153);
}
#img1{
    position: absolute;
    top: 5.5rem;
    left: 2.3rem;
    width: 0.15rem;
}
#bottom{
    width: 3.75rem;
    height: 0.5rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
}
#bleft{
    width: 1.87rem;
   height: 0.5rem;
    border-right: 1px solid rgb(250, 250, 250);
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.16rem;
}
#bright{
     width: 1.87rem;
   height: 0.5rem;
   text-align: center;
    line-height: 0.5rem;
    font-size: 0.16rem;
}
</style>
