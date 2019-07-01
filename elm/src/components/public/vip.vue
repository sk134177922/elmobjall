<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">会员中心</span>
            </div>
            </div>
            <p id="p1">为账户{{name1}}购买会员</p>

            <div id="center">
               <div id="vipdiv">
                    <span id="vippower">会员特权</span>
                    <span @click="vipex()" id="vipspan">会员说明</span>
                    <img id="img1" src="../../assets/iconfontjiantou2.png" alt="">
               </div>
                
                <div id="vipdiv2">
                    <img id="img2" src="../../assets/yewutubiaosheng.png" alt="">
                    <p id="vip2p">减免配送费</p>
                    <p id="vip2p2">每月减免30单,每日可减免3单,每单最高减4元蜂鸟专送专享</p>
                </div>
                
                <div id="vipdiv3">
                    <img id="img2" src="../../assets/yewutubiaosheng.png" alt="">
                    <p id="vip2p">减免配送费</p>
                    <p id="vip2p2">每月减免30单,每日可减免3单,每单最高减4元蜂鸟专送专享</p>
                </div>

                <div id="openvip">
                    <p id="vp1">开通会员</p>
                    <span id="vp2">1个月</span>
                    <span id="price">￥20</span>
                    <span @click="buyvip()" id="buy">购买</span>
                </div>



                <div @click="vipexchange()" id="sercet">
                    <span id="sep">兑换会员</span>
                    <span id="sep2">使用卡号卡密</span>
                    <img id="img11" src="../../assets/iconfontjiantou2.png" alt="">
            </div>

            <div @click="kaifapiao()" id="buyrecord">
                    <span id="sep">购买记录</span>
                    <span id="sep22">开发票</span>
                    <img id="img11" src="../../assets/iconfontjiantou2.png" alt="">
            </div>
            </div>

            

    </div>
</template>
<script>
export default {
    name:"vip",
    methods:{
         back(){
           this.$router.go(-1);
        },
        vipex(){
            this.$router.push({
                name:"vipex"
            })
        },
        buyvip(){
            this.$router.push({
                name:"buyvip"
            })
        },
        vipexchange(){
            this.$router.push({
                name:"vipexchange"
            })
        },
        kaifapiao(){
            this.$router.push({
                name:"kaifapiao"
            })
        }
    },
    computed: {
        name1(){
            this.$store.state.loginac;
        }
    },
}
</script>
<style scoped>
#top{
    width: 3.75rem;
    height: 0.4rem;
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
#p1{
margin-top: 0.15rem;
margin-left: 0.1rem;
font-size: 0.15rem;
}
#center{
    margin-top: 0.15rem;
    width: 3.75rem;
    height: 2.4rem;
    background-color: white;
}
#vipdiv{
    width: 3.75rem;
    height: 0.4rem;
    /* border-bottom: 1px solid red; */
    position: relative;
}
#vippower{
    position: absolute;
    left: 0.15rem;
    line-height: 0.4rem;
    width: 3rem;
    height: 0.4rem;
    border-bottom: 1px solid rgb(243, 243,243);
    font-size: 0.16rem;
    display: inline-block;
}
#vipspan{
    position: absolute; 
    top: 0rem;
    right: 0.3rem;
    height: 0.4rem;
    font-size: 0.13rem;
    color: lightgray;
    line-height: 0.4rem;
    border-bottom: 1px solid rgb(243, 243,243);
    display: inline-block;
}
#img1{
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
    right: 0rem;
    border-bottom: 1px solid rgb(243, 243,243);
}
#vipdiv2{
    margin-left: 0.15rem;
    width: 3.6rem;
    height: 1rem;
    border-bottom: 1px solid rgb(243, 243,243);
    position: relative;
}
#img2{
    position: absolute;
    top: 0.3rem;
    width: 0.38rem;
}
#vip2p{
    display: inline-block;
    position: absolute;
    top: 0.25rem;
    left: 0.5rem;
    font-size: 0.16rem;
}
#vip2p2{
    display: inline-block;
    position: absolute;
    top: 0.45rem;
    width: 2.4rem;
    left: 0.5rem;
    font-size: 0.12rem;
    color: lightgray;
}
#vipdiv3{
    margin-left: 0.15rem;
    width: 3.6rem;
    height: 1rem;
    border-bottom: 1px solid rgb(243, 243,243);
    position: relative;
}
#openvip{
    margin-top: 0.1rem;
    width: 3.75rem;
    height: 1.2rem;
    background-color: white;
    position: relative;
    overflow: hidden;
}
#vp1{
width: 3.75rem;
    height: 0.6rem;
    /* background-color:red; */
    margin-left: 0.15rem;
    line-height: 0.6rem;
    border-bottom: 1px solid rgb(243, 243,243);
    font-size: 0.16rem;
}
#vp2{
    display: inline-block;
    height: 0.6rem;
    /* background-color: blue; */
    margin-left: 0.15rem;
    line-height: 0.6rem;
    font-size: 0.16rem;
}
#price{
    color: orange;
    font-size: 0.2rem;
    width: 0.3rem;
}
#buy{
    display: inline-block;
    width: 0.6rem;
    text-align: center;
    border-radius: 5px;
    height: 0.3rem;
    line-height: 0.3rem;
    color: orange;
    border: 1px solid orange;
    margin-left: 2rem;
    font-size: 0.16rem;
}
#sercet{
    margin-top: 0.1rem;
    width: 3.75rem;
    height: 0.6rem;
    background-color: white;
    position: relative;
}
#sep{
    line-height: 0.6rem;
    font-size: 0.16rem;
    margin-left: 0.15rem;
}
#sep2{
    line-height: 0.6rem;
    font-size: 0.14rem;
    color: lightgray;
    margin-left: 1.7rem;
}
#img11{
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    top: 0.2rem;
    right: 0.05rem;
    border-bottom: 1px solid rgb(243, 243,243);
}
#buyrecord{
    margin-top: 0.1rem;
    width: 3.75rem;
    height: 0.6rem;
    background-color: white;
    position: relative;
}
#sep22{
    line-height: 0.6rem;
    font-size: 0.14rem;
    color: lightgray;
    margin-left: 2.15rem;
}
</style>
