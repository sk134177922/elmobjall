<template>
    <div>
        <div id="top">
            <div id="topone">
                <img id="timg1" @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">购买记录</span>
            </div>
            </div>
            <img id="img1" src="../../assets/123.png" alt="">
            <p id="p1">没有购买记录</p>
    </div>
</template>
<script>
export default {
    name:"kaifapiao",
    methods: {
        back(){
            this.$router.go(-1);
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
#timg1 {
  width: 0.13rem;
  margin-top: 0.07rem;
  margin-left: 0.07rem;
}
#topspan {
  position: absolute;
  top: 0.1rem;
  left: 1.5rem;
  font-size: 0.18rem;
  color: white;
}
#img1{
    position: absolute;
    width: 1.2rem;
    top: 2rem;
    left: 1.3rem;
}
#p1{
     position: absolute;
    width: 1.2rem;
    top: 3.3rem;
    left: 1.5rem;
    font-size: 0.15rem;
    color: rgb(203, 203, 203);
}
</style>
