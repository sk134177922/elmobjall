<template>
    <div>
       <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">积分问题</span>
                </div>
                </div>

                <div id="conent">
        <p>Q1: 怎么获得积分</p>
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
        <p>Q2: 积分用来做什么？</p>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        <p>Q3:礼品兑换很多天还没有收到，该怎么办？</p>
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
        <p>Q4:充值前会和我电话确认吗？</p>
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"myjifenex",
    methods:{
        back(){
            this.$router.go(-1)
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
#conent{
  width: 3.73rem;
  height: 94vh;
  background-color: white;
}
#conent p:nth-child(1){
    font-size: 0.18rem;
}
#conent p:nth-child(2){
    margin-top: 0.15rem;
    font-size: 0.15rem;
}
#conent p:nth-child(3){
     margin-top: 0.15rem;
    font-size: 0.18rem;
}
#conent p:nth-child(4){
    margin-top: 0.15rem;
    font-size: 0.15rem;
}
#conent p:nth-child(5){
     margin-top: 0.15rem;
    font-size: 0.18rem;
}
#conent p:nth-child(6){
    margin-top: 0.15rem;
    font-size: 0.15rem;
    /* padding: 0.01rem; */
}
#conent p:nth-child(7){
     margin-top: 0.15rem;
    font-size: 0.18rem;
}
#conent p:nth-child(8){
    margin-top: 0.15rem;
    font-size: 0.16rem;
}
</style>
