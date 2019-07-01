<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">我的优惠</span>
            </div>
            </div>
            <div id="center">
                <span @click="span2()">红包</span>
                <span>商家代金卷</span>
            </div>
            <img id="titleimg" src="../../assets/question.png" alt="">
                <span @click="explain()" id="explain">商家代金卷说明</span>

            <img id="img1" src="../../assets/wufa(1).png" alt="">
            <p id="p1">无法使用代金卷</p>
            <p id="p2">非客户端或者客户端版本过低</p>
            <p @click="download()" id="p3">下载或升级客户端</p>
    </div>
</template>
<script>
export default {
    name:"shopdiscount",
    methods:{
        back(){
           this.$router.push({
                name:"myself"
            })
        },
        span2(){
            this.$router.push({
                name:"discount"
            })
        },
        download(){
            this.$router.push({
                name:"download"
            })
        },
        explain(){
            this.$router.push({
                name:"explain"
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
    text-align: center;
    line-height: 0.35rem;
    top: 0.05rem;
    left: 0.6rem;
    font-size: 0.18rem;
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
     color: rgb(49, 144, 232);
      border-bottom: 2px solid rgb(49, 144, 232);
}
#titleimg{
    width: 0.21rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
}
#explain{
     position: absolute;
    top: 1.02rem;
    right: 0.13rem;
    font-size: 0.12rem;
    color: rgb(49, 144, 232)
}
#img1{
    margin-top: 1.3rem;
    margin-left: 1.45rem;
    width: 0.8rem;
}
#p1{
    margin-top: 0.2rem;
    margin-left: 1.35rem;
    font-size: 0.16rem;
}
#p2{
    color: rgb(153, 153, 153);
     margin-top: 0.1rem;
    margin-left:1.13rem;
    font-size: 0.08rem;
}
#p3{
    display: inline-block;
    width: 1.35rem;
    height: 0.35rem;
    text-align: center;
    line-height: 0.35rem;
    border-radius: 0.03rem;
    background-color: rgb(86,209,118);
    color: white;
     margin-top: 0.1rem;
    margin-left:1.18rem;
    font-size: 0.15rem;
}
</style>
