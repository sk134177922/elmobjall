<template>
    <div>
        <div id="top">
      <img @click="back()" src="../../assets/back.png" alt>
      <span id="topspan">编辑地址</span>
      <span @click="sure()" v-if="show" id="span1">编辑</span>
      <span @click="sure()" v-else id="span1">完成</span>
    </div>

   <ul id="ul1"  :key="i" v-for="(v,i) in arr1">
     <li id="li1">
       <p id="p1">{{v.phone}}</p>
       <p v-if="show1" @click="del(i)" id="pp1">✖</p>
       <p id="p2">{{v.phone_bk}}</p>
     </li>
   </ul>

  <div @click="addaddress()" id="address">
    <p id="addp1">新增地址</p>
    <img id="img1" src="../../assets/iconfontjiantou2.png" alt="">
  </div>
    </div>
</template>
<script>
export default {
    name:"changeaddress",
    data(){
      return {
        arr1:[],
        data:"",
        address_id:"",
        show:true,
        show1:false
      }
    },
    created(){
      this.getaddress();
    },
   methods:{
     sure(){
       this.show = !this.show;
       this.show1 = !this.show1;
     },
        back(){
        this.$router.go(-1);
    },
    addaddress(){
      this.$router.push({
        name:"addaddress"
      })
    },
    getaddress(){
      
       const api = "https://elm.cangdu.org/v1/users/"+this.$store.state.userid+"/addresses";
        this.$http({
          url:api,
          method:"get",
          withCredentials: true,

        }).then(res=>{
          
          this.arr1 = res.data;
          this.arr1.reverse();
          console.log(res.data);
          this.data = this.$store.state.userid;
          this.address_id = res.data;
        })
    },
    del(i){
      const api = "https://elm.cangdu.org/v1/users/"+this.data+"/addresses/"+ this.address_id[i].id;
      this.$http({
        url:api,
        method:"DELETE",
        withCredentials: true,
      }).then(res=>{
        console.log(res);
        this.arr1.splice(i,1)
      })
    }
   }
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
  left: 1.43rem;
  font-size: 0.19rem;
  color: white;
}
#ul1{
  display: inline-block;
  width: 3.75rem;
  height: 0.5rem;
  background-color: papayawhip;
  position: relative;
}
#address{
  margin-top: 0.15rem;
  width: 3.75rem;
  height: 0.4rem;
  background-color: white;
  position: relative;
}
#addp1{
  text-indent: 0.1rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
}
#img1{
  position: absolute;
  width: 0.2rem;
  right: 0.1rem;
  top: 0.1rem;
}
#li1{
  display: inline-block;
  height: 0.5rem;
  width: 3.75rem;
  border-bottom: 1px solid black;
}
#p1{
  display: inline-block;
  position: absolute;
  top: 0.08rem;
}
#p2{

  position: absolute;
  top: 0.28rem;
}
#pp1{
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
#span1{
  font-size: 0.16rem;
  color: white;
  position: absolute;
  top: 0.15rem;
  right: 0.1rem;
}
</style>
