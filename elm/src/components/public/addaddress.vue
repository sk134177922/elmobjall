<template>
    <div>
        <div id="top">
      <img @click="back()" src="../../assets/back.png" alt>
      <span id="topspan">新增地址</span>
    </div>
    
    <div id="center">
        <input :style="{border:color3}" @input="changeuser()" v-model="user" placeholder="请输入你的姓名" id="inp1" type="text">
        <p v-if="showuser" id="p1">请填写您的姓名</p>
        <input  v-model="address" @click="add()" placeholder="小区/写字楼/学校等" id="inp2" type="text">
         <input :style="{border:color1}" @input="change()" v-model="Alladdress" placeholder="请填写详细送餐地址" id="inp3" type="text">
         <p v-if="show" id="p1">请详细填写送餐地址</p>
         <p v-if="show1" id="p1">送餐地址太短,不能识别</p>
        <input :style="{border:color2}" @input="change1()" v-model="num" placeholder="请填写能够联系到您的手机号" id="inp4" type="text">
        <p v-if="a" id="p1">手机号不能为空</p>
         <p v-if="a1" id="p1">请输入正确的手机号</p>
         <input @input="change2()" v-model="anothernum" placeholder="备用联系电话(选填)" id="inp5" type="text">
         <p v-if="show11" id="p1">请输入正确的手机号</p>
    </div>

    <div class="animated heartBeat 2s" v-if="show66" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">地址信息错误</span>
                <span @click="sure2()" id="divspan1">确认</span>
            </div>

    <p @click="address1()" id="add">新增地址</p>




    </div>
</template>
<script>
export default {
    name:"addaddress",
    data(){
        return {
            user:"",
            address:"",
            Alladdress:"",
            num:"",
            anothernum:"",
            show:false,
            color1:"",
            color2:"",
            color3:"",
            show1:false,
            a:false,
            a1:false,
            show11:false,
            showuser:false,
            show66:false
        }
    },
    created() {
        this.address = this.$store.state.address
    },
    methods:{
        change(){
            if(/^[\u4E00-\u9FA5\\s]+\d{3,10}/.test(this.Alladdress)){
                this.show = false;
                this.show1 = false;
                 this.color1 = ""
            }else if(this.Alladdress.length <= 2 && this.Alladdress.length != 0){
                this.show = false;
                this.show1 = true;
                this.color1 = "1px solid red"
            }else{
                this.show = true;
                this.show1 = false;
                this.color1 = "1px solid red"
            }
        },
        change1(){
            if(/^1[345789]\d{9}$/.test(this.num)){
                this.a = false;
                this.a1 = false;
                 this.color2 = ""
            }else if(this.num.length <= 2 && this.num.length != 0 || this.num.length >= 3){
                this.a = false;
                this.a1 = true;
                this.color2 = "1px solid red"
            }else{
                this.a = true;
                this.a1 = false;
                this.color2 = "1px solid red"
            }
        },
        change2(){
            if(/^1[345789]\d{9}$/.test(this.anothernum)){
                this.show11 = false;
            }else{
                this.show11 = true;
            }
        },
        changeuser(){
            if(/[\u4E00-\u9FA5\\s]{2,4}/.test(this.user)){
                this.showuser = false;
                this.color3 = ""
            }else{
                
                this.showuser = true;
                this.color3 = "1px solid red"
            }
        },
        back(){
            this.$router.go(-1);
        },
        add(){
            this.$router.push({
                name:"searchaddress"
            })
        },
        sure2(){
          this.show66 = false;  
        },
        address1(){
            
            const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.userid+"/addresses";
            this.$http({
                url:api,
                method:"post",
                data:{
                    name:this.user,
                    phone:this.num,
                    address:this.address,
                    address_detail:this.Alladdress,
                    phone_bk:this.anothernum,
                   



                    //数据源没有
                    // user_id:this.user_id,
                    geohash:this.$store.state.geohash,

                    tag:"0",
                    sex:1,
                    tag_type:2
                }
            }).then(res=>{
               console.log(res)
                if(!(this.user == "" && this.address == "" && this.Alladdress == "" && this.num == "" && this.anothernum == "")){
                    this.$router.push({
                        name:"changeaddress"
                    })
                }else{
                    this.show66 = true;
                }
                
            })
        }
    } 
}
</script>
<style scoped>
#p1{
    margin-left: 0.15rem;
    margin-top: 0.05rem;
    font-size: 0.12rem;
    color: red;
}
#top {
  width: 3.75rem;
  height: 0.4rem;
  background-color: rgb(49, 144, 232);
  position: relative;
  border-bottom: 1px solid rgb(96, 168, 234);
}
#top > img {
  width: 0.12rem;
  margin-top: 0.1rem;
  margin-left: 0.07rem;
}
#topspan {
  position: absolute;
  top: 0.11rem;
  left: 1.43rem;
  font-size: 0.18rem;
  color: white;
}
#center{
    margin-top: 0.1rem;
    padding-bottom: 0.15rem;
    width: 3.75rem;
    border-radius: 0.05rem;
    /* height: 2.35rem; */
    background-color: white;
    
}
#inp1{
    width: 3.5rem;
    height: 0.35rem;
    border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    background-color: rgb(242,242,242);
    font-size: 0.15rem;
    text-indent: 0.1rem;
}
#inp2{
    width: 3.5rem;
    height: 0.35rem;
    border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    background-color: rgb(242,242,242);
    font-size: 0.15rem;
    text-indent: 0.1rem;
}
#inp3{
    width: 3.5rem;
    height: 0.35rem;
    border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    background-color: rgb(242,242,242);
    font-size: 0.15rem;
    text-indent: 0.1rem;
}
#inp4{
    width: 3.5rem;
    height: 0.35rem;
    border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    background-color: rgb(242,242,242);
    font-size: 0.15rem;
    text-indent: 0.1rem;
}
#inp5{
    width: 3.5rem;
    height: 0.35rem;
    border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    background-color: rgb(242,242,242);
    font-size: 0.15rem;
    text-indent: 0.1rem;
}
#add{
    width: 3.5rem;
    height: 0.35rem;
     border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    text-align: center;
    line-height: 0.35rem;
    background-color: rgb(76,217,100);
    font-size: 0.13rem;
    color: white;
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
    left: 0.91rem;
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
