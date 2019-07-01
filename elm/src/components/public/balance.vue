<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">我的余额</span>
                <div id="center">
                    <span id="span1">当前余额</span>
                    <span id="span2">0.00</span>
                    <span id="span3">元</span>
                    <img id="img1" src="../../assets/question.png" alt="">
                    <span @click="balanceex()" id="span5">余额说明</span>
                    <span id="span6">提现</span>
                </div>
            </div>
            </div>
            <p id="p1">交易明细</p>
            <img id="img2" src="../../assets/123.png" alt="">
            <p id="p2">暂无明细记录</p>
    </div>
</template>
<script>
export default {
    name:"balance",
    methods:{
        back(){
            this.$router.go(-1)
        },
        balanceex(){
            this.$router.push({
                name:"balanceex"
            })
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
    left: 0.9rem;
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
    background-color: rgb(204, 204, 204);
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
    left: 1.3rem;
    position: absolute;
    font-size: 0.16rem;
}
</style>
