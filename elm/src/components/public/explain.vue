<template>
    <div>
       <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">代金劵说明</span>
            </div>
            </div>
            <div id="text">
        <p class="textone">Q1:什么是商家代金券?</p>
        <div class="text1">
            <p>商家代金券是指由商家自己发放代金券，,只限在指定的商家使用，可根据条件抵扣相应金额。</p>
        </div>

        <p class="texttwo">Q2:怎么获得商家代金券?</p>
        <div class="text2">
            <p>进入有「进店领券」或[下单返券」标示的商家即有机会获得代金券。</p>
            <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
        </div>

        <p class="textthree">Q3:商家代金券使用条件</p>
        <div class="text3">
            <p>商家代金券仅限在指定商家使用</p>
            <p>商家代金券仅限在线支付使用</p>
            <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
        </div>

    </div>
    </div>
</template>
<script>
export default {
    name:"explain",
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
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
#text{
  width: 3.75rem;
  height: 93.8vh;
  background-color: white;
}
#text>p{
    padding: 0.1rem;
     line-height: 0.3rem;
}
.textone,.texttwo,.textthree{
    padding: 0.1rem;
    font-size: 0.18rem;
}
.text1{
    padding: 0.1rem;
    line-height: 0.3rem;
  font-size: 0.15rem;
}
.text2{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text3{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
</style>
