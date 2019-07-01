<template>
    <div>
        <div id="top">
            <img @click="back()" id="img1" src="../../assets/back.png" alt="">
            <p id="login">密码登录</p>
        </div>
        <div id="center">
            <input v-model="username" id="ac" placeholder="账号" type="text">
            <input v-model="password" id="se" placeholder="密码" :type="word">
            <div @click="value1()" id="a">
                <el-switch 
  v-model="value2"
  active-color="#13ce66"
  inactive-color="rgb(204,204,204)">
</el-switch>
            </div>

            <input v-model="codeNumber" id="cd" placeholder="验证码" type="text">
            <img :src="code" alt="">
            <p id="p1" @click="login()">登录</p>
            <p id="p2" @click="getCode()">换一张</p>
            <p id="p3">温馨提示 : 未注册过的账号 , 登录时将会自动注册注册过的用户可凭账号密码登录</p>
        </div>
       <p id="password"> <router-link :to="{name:'password'}">重置密码?</router-link></p>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return {
            code:"",//存储验证码base64图片
            username:"",
            password:"",
            codeNumber:"",//存储验证码输入框的值
            userid:"",
            // value1: true,
            value2: false,
            word:"password"
        }
    },
    created() {
        this.getCode();
    },
    methods: {
        value1(){
            if(this.value2 == false){
                this.word = "password"
            }else{
                this.word = "text"
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
                 captcha_code:this.codeNumber,
                 user_id:this.userid
                }
            }).then(res=>{
                console.log("login数据");
                console.log(res);
                console.log(res.data.user_id);
                 this.$store.commit("getlogin",this.username);
                 this.$store.commit("getuserid",res.data.user_id);
                if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"myself",
                        query:res.data,
                        params:{pID:res.data.id,}
                        
                    })
                }
                this.$store.commit('xiugaidl',false)
            })
        },
        back(){
            this.$router.go(-1);
        },
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
    width: 3.75rem;
    height: 0.6rem;
    border-bottom: 1px solid rgb(235,235,235);
    font-size:0.16rem;
    text-indent: 0.15rem;
}
#se{
    width: 3.75rem;
    height: 0.6rem;
    border-bottom: 1px solid rgb(235,235,235);
    font-size:0.16rem;
    text-indent: 0.15rem;
}
#cd{
    width: 3.75rem;
    height: 0.6rem;
    font-size:0.16rem;
    text-indent: 0.15rem;
}
#p1{
    position: absolute;
    top: 2.5rem;
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
img{
    position: absolute;
    top: 1.3rem;
    left: 2.2rem;
}
#p2{
     position: absolute;
    top: 1.5rem;
    left: 3.1rem;
    font-size: 0.16rem;
}
#p3{
    position: absolute;
    line-height: 0.25rem;
    left: 0.1rem;
    top: 1.9rem;
    display: inline-block;
    width: 3rem;
    font-size: 0.13rem;
    color: red;
}
#password{
    position: absolute;
    top: 4rem;
    right: 0.3rem;
}
#a{
    position: absolute;
    top: 0.8rem;
    right: 0.1rem;
    width: 0.4rem;
}
</style>
