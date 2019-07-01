<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">红包说明</span>
            </div>
            </div>

 <div id="text">


      <p class="textone">Q1:怎么获得红包?</p>
      <div class="text1">
        <p>通过邀请好友获得</p>
        <p>在下单返红包的商家下单获得</p>
        <p>抢微信朋友分享的红包获得</p>
      </div>


      <p class="texttwo">Q2:红包可以做什么?</p>
      <div class="text2">
        <p>可以抵扣在线支付时的实际支付金额。</p>
      </div>

      <p class="textthree">Q3:红包的门槛金额按照什么金额计算?</p>
      <div class="text3">
        <p>红包的的门槛金额按照(选购菜品折后价+餐盒费)的金额作为计算门槛,即购物车显示的金额(7.3以上版本)。假设红包满30可用，只要选购的菜品现价(折后价) +餐盒费超过30,就可以使用红包。</p>
      </div>

      <p class="textfour">Q4:一个红包能拆开多次使用吗?</p>
      <div class="text4">
        <p>不能，一个红包只能一次性使用，不能分开使用。</p>
      </div>

      <p class="textfive">Q5:下单的时候使用了红包，但是后来订单取消
了，红包还会返还吗?</p>
      <div class="text5">
        <p>会的，订单无效后红包会自动返还到您的账户里。</p>
      </div>

      <p class="textsix">Q5:下单的时候使用了红包，但是后来订单取消
了，红包还会返还吗?</p>
      <div class="text6">
        <p>会的，订单无效后红包会自动返还到您的账户里。</p>
      </div>

      <p class="textseven">Q6:红包兑换码怎样兑换成红包，怎样查看红包? </p>
      <div class="text7">
        <p>在个人中心>我的红包>兑换红包，输入兑换码进行兑换。</p>
      </div>

      <p class="texteight">Q7:邀请好友了，为什么没获得红包?</p>
      <div class="text8">
        <p>先检查下您是否在同一设备上进行的邀请?或者被邀请人是否通过您发给对方的链接进行注册?而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
      </div>

      <p class="textnine">Q8:预订早餐、预订午餐的红包怎么使用?在哪里
查询? </p>
      <div class="text9">
        <p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用,并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
        <p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按:钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>
      </div>

      <p class="texten">Q9:互斥红包怎么使用?</p>
      <div class="text10">
        <p>互斥红包不与其他优惠活动(包含但不限于:新用户专享、满X元减X元、满X元赠XX)同时使用。</p>
      </div>

      <p class="texteleven">Q10:返红包活动，红包领取规则是什么?</p>
      <div class="text11">
        <p>同一个手机号-天限领取三个。同一注册用户一.天限领取三个。</p>
        <p>注册用户红包直接发送至用户账户里。</p>
        <p>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</p>
        <p>红包的使用周期为1周，自红包发放的第2天开始计算。同一个手机号-天最多使用两个红包。</p>
        <p>未收到红包短信的用户注意查看手机里的拦截短信。有任何问题请拨打客服电话: 10105757。</p>
      </div>
    </div>


    </div>
</template>
<script>
export default {
    name:"hongbaoexplain",
    methods: {
        back(){
            this.$router.go(-1)
        }
    },
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
  height: 19.5rem;
  background-color: white;
}
#text>p{
    padding: 0.1rem;
     line-height: 0.3rem;
}
.textone,.texttwo,.textthree,.textfour,.textfive,.textsix,.textseven,.texteight,.textnine,.textten,.texteleven{
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
.text4{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text5{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text6{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text7{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text8{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text9{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text10{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
.text11{
    padding: 0.1rem;
     line-height: 0.3rem;
  font-size: 0.15rem;
}
</style>
