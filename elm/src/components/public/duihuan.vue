<template>
    <div>
        <div id="top">
            <img @click="back()" id="img1" src="../../assets/back.png" alt="">
            <p id="login">兑换红包</p>
        </div>
        <div id="center">
            <input maxlength="12" @input="ac()" v-model="username" id="ac" placeholder="请输入兑换码" type="text">
            <input maxlength="4"  @input="cd()" v-model="codeNumber" id="cd" placeholder="验证码" type="text">
            <div id="centerright">
            <img id="centerimg" :src="code" alt="">
            <p id="p2" @click="getCode()">换一张</p>
            </div>
            <p :style="{backgroundColor:color1}" id="p1" @click="login()">兑换</p>
            
            <div class="animated heartBeat 2s" v-if="show" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">无效的兑换码</span>
                <span @click="sure()" id="divspan1">确认</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            code:"",//存储验证码base64图片
            username:"",
            codeNumber:"",//存储验证码输入框的值
            show:false,
            color1:"",
            show1:false,
            show2:false,
        }
    },
    created() {
        this.getCode();
        // this.login();
    },
    methods: {
        ac(){
            if(/\d{6,12}$/.test(this.username)){
                this.show1 = true
                if(this.show1 == true && this.show2 == true){
                    this.color1 = "rgb(76,217,100)"
                    
                }
            }else{
                this.show1 = false
                this.color1 = ""
            }
        },
        cd(){
            if(this.codeNumber.length == 4){
                this.show2 = true
                if(this.show1 == true && this.show2 == true){
                    this.color1 = "rgb(76,217,100)"
                }
            }else{
                this.show2 = false
                this.color1 = ""
            }
        },
        getCode(){
          const api = "https://elm.cangdu.org/v1/captchas";
          this.$http({
                url:api,
                method:"post",
                //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
                withCredentials:true
          }).then(res=>{
            console.log("验证码数据");
            console.log(res);
            this.code = res.data.code;
          })
        },
        login(){
            const api = "https://elm.cangdu.org/v2/login";
            this.$http({
                url:api,
                method:"post",
                withCredentials:true,
                data:{
                 username:this.username,
                 password:this.password,
                 captcha_code:this.codeNumber
                }
            }).then(res=>{
                // console.log("login数据");
                // console.log(res);
                if(this.username.length >= 6 && this.codeNumber.length == 4){
                    this.show = true;
                }else{

                }
            })
        },
        back(){
           if(this.show == false){
                this.$router.go(-1);
           }else{

           }
        },
        sure(){
            this.show = false;
            // this.login();
            this.getCode()
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
#center{
    margin-top: 0.2rem;
    width: 3.75rem;
    height: 1.8rem;
    position: relative;
}
#ac{
    width: 3.5rem;
    height: 0.5rem;
    margin-left: 0.13rem;
    border-bottom: 1px solid rgb(235,235,235);
    font-size:0.16rem;
    border-radius: 0.03rem;
    text-indent: 0.1rem;
}
#cd{
    width: 2rem;
    height: 0.5rem;
    font-size:0.16rem;
    border-radius: 0.03rem;
    margin-top: 0.1rem;
     margin-left: 0.13rem;
      text-indent: 0.1rem;
}
#p1{
    position: absolute;
    top: 1.3rem;
    width: 3.3rem;
    background-color:rgb(204, 204, 204);
    margin-left: 0.22rem;
    text-align: center;
    height: 0.35rem;
    font-size: 0.16rem;
    color: white;
    line-height: 0.35rem;
    border-radius: 5px;
}
#centerimg{
    width: 0.8rem;
    margin-top: 0.1rem;
}
#p2{
     /* position: absolute;
    top: 1.5rem;
    left: 3.1rem; */
    font-size: 0.12rem;
    margin-top: -0.1rem;
    margin-left: 1rem;
    color: rgb(67, 154, 234)
}
#centerright{
    width: 1.38rem;
    height: 0.5rem;
    font-size:0.16rem;
    border-radius: 0.03rem;
    margin-top: 0.1rem;
     margin-right: 0.13rem;
     background-color: white;
     float: right;
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
    position: absolute;
    top: 1rem;
    left: 0.95rem;
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
