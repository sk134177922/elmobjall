<template>
    <div>
        <h1>订单</h1>
        <div id="bottom_bottom">
            <router-link to="/waimai">
            <img :src="waimaisrc" alt="" >
            </router-link>
            <router-link to="/sousuo">
            <img :src="sousuosrc" alt="" >
            </router-link>
            <router-link to="/dd">
            <img :src="dingdansrc" alt="" >
            </router-link>
            <router-link to="/myself">
            <img :src="touxiangsrc" alt="" >
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'dingdan'
}
</script>
<style scoped>
/* 导航条 */
#bottom_bottom{
    width: 3.75rem;
    padding: 0.1rem 0;
    position:fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
}
#bottom_bottom img{
    width: 0.3rem;
}
</style>
