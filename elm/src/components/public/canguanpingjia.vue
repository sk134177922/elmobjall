<template>
    <div>
        <div style="width:3.75rem;height:100vh;overflow-y:scroll">
        <div class="canguan_top">
            <div class="canguan_top_left">
                <p >{{zhonghe}}</p>
                <p>综合评价</p>
                <p>高于周边商家{{count1}}%</p>
            </div>
            <div class="canguan_top_right">
                <p>
                    服务态度
                    <el-rate
                    v-model="fuwufenshu"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                    </el-rate>
                </p>
                <p>
                    菜品评价
                     <el-rate v-model="caipingpingjia" disabled show-score text-color="#ff9900"
                    score-template="{value}">
                    </el-rate>
                </p>
                <p>
                    <span>送达时间</span>
                    {{data2.deliver_time}}
                    <span>分钟</span>
                </p>
            </div>
        </div>
        <div id="canguan_middle">
            <ul id="canguanInfor">
                <li :key="cani" v-for="(canv,cani) in data3" >{{canv.name}}({{canv.count}})</li>
                <!-- v-show="!canv.unsatisfied" -->
            </ul>
        </div>
        <div id="canguan_bottom">
            <ul>
                <li :key="d4i" v-for="(d4v,d4i) in data4" class="white">
                    <div class="cnaguan_bottom_left"><img src="../../assets/touxiang1.png" alt="" style="width:0.4rem;height:0.4rem"></div>
                    <div class="cnaguan_bottom_right">
                        <span class="inforUser">{{d4v.username}}</span>
                        <p class="inforDate">{{d4v.rated_at}}</p>
                        <p>
                        <el-rate v-model="d4v.rating_star" disabled show-score text-color="#ff9900"
                        score-template="{value}">
                        </el-rate>
                        <span v-show="d4v.time_spent_desc">{{d4v.time_spent_desc}}</span>
                        </p>
                        <p class="shiping">
                            <span  v-for="(tuV,tuI) in d4v.item_ratings" :key="tuI" class="oneSpan">{{tuV.food_name}}</span>
                        </p>
                    </div>

                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'canguanpingjia',
    data() {
        return {
            localId:'',
            data1:[],
            data2:{},
            data3:[],
            data4:[],
            count1:'',
            zhonghe:1,
            fuwufenshu:1,
            caipingpingjia:1,
            tidai:4,
            ratingstar:4,
            one:{
                

            },
            aa:{}
        }
    },
    created() {
        this.getTheid();
        // console.log(this.localId);
        this.getsome();
        this.getAllrat();
        this.getRatall();
        this.getxiangxi();
        this.test();
        
    },
    methods: {
         getAid(){
            this.aa=this.$store.state.allContent;
        },
        getTheid(){
        this.localId=this.$store.state.clickShopid;
        this.aa=this.$store.state.allContent;
        console.log(this.aa);
        },
        getsome(){
            this.getTheid();
            // const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.localId+'/ratings?offset=0&limit=10';
            const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.aa.id+'/ratings?offset=0&limit=10';
            // const api = 'https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10';
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.data1=res.data;
                console.log(this.data)
            })
        },
        getAllrat(){
            this.getTheid();
            
            // const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.localId+'/ratings/scores';
            const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.aa.id+'/ratings/scores';
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.data2=res.data;
                console.log(this.data2)
                this.count1=this.data2.compare_rating*100;
                this.count1=this.count1.toFixed(1);
                this.fuwufenshu=this.data2.service_score;
                this.fuwufenshu=parseFloat(this.fuwufenshu.toFixed(2));
                this.caipingpingjia=this.data2.food_score;
                this.caipingpingjia=parseFloat(this.caipingpingjia.toFixed(2));
                this.zhonghe=this.data2.overall_score;
                this.zhonghe=this.zhonghe.toFixed(1);
            })
        },
        getRatall(){
            this.getTheid();
            // const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.localId+'/ratings/tags';
            const api = 'https://elm.cangdu.org/ugc/v2/restaurants/'+this.aa.id+'/ratings/tags';
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.data3=res.data;
                console.log(this.data3)
            })
        },
        getxiangxi(){
            this.getTheid();
            // const api ='https://elm.cangdu.org/ugc/v2/restaurants/'+this.localId+'/ratings';
             const api ='https://elm.cangdu.org/ugc/v2/restaurants/'+this.aa.id+'/ratings';
            this.$http({
                url:api,
                method:'get'
            }).then(res=>{
                this.data4=res.data
                console.log(this.data4)
            })
        },
        test(){
            console.log(this.$store.state.arr2)
        }
    },
}
</script>
<style scoped>
    .canguan_top{
        width: 3.55rem;
        background-color: #fff;
        padding:0.1rem 0.1rem; 
        overflow: hidden;
        margin-bottom:0.1rem; 
    }
    .canguan_top_right,.canguan_top_left{
        float: left;
        width: 50%;
        background-color: #fff;
        /* display: inline-block; */
    }
    .canguan_top_left>p:nth-child(1){
        font-size: 0.35rem;
        color: #f60;
        text-align: center;
    }
    .canguan_top_left>p:nth-child(2){
        text-align: center;
        color: #666;
        margin-bottom:0.03rem; 
    }
    .canguan_top_left>p:nth-child(3){
        text-align: center;
        color: #999;
    }
    .canguan_top_right>p{
        color: #666;
    }
    #canguanInfor{
        padding: 0.05rem;
        width: 3.65rem;
        border-bottom:1px solid  #666;
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
    }
    #canguanInfor>li{
        font-size: 0.13rem;
        margin: 0 0.1rem 0.1rem 0;
        padding: 0.1rem;
        color: #6d7885;
        background-color: #ebf5ff;
        
    }
    .cnaguan_bottom_left,.cnaguan_bottom_right{
        display: inline-block;
    }
    .cnaguan_bottom_right{
        width: 80%;
    }
    .cnaguan_bottom_left>img{
        padding: 0.1rem;
    }
    .cnaguan_bottom_right{
        margin-top:0.1rem; 
    }
    .oneSpan{
        display: inline-block;
        width: 0.4rem;
        font-size: 0.16rem;
        height: 0.16rem;
        border: 1px solid #ebebeb;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-right:0.1rem; 
    }
    .white{
        background-color: #fff;
        color: #999;
        border-bottom: 1px solid #f1f1f1;
        width: 3.65rem;
        margin: 0 0.05rem;
        height: 1.5rem;
    }
    .inforDate{
        display: inline-block;
        /* padding-left:1rem; */
        width: 1rem; 
        font-size: 0.1rem;
        float: right;
    }
    .shiping{
        margin-top:0.2rem; 
    }
</style>
