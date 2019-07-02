<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <!-- 导航条 -->
        <!-- <div id="bottom_bottom">
            <router-link to="/waimai">
            <img :src="waimaisrc" alt=""  @click="change1()">
            </router-link>
            <router-link to="/sousuo">
            <img :src="sousuosrc" alt="" @click="change2()">
            </router-link>
            <router-link to="/dd">
            <img :src="dingdansrc" alt="" @click="change3()">
            </router-link>
            <router-link to="/myself">
            <img :src="touxiangsrc" alt="" @click="change4()">
            </router-link>
        </div> -->
    </div>
</template>
<script>
export default {
    name:'dht',
    data() {
        return {
            waimaisrc:require("../../assets/SSS1.png"),
            sousuosrc:require("../../assets/zhinanzhen.png"),
            dingdansrc:require("../../assets/dingdan1.png"),
            touxiangsrc:require("../../assets/touxiang2.png"),
            show:'true'
        }
    },
    methods: {
        change1(){
            this.waimaisrc=require("../../assets/SSS1.png")
            this.sousuosrc=require("../../assets/zhinanzhen.png")
            this.dingdansrc=require("../../assets/dingdan1.png")
            this.touxiangsrc=require("../../assets/touxiang2.png")
        },
        change2(){
            this.waimaisrc=require("../../assets/SSS.png")
            this.sousuosrc=require("../../assets/zhinanzhen1.png")
            this.dingdansrc=require("../../assets/dingdan1.png")
            this.touxiangsrc=require("../../assets/touxiang2.png")
        },
        change3(){
            this.waimaisrc=require("../../assets/SSS.png")
            this.sousuosrc=require("../../assets/zhinanzhen.png")
            this.dingdansrc=require("../../assets/dingdan2.png")
            this.touxiangsrc=require("../../assets/touxiang2.png")
        },
        change4(){
            this.waimaisrc=require("../../assets/SSS.png")
            this.sousuosrc=require("../../assets/zhinanzhen.png")
            this.dingdansrc=require("../../assets/dingdan1.png")
            this.touxiangsrc=require("../../assets/touxiang1.png")
        }
    },
}
</script>
<style scoped>
#bottom_bottom{
    width: 3.75rem;
    padding: 0.1rem 0;
    position:fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
}
#bottom_bottom img{
    width: 0.3rem;
}
</style>
