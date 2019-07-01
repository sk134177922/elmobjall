<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">历史红包</span>
            </div>
            </div>

            <div id="hongbao" :key="i" v-for="(v,i) in datas">
                <div id="hongbaoleft">
                     <span id="left1">￥</span>
                     <span id="left2">{{v.amount.toFixed(1)}}</span>
                     <span id="left3">{{v.description_map.sum_condition}}</span>
                </div>
                <div id="hongbao6">
                   
                </div>
                <div id="hongbaoright">
                    <span id="right1"><img src="../../assets/guoqi.png" alt=""></span>
                    <span id="right2">{{v.name}}</span>
                    <span id="right3">{{v.description_map.validity_periods}}</span>
                    <span id="right4">{{v.description_map.phone}}</span>
                    
                </div>
               
               <span v-if="v.limit_map" id="bottom">
                   <span>{{v.limit_map.restaurant_flavor_ids}}</span>
               </span>
                
        
            </div>
    </div>
</template>
<script>
export default {
    name:"historyhongbao",
    data(){
        return{
            datas:"",
        }
    },
    created() {
        this.getdata();
    },
    methods: {
        back(){
            this.$router.go(-1)
        },
        getdata(){
            const api = "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
            this.$http({
                url:api,
                methods:"get",
            }).then(res=>{
                console.log(res);
                this.datas = res.data;
            })
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
    top: 0.12rem;
    text-align: center;
    left: 1.5rem;
    font-size: 0.18rem;
    color: white;
}
#hongbao{
    width: 3.35rem;
    margin-left: 0.2rem;
    height: 1rem;
    border-top: 2px solid rgb(204, 204, 204);
    background-color: #fff;
    display: flex;
    border-radius: 0.05rem;
    margin-top: 0.4rem;
    position: relative;
}
#hongbaoleft{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: relative;
}
#hongbaoright{
    width: 2.3rem;
     height: 1rem;
     position: relative;
}
#left1{
    position: absolute;
    top: 0.5rem;
    left: 0.13rem;
    color: rgb(204, 204, 204);
    font-size: 0.18rem;
}
#left2{
    position: absolute;
    font-size: 0.35rem;
    top: 0.35rem;
    left: 0.3rem;
    color: rgb(204, 204, 204);
}
#left3{
    position: absolute;
    font-size: 0.12rem;
    top: 0.73rem;
    left: 0.22rem;
    color: rgb(197, 197, 197);
}
#right1{
    position: absolute;
    top: 0.03rem;
    font-size: 0.19rem;
    right: 0rem;
    color: rgb(204, 204, 204)d;
}
#right2{
    position: absolute;
    top: 0.25rem;
    left: 0.17rem;
    font-size: 0.16rem;
    color: rgb(102, 102, 102);
}
#right3{
    position: absolute;
    top: 0.5rem;
    left: 0.18rem;
    font-size: 0.12rem;
    color: rgb(197, 197, 197);
}
#right4{
     position: absolute;
    top: 0.69rem;
    left: 0.18rem;
    font-size: 0.12rem;
    color: rgb(197, 197, 197);
}
#hongbao6{
    position: absolute;
    top: 0.25rem;
    left: 1rem;
    height: 0.6rem;
    border: 1px dashed rgb(237, 237, 237);
}
#right1>img{
    width: 0.7rem;
}

#bottom{
    display: inline-block;
    height: 0.3rem;
    background-color: rgb(249, 249, 249);
    width: 3.35rem;
    position: absolute;
    top: 1rem;
    left: 0rem;
    font-size: 0.12rem;
    line-height: 0.2rem;
    color:rgb(153, 153, 153);
    border-bottom-left-radius: 0.06rem;
    border-bottom-right-radius: 0.06rem;
}
#bottom>span{
    height: 0.3rem;
    line-height: 0.3rem;
    margin-left: 0.15rem;
    font-size: 0.12rem;
}
</style>
