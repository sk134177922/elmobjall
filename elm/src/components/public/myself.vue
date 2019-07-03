<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">我的</span>
            </div>
           <!-- <router-link to="/myinfor"> -->
                <div @click="abc()" id="topcenter">
                <img v-if="show" id="img1" :src="img1" alt="">
                <img v-else id="img1" :src="imgSrc" alt="">
                <p v-if="show" id="p22">登录/注册</p>
                <p v-else id="p2">{{name}}</p>
                <p id="p1">暂无绑定手机号</p>
                <img id="phone1" src="../../assets/shouji3.png" alt="">
                <img id="img2" src="../../assets/youjiantou.png" alt="">
            </div>
           <!-- </router-link> -->
        </div>

        <div id="center">
            <div @click="balance()" id="centerone">
                <p id="centerp1">0.00元</p>
                <p id="centerp11">我的余额</p>
            </div>
            <div @click="discount()" id="centertwo">
                <p id="centerp2">{{length}}</p>
                <p id="centerp23">个</p>
                <p id="centerp22">我的优惠</p>
            </div>
            <div @click="myjifen()" id="centerthree">
               <p id="centerp3">0分</p>
                <p id="centerp33">我的积分</p>
            </div>
        </div>

        <div id="content">
            <div id="contentone" @click="content()">
                <img id="cimg" src="../../assets/shangdian.png" alt="">
                <span id="span1">我的订单</span>
                <img id="timg1"  src="../../assets/iconfontjiantou2.png" alt="">
            </div>
            <div @click="changeshop()" id="contenttwo">
                <img id="cimg2" src="../../assets/商家.png" alt="">
                <span id="span1">积分商城</span>
                 <img id="timg1" src="../../assets/iconfontjiantou2.png" alt="">
            </div>
            <div @click="changevip()" id="contentthree">
                <img id="cimg3" src="../../assets/huangguan.png" alt="">
                <span id="span1">饿了么会员卡</span>
                <img id="timg1" src="../../assets/iconfontjiantou2.png" alt="">
            </div>
        </div>

        <div id="bottom">
            <div @click="server()" id="bottomone">
                <img id="bimg1" src="../../assets/diqiu.png" alt="">
                <p id="bp1">服务中心</p>
                <img id="bimg2"  src="../../assets/iconfontjiantou2.png" alt="">
            </div>
            <div @click="download" id="bottomtwo">
                <img id="bimg1" src="../../assets/eliaomo.png" alt="">
                <p id="bp1">下载饿了么App</p>
                <img id="bimg2"  src="../../assets/iconfontjiantou2.png" alt="">
            </div>
        </div>
        <!-- 导航条 -->
         <div id="bottom_bottom">
            <router-link to="/waimai">
            <img :src="waimaisrc" alt="" >
            </router-link>
            <router-link to="/sousuo">
            <img :src="sousuosrc" alt="" >
            </router-link>
            <router-link to="/dd">
            <img :src="dingdansrc" alt="" >
            </router-link>
            <router-link to="/myself">
            <img :src="touxiangsrc" alt="" >
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"myself",
    data() {
        return {
            name:"",
            imgSrc:"",
            img2:"",
            img1:require("../../assets/tupian.jpg"),
            show:false,
            length:"3",
            show1:true,
            waimaisrc:require("../../assets/SSS.png"),
            sousuosrc:require("../../assets/zhinanzhen.png"),
            dingdansrc:require("../../assets/dingdan1.png"),
            touxiangsrc:require("../../assets/touxiang1.png"),
        }
    },
    // beforeMount(){
        
    // }, 
    created() {
        this.getSrc();
        //  if(this.$store.state.imgavatar != ""){
        //      this.img1 = this.$store.state.imgavatar;
        //  }
         this.name = this.$store.state.loginac;
         this.check1();
        //  if(this.show == true){
             this.getlegth();
         this.length = this.$store.state.length;
        //  }
        //  this.getlegth();
         
        // if(this.img1 == this.img1){
        //     this.show1 = false;
        // }
        //  
    },
    
    methods:{
        content(){
            this.$router.push({
                name:"dd"
            })
        },
        abc(){
            if(this.show == true){
                this.$router.push({
                    name:"login"
                })
            }else{
                 this.$router.push({
                name:"myinfor",
            })
            }
           
        },
        getSrc(){
            const api = "https://elm.cangdu.org/v1/user/"+this.$store.state.userid
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.imgSrc="https://elm.cangdu.org/img/"+res.data.avatar;
                console.log(this.imgSrc);
            })
        },
        back(){
           this.$router.go(-1);
        },
        changeshop(){
            this.$router.push({
                name:"jifen",
            })
        },
        changevip(){
            this.$router.push({
                name:"vip",
            })
        },
        server(){
            this.$router.push({
                name:"server",
            })
        },
        download(){
            this.$router.push({
                name:"download",
            })
        },
        discount(){
            if(this.length == 0){
                this.$store.commit("getlength",0);
              this.$store.commit("getdetail","");
                this.$router.push({
                name:"discount"
            })
            }else{
                this.$router.push({
                name:"discount"
            })
            }
        },
        balance(){
             this.$router.push({
                name:"balance"
            })
        },
        myjifen(){
            this.$router.push({
                name:"myjifen"
            })
        },
        check1(){
            if(this.name == ""){
                this.show = true;
            }
        },
        getlegth(){
            const api = "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
               if(this.name != ""){
                this.$store.commit("getlength",res.data.length)
                this.$store.commit("getdetail",res.data)
               }else{

               }
            })
        }
        
    },
    
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
#topcenter{
    width: 3.75rem;
    background-color:rgb(49, 144, 232);
    height: 0.9rem;
}
#img1{
    position: absolute;
    top: 0.55rem;
    left: 0.1rem;
    width: 0.7rem;
    border-radius: 50%;
}
#p1{
    position: absolute;
    top: 1rem;
    left: 1.1rem;
    font-size: 0.13rem;
    color: white;
}
#img2{
    position: absolute;
    top: 0.7rem;
    right: 0.1rem;
    width: 0.3rem;
}
#p2{
    color: white;
    font-size: 0.2rem;
    position: absolute;
    left: 1rem;
    top: 0.7rem;
}
#p22{
    color: white;
    font-size: 0.2rem;
    position: absolute;
    left: 1rem;
    top: 0.7rem;
}
#center{
    width: 3.75rem;
    height: 1rem;
    background-color:white;
    display: flex;
    position: relative;
}
#center>div{
    /* display: inline-block; */
    border-left: 1px solid lightgray;
    width: 1.25rem;

}
#centerp1{
    font-size: 0.3rem;
    position: absolute;
    top: 0.2rem;
    left: 0.25rem;
    color: orange;
}
#centerp11{
    position: absolute;
    top: 0.6rem;
    left: 0.3rem;
    font-size: 0.16rem;
}
#centerp2{
    font-size: 0.3rem;
    position: absolute;
    top: 0.2rem;
    left: 1.65rem;
    color: red;
}
#centerp22{
     position: absolute;
    top: 0.6rem;
    left: 1.55rem;
    font-size: 0.16rem;
}
#centerp3{
    font-size: 0.3rem;
    position: absolute;
    top: 0.2rem;
    left: 2.85rem;
    color: lightgreen;
}
#centerp23{
 font-size: 0.2rem;
    position: absolute;
    top: 0.28rem;
    left:1.9rem;
}
#centerp33{
    position: absolute;
    top: 0.6rem;
    left: 2.8rem;
    font-size: 0.16rem;
}
#content{
    margin-top: 0.1rem;
    width: 3.75rem;
    height: 1.5rem;
    background-color: white;
    overflow: hidden;
}
#contentone{
    width: 3.75rem;
    height: 0.5rem;
    position: relative;
}
#contenttwo{
     width: 3.75rem;
    height: 0.5rem;
    position: relative;
}
#contentthree{
     width: 3.75rem;
    height: 0.5rem;
    position: relative;
}
#cimg{
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    width: 0.25rem;
}
#cimg2{
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    width: 0.25rem;
}
#cimg3{
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    width: 0.25rem;
}
#span1{
    height: 0.5rem;
    width: 3.5rem;
    position: absolute;
    line-height: 0.5rem;
    font-size: 0.16rem;
    left: 0.4rem;
    border-bottom: 1px solid lightgray;
}
#timg1{
    position: absolute;
    height: 0.3rem;
    width: 0.3rem;
    right: 0.1rem;
    top: 0.1rem;
}
#bottom{
    margin-top: 0.12rem;
    width: 3.75rem;
    height: 1rem;
    background-color: white;
    overflow: hidden;
}
#bottomone{
    width: 3.75rem;
    height: 0.5rem;
    position: relative;
}
#bottomtwo{
    width: 3.75rem;
    height: 0.5rem;
    position: relative;
}
#bimg1{
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.25rem;
}
#bp1{
    width: 3.5rem;
    font-size: 0.16rem;
    position: absolute;
    height: 0.5rem;
    line-height: 0.5rem;
    left: 0.4rem;
    border-bottom: 1px solid lightgray;
}
#bimg2{
    position: absolute;
    height: 0.3rem;
    width: 0.3rem;
    right: 0.1rem;
    top: 0.1rem;
}
#phone1{
    width: 0.18rem;
    position: absolute;
    top: 0.93rem;
    left: 0.9rem;
}
/* 导航条 */
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
