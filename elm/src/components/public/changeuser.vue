<template>
    <div>
        <div id="top">
      <img @click="back()" src="../../assets/back.png" alt>
      <span id="topspan">修改用户名</span>
    </div>
    <input :style="{border:color2}" @input="change()" v-model="username" placeholder="请输入用户名" id="inp" type="text">

    <p v-if="show1" id="p1">用户名只能显示一次(5-24字符之间)</p>
    <p v-if="show" :style="{color:color1}" id="p22">用户名只能显示一次5到24位之间</p>
    <p :style="{color:color3}" id="p2" @click="changeusername()">确定修改</p>
    </div>
</template>
<script>
export default {
    name:"changeuser",
    data(){
      return {
        username:"",
        show1:true,
        show:false,
        color1:"",
        color2:"",
        color3:"",
      }
    },
    // created(){
    //   // this.changeusername();
    // },
    methods: {
         back() {
      this.$router.go(-1);
    },
        changeusername(){
          this.$store.commit("getlogin",this.username);
          this.$router.push({
            name:"myinfor"
          })
        },
        change(){
          if(/\w{5,24}/.test(this.username)){
            this.color1 = "";
            this.color2 = "";
            this.show = false;
            this.show1 = true;
            this.color3 = "white";
          }else{
            this.show = true;
            this.show1 = false;
             this.color1 = "red";
             this.color2 = "1px solid red";
             this.color3 = "";
          }
        }
    },
}
</script>
<style scoped>
#top {
  width: 3.75rem;
  height: 0.4rem;
  background-color: rgb(49, 144, 232);
  position: relative;
  border-bottom: 1px solid rgb(96, 168, 234);
}
#top > img {
  width: 0.15rem;
  margin-top: 0.07rem;
  margin-left: 0.07rem;
}
#topspan {
  position: absolute;
  top: 0.09rem;
  left: 1.35rem;
  font-size: 0.19rem;
  color: white;
}
#inp{
    background-color: rgb(243, 243, 243);
    border: 1px solid rgb(226, 226, 226);
    width: 3.5rem;
    height: 0.36rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
}
#p1{
    margin-top: 0.15rem;
    margin-left: 0.1rem;
    font-size: 0.1rem;
}
#p22{
    margin-top: 0.15rem;
    margin-left: 0.1rem;
    font-size: 0.13rem;
}
#p2{
    background-color: rgb(49, 153, 232);
    border: 1px solid rgb(226, 226, 226);
    width: 3.5rem;
    height: 0.36rem;
    text-align: center;
    line-height: 0.36rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
    color: rgb(140, 198, 242)
}
</style>
