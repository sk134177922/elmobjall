<template>
    <div>
         <div id="top">
      <img @click="back()" src="../../assets/back.png" alt>
      <span id="topspan">搜索地址</span>
    </div>

    <div id="center">
        <input v-model="keyword" placeholder="请输入小区/写字楼/学校等" id="inp1" type="text">
        <p @click="searchaddress()" id="p1">确认</p>
    </div>
    <span id="span1">为了满足商家的送餐要求, 建议您从列表中选择地址</span>
    <div :key="i" v-for="(v,i) in datas">
        <p @click="a(i)" id="pp1">{{v.name}}</p>
    </div>









    <span v-if="show" id="span2">找不到地址?</span>
    <span v-if="show" id="span3">请尝试输入小区, 写字楼或者学校名</span>
    <span v-if="show" id="span4">详情地址 (如门牌号) 可稍后输入哦。</span>

    </div>
</template>
<script>
export default {
    name:"searchaddress",
    data(){
        return {
            keyword:"",
            datas:"",
            cityid:"",
            show:true
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        searchaddress(){
            const api = "https://elm.cangdu.org/v1/pois?city_id="+this.$store.state.cityid+"&keyword="+this.keyword+"&type=search";
            this.$http({
                url:api,
                method:"get",

            }).then(res=>{
                this.datas = res.data;
                if(this.datas != ""){
                    this.show = false;
                }else{
                    this.show = true;
                }
            })
        },
        a(i){
             this.$store.commit("getaddress",this.datas[i].name)
            this.$router.push({
                name:"addaddress",
               
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
    width: 3.75rem;
    height: 0.62rem;
    background-color: white;
    position: relative;
}
#inp1{
    width: 2.7rem;
    height: 0.4rem;
    border-radius: 0.05rem;
    margin-left: 0.13rem;
    margin-top: 0.1rem;
    background-color: rgb(242,242,242);
    font-size: 0.15rem;
    text-indent: 0.1rem;
}
#p1{
    width: 0.75rem;
    height: 0.4rem;
    background-color: rgb(49, 153, 232);
    border-radius: 0.05rem;
    font-size: 0.16rem;
    color: white;
    line-height: 0.4rem;
    text-align: center;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
}
#span1{
    display: inline-block;
    width: 3.75rem;
    height: 0.3rem;
    background-color: rgb(255,246,228);
    line-height: 0.3rem;
    text-align: center;
    color: rgb(255, 136, 63);
    font-size: 0.15rem;
}
#span2{
    position: absolute;
    top: 2.9rem;
    left: 1.35rem;
    font-size: 0.16rem;
    color: rgb(167, 167, 167)
}
#span3{
    position: absolute;
    top: 3.25rem;
    left: 0.65rem;
    font-size: 0.16rem;
    color: rgb(167, 167, 167)
}
#span4{
    position: absolute;
    top: 3.6rem;
    left: 0.5rem;
    font-size: 0.16rem;
    color: rgb(167, 167, 167)
}
#pp1{
    display: inline-block;
    width: 3.75rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: white;
    font-size: 0.16rem;
}
</style>
