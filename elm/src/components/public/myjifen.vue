<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">我的积分</span>
                <div id="center">
                    <span id="span1">当前积分</span>
                    <span id="span2">0</span>
                    <span id="span3">分</span>
                    <img id="img1" src="../../assets/question.png" alt="">
                    <span @click="myjifenex()" id="span5">积分说明</span>
                    <span @click="exchange()" id="span6">积分兑换商品</span>
                </div>
            </div>
            </div>
            <p id="p1">最近30天积分记录</p>
            <img id="img2" src="../../assets/123.png" alt="">
            <p id="p2">最近30天无积分记录</p>
            <p id="p3">快去下单赚取大量积分吧</p>







            <div class="animated heartBeat 2s" v-if="show" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">快去下单赚取大量积分吧</span>
                <span @click="sure2()" id="divspan1">确认</span>
            </div>
    </div>
</template>
<script>
export default {
    name:"myjifen",
    data(){
        return {
            show:false,
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        myjifenex(){
            this.$router.push({
                name:"myjifenex"
            })
        },
        sure2(){
            this.show = false;
        },
        exchange(){
            this.show = true;
        }
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
    height: 2.1rem;
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
    position: absolute;
    top: 0.5rem;
    left: 0.1rem;
    width: 3.55rem;
    height: 1.5rem;
    background-color: white;
    border-radius: 0.05rem;
}
#span1{
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    font-size: 0.13rem;
}
#span2{
    position: absolute;
    top: 0.35rem;
    left: 0.1rem;
    font-size: 0.35rem;
}
#span3{
    position: absolute;
    top: 0.5rem;
    left: 0.35rem;
    font-size: 0.15rem;
}
#img1{
    position: absolute;
    top: 0.1rem;
    right: 0.6rem;
    width: 0.2rem;
}
#span5{
    /* display: inline-block; */
    /* width: em; */
    position: absolute;
    font-size: 0.15rem;
    top: 0.1rem;
    right: 0.01rem;
    color: rgb(49, 144, 232)
}
#span6{
    display: inline-block;
    width: 3.35rem;
    border-radius: 0.05rem;
    height: 0.5rem;
    background-color: rgb(254, 109, 71);
    position: absolute;
    top: 0.9rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.18rem;
    color: white;
    left: 0.1rem;
}
#p1{
    position: absolute;
    top: 2.25rem;
    left: 0.15rem;
    font-size: 0.13rem;
    color: rgb(183, 183, 183)
}
#img2{
    position: absolute;
    top: 3rem;
    left: 1.3rem;
    width: 1rem;
}
#p2{
     top: 4.2rem;
    left: 1.1rem;
    position: absolute;
    font-size: 0.16rem;
}
#p3{
    top: 4.5rem;
    left: 1.2rem;
    position: absolute;
    font-size: 0.12rem;
    color: rgb(153, 153, 153)
}
#div1{
    position: absolute;
    top: 1.3rem;
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
    left: 0.55rem;
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
