<template>
    <div>
       <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">余额问题</span>
            </div>
            </div>

                <div id="conent">
        <h3>Q1: 使用余额的条件</h3>
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
        <h3>Q2: 余额可以怎么用？</h3>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        <h3>Q3:我要如何提现？</h3>
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
        <h3>Q4:为什么会提现失败？</h3>
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"balanceex",
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
#conent{
    width: 3.75rem;
    height: 96vh;
    background-color: white;
}
 h3 {
  font-weight: 400;
  font-size: 0.16rem;
}
#conent p {
    line-height: 0.3rem;
  margin-left: 0.08rem;
  font-size: 0.14rem;
  color: #666;
  margin-right: 0.08rem;
  margin-top: 0.01rem;
  margin-bottom: 0.01rem;
}

</style>
