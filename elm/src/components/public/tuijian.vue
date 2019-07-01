<template>
    <div>
        <div id="top">
            <img @click="back()" id="img1" src="../../assets/back.png" alt="">
            <p id="login">推荐有奖</p>
        </div>
        <img id="img2" src="../../assets/recommendencourage1.png" alt="">
        <div id="center">
            <img @click="sure1()" id="centerimg1" src="../../assets/recommendencourage2.png" alt="">
            <span id="span1">邀请微信好友</span>
            <img @click="sure1()" id="centerimg2" src="../../assets/recommendencourage3.png" alt="">
            <span id="span2">邀请QQ好友</span>
            <img @click="sure1()" id="centerimg3" src="../../assets/recommendencourage4.png" alt="">
             <span id="span3">面对面邀请</span>
        </div>
        <span id="line"></span>
        <span id="shouyi">累计收益</span>
        <span id="num">0</span>
        <span id="money">元</span>
        <span id="success">成功邀请</span>
        <span id="num1">0</span>
        <span id="peo">人</span>
        <span id="shouyimingxi">-收益明细-</span>
        <img id="hongbao" src="../../assets/recommendencourage5.png" alt="">
        <span id="invite">还不赶紧去邀请好友</span>
        <div class="animated heartBeat 2s" v-if="show" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">请在饿了么APP中打开</span>
                <span @click="sure2()" id="divspan1">确认</span>
            </div>
    </div>
</template>
<script>
export default {
    name:"tuijian" ,
    data(){
        return {
            show:false,
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        sure1(){
            this.show = true;
        },
        sure2(){
            this.show = false;
        }
    }   
}
</script>
<style scoped>
#top{
    width: 3.75rem;
    height: 0.5rem;
    background-color:rgb(49,144,232);
    position: relative;
}
#img1{
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    width: 0.12rem;
}
#login{
    height: 0.5rem;
    line-height: 0.5rem;
    width: 3.75rem;
    text-align: center;
    color: white;
    font-size: 0.18rem;
}
#img2{
    width: 3.75rem;
}
#center{
    margin-top: 0.05rem;
    width: 3.75rem;
    height: 1.2rem;
    background-color: white;
    position: relative;
}
#centerimg1{
    position: absolute;
    top: 0.2rem;
    width: 0.6rem;
    left: 0.3rem;
}
#span1{
    font-size: 0.12rem;
    position: absolute;
    top: 0.9rem;
    left: 0.25rem;
}
#centerimg2{
    position: absolute;
    top: 0.2rem;
    width: 0.6rem;
    left: 1.6rem;
}
#span2{
    font-size: 0.12rem;
    position: absolute;
    top: 0.9rem;
    left: 1.55rem;
}
#centerimg3{
    position: absolute;
    top: 0.2rem;
    width: 0.6rem;
    left: 2.8rem;
}
#span3{
    font-size: 0.12rem;
    position: absolute;
    top: 0.9rem;
    left: 2.8rem;
}
#shouyi{
    position: absolute;
    top: 4.5rem;
    left: 0.6rem;
    font-size: 0.12rem;
}
#line{
     position: absolute;
    top: 4.4rem;
    border: 1px solid rgb(226,226,226);
    left: 1.9rem;
    display: inline-block;
    height: 0.35rem;
}
#num{
    position: absolute;
    top: 4.65rem;
    left: 0.8rem;
    font-size: 0.25rem;
    color: red;
}
#money{
    font-size: 0.13rem;
    position: absolute;
    top: 4.73rem;
    left: 0.97rem;
}
#success{
    position: absolute;
    top: 4.5rem;
    right: 0.6rem;
    font-size: 0.12rem;
}
#num1{
    position: absolute;
    top: 4.65rem;
    right: 0.8rem;
    font-size: 0.25rem;
    color: rgb(159, 159, 159);
}
#peo{
    font-size: 0.13rem;
    position: absolute;
    top: 4.73rem;
    right: 0.65rem;
}
#shouyimingxi{
     position: absolute;
    top: 5rem;
    font-size: 0.12rem;
    left: 1.6rem;
    display: inline-block;
    height: 0.35rem;
}
#hongbao{
    position: absolute;
    width: 0.35rem;
    top: 5.3rem;
    left: 1.72rem;
}
#invite{
     position: absolute;
    font-size: 0.12rem;
    color: rgb(153, 153, 153);
    top: 5.9rem;
    left: 1.38rem;
}
#div1{
    position: absolute;
    top: 1.7rem;
    left: 0.45rem;
    width: 2.8rem;
    height: 1.7rem;
    background-color: white;
     border-top-right-radius: 0.05rem;
    border-top-left-radius: 0.05rem;
}
#divimg{
    width: 0.8rem;
    position: absolute;
    top: 0.08rem;
    left: 1rem;
}
#divspan{
    display: inline-block;
    width: 2.5rem;
    position: absolute;
    top: 1rem;
    left: 0.6rem;
    font-size: 0.16rem;
}
#divspan1{
    display: inline-block;
    background-color: rgb(79, 217, 100);
    color: white;
    font-size: 0.18rem;
    line-height: 0.45rem;
    width: 2.8rem;
    position: absolute;
    top: 1.5rem;
    height: 0.45rem;
    text-align: center;
    border-bottom-right-radius: 0.05rem;
    border-bottom-left-radius: 0.05rem;
}
</style>
