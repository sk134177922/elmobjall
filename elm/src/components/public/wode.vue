<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span>我的</span>
            </div>
            <div id="topcenter">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"wode",
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
    height: 1.3rem;
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
#topone>span{
    position: absolute;
    top: 0.07rem;
    text-align: center;
    left: 0;
    width: 3.75rem;
    font-size: 0.21rem;
    color: white;
}
#topcenter{
    width: 3.75rem;
    background-color:rgb(49, 144, 232);
    height: 0.9rem;
}
</style>
