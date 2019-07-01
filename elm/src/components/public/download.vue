<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">下载</span>
            </div>
            </div> 

            <img id="img1" src="../../assets/eliaomo.png" alt="">
            <p id="download">下载饿了么App</p>
            <p @click="sure1()" id="downp">下载</p>
            <div class="animated heartBeat 2s" v-if="show" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan"> IOS用户请前往Appstore下载</span>
                <span @click="sure2()" id="divspan1">确认</span>
            </div>
    </div>
</template>
<script>
export default {
    name:"download",
    data(){
        return{
            show:false
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
    left: 1.7rem;
    font-size: 0.18rem;
    color: white;
}
#img1{
    width: 1.7rem;
    margin-top: 0.25rem;
    margin-left: 1rem;
}
#download{
    font-size: 0.18rem;
    color: rgb(137, 137, 137);
    margin-top: 0.15rem;
    margin-left: 1.2rem;
}
#downp{
    margin-top: 0.2rem;
    width: 3.3rem;
    background-color:rgb(76, 217, 100);
    margin-left: 0.22rem;
    text-align: center;
    height: 0.35rem;
    font-size: 0.16rem;
    color: white;
    line-height: 0.35rem;
    border-radius: 5px;
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
    left: 0.3rem;
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
