<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">兑换会员</span>
            </div>
            </div>
        <div id="center">
            <span>成功兑换后将关联到当前账号:</span>
            <span>{{name}}</span>
        </div>

        <input @input="Account()" maxlength="10" v-model="username" placeholder="请输入10位账号" id="inp1" type="text">
        <input @input="Severt()"  maxlength="6" v-model="password" placeholder="请输入6为卡密" id="inp2" type="text">
        <p :style="{background:color1}"  @click="exchange()" id="p1">兑换</p>

        


        <div id="bottom">
            <p>———温馨提示———</p>
            <p>新兑换的会员服务,权益以会员说明为准</p>
            <p>月卡:减免30次配送费</p>
             <p>季卡:减免90次配送费</p>
             <p>年卡:减免360次配送费</p>
             <p>*仅限蜂鸟专送订单,每日最多减免3单,每单最高减免4元</p>
             <p>(一个月按31天计算)</p>
        </div>
        <div class="animated heartBeat 2s" v-if="show" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">无效的卡号</span>
                <span @click="sure2()" id="divspan1">确认</span>
            </div>
    </div>
</template>
<script>
export default {
    name:"vipexchange" ,
    data(){
        return {
            username:"",
            password:"",
            name:"",
            show:false,
            color1:"",
            show1:false,
            show2:false,
        }
    },
    methods:{
        Account(){
            if(/[\d]{10}$/.test(this.username)){
                this.show1 = true
                if(this.show1 == true && this.show2 == true){
                    this.color1 = "rgb(76,217,100)"
                }
            }else{
                this.show1 = false
                this.color1 = ""
            }
        },
        Severt(){
            if(/[\d]{6}$/.test(this.password)){
                this.show2 = true
                if(this.show1 == true && this.show2 == true){
                    this.color1 = "rgb(76,217,100)"
                }
            }else{
                this.show2 = false
                this.color1 = ""
            }
        },
        back(){
            this.$router.go(-1);
        },
        sure2(){
            this.show = false;
        },
        exchange(){
            if(this.username.length == 10 && this.password.length == 6){
                this.show = true
            }else{
                
            }
        }
    },
    created() {
       this.name = this.$store.state.loginac;     
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
    left: 1.5rem;
    font-size: 0.18rem;
    color: white;
}
#center{
    width: 3.75rem;
    height: 0.5rem;
    
}
#center>span:nth-child(1){
    display: inline-block;
    height: 0.5rem;
    font-size: 0.13rem;
    color: rgb(102, 102, 102);
    line-height: 0.5rem;
    margin-left: 0.15rem;
}
#center>span:nth-child(2){
    font-size: 0.13rem;
}
#inp1{
    width: 3.75rem;
    height: 0.4rem;
    font-size: 0.15rem;
    text-indent: 0.15rem;
}
#inp2{
    width: 3.75rem;
    height: 0.4rem;
    font-size: 0.15rem;
    text-indent: 0.15rem;
}
#p1{
    display: inline-block;
    width: 3.5rem;
    height: 0.4rem;
    text-align: center;
    font-size: 0.16rem;
    color: white;
    line-height: 0.4rem;
    border-radius: 0.05rem;
    background-color: rgb(204,204,204);
    margin-top: 0.15rem;
    margin-left: 0.15rem;
}
#bottom{
    margin-top: 0.3rem;
    margin-left: 0.22rem;
    width: 3.3rem;
    height: 2rem;
    position: relative;
}
#bottom>p{
     color: rgb(170, 170, 170);
     position: relative;
}
#bottom>p:nth-child(1){
    font-size: 0.14rem;
    text-align: center;
    color: rgb(170, 170, 170)
}
#bottom>p:nth-child(2){
    display: inline-block;
    position: absolute;
    top: 0.4rem;
    font-size: 0.12rem;
    text-indent: 0.3rem;
}
#bottom>p:nth-child(3){
    position: absolute;
    top: 0.55rem;
    font-size: 0.12rem;
    text-indent: 0.3rem;
}
#bottom>p:nth-child(4){
    position: absolute;
    top: 0.7rem;
    font-size: 0.12rem;
    text-indent: 0.3rem;
}
#bottom>p:nth-child(5){
    position: absolute;
    top: 0.85rem;
    font-size: 0.12rem;
    text-indent: 0.3rem;
}
#bottom>p:nth-child(6){
    display: inline-block;
    width: 3.3rem;
    height: 0.3rem;
    position: absolute;
    top: 1rem;
    font-size: 0.12rem;
    text-indent: 0.3rem;
}
#bottom>p:nth-child(7){
    display: inline-block;
    height: 0.3rem;
    position: absolute;
    top: 1.15rem;
    font-size: 0.12rem;
    text-indent: 0.3rem;
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
    left: 1rem;
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
