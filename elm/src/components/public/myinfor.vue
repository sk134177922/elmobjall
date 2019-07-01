<template>
  <div>
    <div id="top">
      <img @click="back()" src="../../assets/back.png" alt>
      <span id="topspan">账户信息</span>
    </div>

    <div id="center">
      <div id="cone">
        <p id="co1">头像</p>
        <!-- <img id="cimg" :src="imageUrl" alt=""> -->

        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img id="cimg" :src="imageUrl" class="avatar">
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <img id="cimg1" src="../../assets/iconfontjiantou2.png" alt>
      </div>
      <div @click="changeuser()" id="ctwo">
        <p id="username">用户名</p>
        <p id="username1">{{this.$store.state.loginac}}</p>
        <img id="cimg2" src="../../assets/iconfontjiantou2.png" alt>
      </div>
      <div @click="changeaddress()" id="cthree">
        <p id="address">收货地址</p>
        <img id="cimg2" src="../../assets/iconfontjiantou2.png" alt>
      </div>
    </div>

    <p id="p1">账号绑定</p>

    <div @click="sure1()" id="phone">
      <img id="phone1" src="../../assets/shouji2.png" alt>
      <p  id="phonep">手机</p>
      <img id="pimg1" src="../../assets/iconfontjiantou2.png" alt>
    </div>

    <p id="safe">安全设置</p>

    <div @click="login()" id="login">
      <p id="logins">登陆密码</p>
      <p id="Change">修改</p>
      <img id="pimg1" src="../../assets/iconfontjiantou2.png" alt>
    </div>
    <p @click="sure11()" id="tuichu">退出登录</p>


    <div class="animated heartBeat 2s" v-if="show1" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">请在手机APP中设置</span>
                <span @click="sure22()" id="divspan1">确认</span>
            </div>
            <div class="animated heartBeat 2s" v-if="show" id="div11">
                <img id="divimg1" src="../../assets/未标题-1.png" alt="">
                <span id="divspan2">是否退出登录</span>
                <span @click="sure2()" id="divspan12">退出登录</span>
                <span @click="sure3()" id="divspan13">再等等</span>
            </div>
  </div>
</template>
<script>

export default {
  name: "myinfor",
  data() {
    return {
      a: "",
      imageUrl: "",
      show:false,
      show1:false,
    };
  },
  created() {
    // this.a = this.$route.query.a;
    // if(this.$store.state.imgavatar != ""){
      // this.imageUrl = this.$store.state.imgavatar;
    // }
  this.getSrc();
  },
  methods: {
     getSrc(){
            const api = "https://elm.cangdu.org/v1/user/"+this.$store.state.userid
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.imageUrl="https://elm.cangdu.org/img/"+res.data.avatar;
                console.log(this.imgSrc);
            })
        },
    back() {
      this.$router.go(-1);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    console.log(this.imageUrl);
      // this.$nextTick(function (){//等所有DOM元素加载完成时触发
          // this.$store.commit("getavatar",this.imageUrl);
          console.log(file, res)
      //立刻显示
      // this.imageUrl = URL.createObjectURL(file.raw);


      var file = file.raw;
      var formdata1 = new FormData(); // 创建form对象
      formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.axios.post('https://elm.cangdu.org/eus/v1/users/'+this.$store.state.userid+'/avatar', formdata1, config).then(response => {
        //这里的/xapi/upimage为接口
        console.log(response.data);
        console.log(this.$store.state.userid)
      });

      // })
    },
    
    changeuser(){
        this.$router.push({
            name:"changeuser",
        })
    },
    changeaddress(){
        this.$router.push({
            name:"changeaddress",
        })
    },
    sure11(){
      this.show = true;
    },
    sure1(){
            this.show1 = true;
        },
        sure22(){
          this.show1 = false;
        },
        sure2(){
            this.show = false;
            
            const api = "https://elm.cangdu.org/v2/signout";
            this.$http({
              url:api,
              methos:"get"
            }).then(res=>{
              this.$store.commit("getuserid","");
              this.$store.commit("getlogin","");
              this.$store.commit("getlength",0);
              this.$store.commit("getdetail","");
              this.$store.commit("getaddress","");
              this.$store.commit('xiugaidl',true)
              this.$router.push({
                name:"myself",

              })
            })
        },
        sure3(){
            this.show = false;
        },
        login(){
          this.$router.push({
            name:"password"
          })
        }
  }
};
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
  top: 0.07rem;
  left: 1.5rem;
  font-size: 0.21rem;
  color: white;
}
#center {
  margin-top: 0.1rem;
  width: 3.75rem;
  height: 1.5rem;
  background-color: white;
  border: 1px solid rgb(229, 229, 229);
}
#cone {
  width: 3.75rem;
  height: 0.7rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgb(229, 229, 229);
}
#ctwo {
  width: 3.75rem;
  height: 0.4rem;
  position: relative;
  border-bottom: 1px solid rgb(229, 229, 229);
  overflow: hidden;
}
#cthree {
  width: 3.75rem;
  height: 0.4rem;
  position: relative;
  border-bottom: 1px solid rgb(229, 229, 229);
  overflow: hidden;
}
#co1 {
  position: absolute;
  border-bottom: 1px solid rgb(230, 230, 230);
  font-size: 0.13rem;
  height: 0.7rem;
  line-height: 0.7rem;
  width: 0.3rem;
  left: 0.1rem;
}
#cimg1 {
  position: absolute;
  top: 0.23rem;
  right: 0.05rem;
  width: 0.25rem;
  height: 0.25rem;
}
#cimg {
  position: absolute;
  top: 0.02rem;
  right: 0.28rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
#username {
  position: absolute;
  font-size: 0.13rem;
  height: 0.7rem;
  top: 0.15rem;
  width: 3.7rem;
  left: 0.1rem;
}
#address {
  position: absolute;
  font-size: 0.13rem;
  height: 0.7rem;
  top: 0.15rem;
  width: 3.7rem;
  left: 0.1rem;
}
#cimg2 {
  position: absolute;
  top: 0.1rem;
  right: 0.05rem;
  width: 0.25rem;
  height: 0.25rem;
}
#p1 {
  margin-top: 0.15rem;
  margin-left: 0.1rem;
  font-size: 0.13rem;
}
#phone {
  margin-top: 0.15rem;
  width: 3.75rem;
  height: 0.4rem;
  position: relative;
  background-color: white;
  overflow: hidden;
}
#phone1 {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.16rem;
}
#username1 {
  position: absolute;
  font-size: 0.16rem;
  color: rgb(162, 162, 162);
  top: 0.15rem;
  right: 0.35rem;
}
#phonep {
  position: absolute;
  top: 0.15rem;
  left: 0.35rem;
  font-size: 0.13rem;
}
#pimg1 {
  position: absolute;
  top: 0.1rem;
  right: 0.05rem;
  width: 0.25rem;
  height: 0.25rem;
}
#safe {
  margin-top: 0.15rem;
  margin-left: 0.1rem;
  font-size: 0.13rem;
}
#login {
  margin-top: 0.15rem;
  width: 3.75rem;
  height: 0.4rem;
  position: relative;
  background-color: white;
  overflow: hidden;
}
#logins {
  position: absolute;
  font-size: 0.13rem;
  height: 0.7rem;
  top: 0.15rem;
  width: 3.7rem;
  left: 0.1rem;
}
#Change {
  position: absolute;
  font-size: 0.13rem;
  top: 0.15rem;
  right: 0.35rem;
  color: rgb(162, 162, 162);
}
#tuichu {
  margin-top: 0.3rem;
  margin-left: 0.1rem;
  border-radius: 5px;
  width: 3.5rem;
  height: 0.35rem;
  font-size: 0.13rem;
  color: white;
  text-align: center;
  line-height: 0.35rem;
  background-color: rgb(216, 88, 74);
}
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader-icon {
  font-size: 28px;

  width: 1.5rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  margin-left: 2.5rem;
  margin-top: 0.2rem;
}
.avatar {
  margin-left: 2.7rem;
  margin-top: 0.05rem;
  width: 1.5rem;
  height: 0.3rem;
  display: block;
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
    left: 0.69rem;
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
#div11{
    position: absolute;
    top: 1.7rem;
    left: 0.1rem;
    width: 3.5rem;
    height: 2.5rem;
    background-color: white;
     border-top-right-radius: 0.05rem;
    border-top-left-radius: 0.05rem;
}
#divimg1{
    width: 0.8rem;
    position: absolute;
    top: 0.2rem;
    left: 1.3rem;
}
#divspan2{
    display: inline-block;
    width: 2.5rem;
    position: absolute;
    top: 1.2rem;
    left: 0.9rem;
    font-size: 0.25rem;
}
#divspan12{
    display: inline-block;
    background-color: rgb(221, 107, 85);
    color: white;
    font-size: 0.18rem;
    line-height: 0.35rem;
    width: 1.1rem;
    position: absolute;
    top: 2.05rem;
    left: 1.8rem;
    height: 0.35rem;
    text-align: center;
    border-radius: 0.05rem;
}
#divspan13{
    display: inline-block;
    background-color: rgb(193, 193, 193);
    color: white;
    font-size: 0.18rem;
    line-height: 0.35rem;
    width: 1rem;
    position: absolute;
    top: 2.05rem;
    left: 0.6rem;
    height: 0.35rem;
    text-align: center;
    border-radius: 0.05rem;
}
</style>
