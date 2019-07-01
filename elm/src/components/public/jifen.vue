<template>
    <div>
        <img @click="back()" id="img" src="../../assets/back.png" alt="">
        <h1 id="h11">请重新进入</h1>
        <p id="p1">请返回后重新进入积分商城~</p>
        <img id="img1" src="../../assets/retrylogin[1].png" alt="">
    </div>
</template>
<script>
export default {
    name:"jifen",
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
#h11{
    margin-top: 1.3rem;
    margin-left: 1.1rem;
    color: rgb(49, 144,232);
}
#p1{
    margin-top: 0.25rem;
    margin-left: 0.9rem;
}
#img1{
    margin-top: 0.25rem;
    width: 2rem;
    margin-left: 0.8rem;
}
#img{
    margin-top: 0.25rem;
    margin-left: 0.15rem;
    height: 0.3rem;
}
</style>
