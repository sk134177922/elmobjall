<template>
    <div>
       <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">我的优惠</span>
            </div>
            </div>

             <div id="center">
                 <div id="text1">
        尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
    </div>
    <div id="text2">
        <p class="title">Q1: 特权介绍</p>
        <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
        <p>更多特权，敬请期待！</p>
    </div>
    <div id="text3">
         <p class="title">Q2: 资费介绍</p>
         <p>饿了么会员卡：20元</p>
    </div>
    <div id="text4">
         <p class="title">Q3: 使用说明</p>
         <p>当用户满足以下任一条件，会员服务自动失效：</p>
         <div id="content">
             <p>自绑定之日起超过31天；</p>
         <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
         </div>
    </div>
    <div id="text5">
         <p class="title">Q4: 购卡说明</p>
         <p>在线购买：饿了么App>我的>饿了么会员卡</p>
    </div>
    <div id="text6">
         <p class="title">Q5: 温馨提示</p>
         <p>用户在当前会员服务失效前，无法购买新卡。</p>
         <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
             </div>
    </div>
</template>
<script>
export default {
    name:"vipex",
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
#top{
    width: 3.75rem;
    height: 0.4rem;
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
#text1{
    margin-top: 0.1rem;
    /* border: 1px solid white; */
    width: 3rem;
    font-size: 0.15rem;
    margin-left: 0.375rem;
}
p{
    margin-top: 0.15rem;
}
.title{
    font-size: 0.18rem;
    font-weight: bold;
}
#text2,#text3,#text4,#text5,#text6{
    width: 3.55rem;
    /* border: 1px solid white; */
    margin-left: 0.1rem;
    font-size: 0.15rem;
    margin-top: 0.12rem;
}
#text2 p:nth-child(2),#text2 p:nth-child(3),#text2 p:nth-child(4){
    margin-top: 0.05rem;
}
#content{
    /* border: 1px solid red; */
     width: 3.1rem;
    /* border: 1px solid white; */
    margin-left: 0.54rem;
    font-size: 0.15rem;
    margin-top: 0.12rem;
}
#center{
    margin-top: -0.06rem;
    width: 3.75rem;
    height: 94vh;
    background-color: white;
}
</style>
