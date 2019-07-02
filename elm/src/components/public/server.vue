<template>
    <div>
        <div id="top">
            <div id="topone">
                <img @click="back()" src="../../assets/back.png" alt="">
                <span id="topspan">服务中心</span>
            </div>
            </div>

            <div id="center">
               <div id="centerleft">
                 <p id="cp1">在线客服</p>
                    <img @click="sure1()" id="cimg1" src="../../assets/kefu.png" alt="">
               </div>
                
                <div id="centerright">
                   <a href="tel:13566119956">
                        <p id="cp2">在线客服</p>
                    <img id="cimg2" src="../../assets/dianhua.png" alt="">
                   </a>
                </div>

            </div>

            <div id="problem">
                <p>热门问题</p>
            </div>

            <div @click="servicede1()" id="rule">
                <p id="rulep">{{explain.supervipCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>
            
            <div @click="servicede2()" id="rule">
                <p id="rulep">{{explain.signCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede3()" id="rule">
                <p id="rulep">{{explain.rankCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede4()" id="rule">
                <p id="rulep">{{explain.pointtextCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede5()" id="rule">
                <p id="rulep">{{explain.phototutorialCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede6()" id="rule">
                <p id="rulep">{{explain.paymentCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede7()" id="rule">
                <p id="rulep">{{explain.otherCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede8()"  id="rule">
                <p id="rulep">{{explain.ontimeCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede9()" id="rule">
                <p id="rulep">{{explain.memberTimesCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <!-- <div id="rule">
                <p id="rulep">{{explain.memberPartCutCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div> -->
            
            <!-- <div id="rule">
                <p id="rulep">{{explain.memberFullCutCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div> -->

            <!-- <div id="rule">
                <p id="rulep">{{explain.memberCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div> -->

             <div @click="servicede10()" id="rule">
                <p id="rulep">{{explain.hongbaoCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede11()" id="rule">
                <p id="rulep">{{explain.freshmanCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede12()" id="rule">
                <p id="rulep">{{explain.forgotCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede13()" id="rule">
                <p id="rulep">{{explain.discountCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede14()" id="rule">
                <p id="rulep">{{explain.disclaimerCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede15()" id="rule">
                <p id="rulep">{{explain.couponCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

             <div @click="servicede16()" id="rule">
                <p id="rulep">{{explain.businessCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede17()" id="rule">
                <p id="rulep">{{explain.balanceCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede18()" id="rule">
                <p id="rulep">{{explain.awesomeRestaurantCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede19()" id="rule">
                <p id="rulep">{{explain.anonymousBuyCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div @click="servicede20()" id="rule">
                <p id="rulep">{{explain.activityCaption}}</p>
                <img id="rimg1" src="../../assets/right.png" alt="">
            </div>

            <div class="animated heartBeat 2s" v-if="show1" id="div1">
                <img id="divimg" src="../../assets/未标题-1.png" alt="">
                <span id="divspan">请在手机APP中设置</span>
                <span @click="sure22()" id="divspan1">确认</span>
            </div>
    </div>
</template>
<script>
export default {
    name:"server",
    data(){
        return {
         explain:"",
         show1:false,
        }
    },
    created() {
        this.getproblem();
    },
    methods:{
        sure1(){
            this.show1 = true
        },
        sure22(){
            this.show1 = false
        },
        back(){
            this.$router.go(-1);
        },
        getproblem(){
            const api = "https://elm.cangdu.org/v3/profile/explain";
            this.$http({
                 url:api,
                method:"get",
            }).then(res=>{
                this.explain=res.data;
                
            })
        },
        servicede1(){
            var a = false;
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.supervipContent,
                A:a,
                 B:b,
                    title:this.explain.supervipCaption},
            })
        },
        servicede2(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.signContent,
                 B:b,
                    title:this.explain.signCaption},
            })
        },
        servicede3(){
            var b = true;
            this.$router.push({
                name:"servicede",
                 query:{data:this.explain.rankContent,
                  B:b,
                    title:this.explain.rankCaption},
            })
        },
        servicede4(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.pointtextContent,
                 B:b,
                    title:this.explain.pointtextCaption},
            })
        },
        servicede5(){
            var a = 1;
            var b = false;
            var str = this.explain.phototutorialContent;
            var arr = [];
            var reg1 = /\([^\)]+\)/g;
            str.replace(reg1, function(s,value) {
//          alert(value); // value 就是 123456
            var s2 = s.substring(1,s.length-1);
            arr.push(s2);//所有图片的路径
       })
       var str2 = this.explain.phototutorialContent;
       var arr2 = [];
    var reg2 = /#{2}[^\<]+(。|~)/g;
    str.replace(reg2, function(s,value) {
//  console.log(s);
//  console.log(value);
    var s3 = s.substring(2,s.length-2);
    console.log(s3);
    
    arr2.push(s3);//所有图片的路径
    
    
       })
            this.$router.push({
                name:"servicede",              
                query:{data:arr,
                    datas:arr2,
                    A:a,
                    B:b,
                    title:this.explain.phototutorialCaption},
            })
            console.log(this.explain.phototutorialContent);
             
        },
        servicede6(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.paymentContent,
                 B:b,
                    title:this.explain.paymentCaption},
            })
        },
        servicede7(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.otherContent,
                 B:b,
                    title:this.explain.otherCaption},
            })
        },
        servicede8(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.ontimeContent,
                 B:b,
                    title:this.explain.ontimeCaption},
            })
        },
        servicede9(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.memberTimesContent,
                 B:b,
                    title:this.explain.memberTimesCaption},
            })
        },
        servicede10(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.hongbaoContent,
                 B:b,
                    title:this.explain.hongbaoCaption},
            })
        },
        servicede11(){
            var b = true;
            this.$router.push({
                name:"servicede",
                 query:{data:this.explain.freshmanContent,
                 B:b,
                    title:this.explain.freshmanCaption},
            })
        },
        servicede12(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.forgotContent,
                 B:b,
                    title:this.explain.forgotCaption},
            })
        },
        servicede13(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.discountContent,
                 B:b,
                    title:this.explain.discountCaption},
            })
        },
        servicede14(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.disclaimerContent,
                 B:b,
                    title:this.explain.disclaimerCaption},
            })
        },
        servicede15(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.couponContent,
                 B:b,
                    title:this.explain.couponCaption},
            })
        },
        servicede16(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.businessContent,
                 B:b,
                    title:this.explain.businessCaption},
            })
        },
        servicede17(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.balanceContent,
                 B:b,
                    title:this.explain.balanceCaption},
            })
        },
        servicede18(){
            var b = true;
            this.$router.push({
                name:"servicede",
                 query:{data:this.explain.awesomeRestaurantContent,
                 B:b,
                    title:this.explain.awesomeRestaurantCaption},
            })
        },
        servicede19(){
            var str = this.explain.anonymousBuyContent;
//  var arr = [];
    var arr = "";
    var reg1 = /\([^\)]+\)/g;
    str.replace(reg1, function(s,value) {
//  console.log(s);
//  console.log(value);
    var s2 = s.substring(1,s.length-1);
    console.log(s2);
    
//  arr.push(s2);//所有图片的路径
    arr = s2;
    
       })
            
            var b = false;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.anonymousBuyContent,
                 B:b,
                 data:arr,
                    title:this.explain.anonymousBuyCaption},
            })
        },
        servicede20(){
            var b = true;
            this.$router.push({
                name:"servicede",
                query:{data:this.explain.activityContent,
                 B:b,
                    title:this.explain.activityCaption},
            })
        },
    }
}
</script>
<style scoped>
#top{
    width: 3.75rem;
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
#center{
    width: 3.75rem;
    height: 1.1rem;
    background-color: white;
    border-bottom: 1px solid rgb(243, 243, 243);
    display: flex;
}
#centerleft{
    width: 1.87rem;
    height: 1.1rem;
    border-right: 1px solid rgb(243, 243, 243);
    position:relative;
}
#cp1{
    display: inline-block;
    width: 1rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    /* background-color:red; */
    position: absolute;
    top: 0.6rem;
    color: lightgray;
    left: 0.4rem;
}
#cimg1{
    position: absolute;
    top: 0.2rem;
    left: 0.75rem;
    width: 0.35rem;
}
#centerright{
    width: 1.87rem;
    height: 1.1rem;
    position:relative;
}
#cp2{
    display: inline-block;
    width: 1rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    /* background-color:red; */
    position: absolute;
    top: 0.6rem;
    color: lightgray;
    left: 0.4rem;
}
#cimg2{
    position: absolute;
    top: 0.2rem;
    left: 0.75rem;
    width: 0.35rem;
}
#problem{
    width: 3.75rem;
    line-height: 0.7rem;
    height: 0.7rem;
    background-color:white;
}
#problem>p{
    margin-left: 0.15rem;
    font-size: 0.2rem;
}
#rule{
    width: 3.75rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: white;
    position: relative;
}
#rulep{
    display: inline-block;
    /* width: 3.75rem; */
    height: 0.5rem;
    /* background-color: white; */
    margin-left: 0.1rem;
    /* line-height: 0.3rem; */
    border-bottom: 1px solid rgb(243, 243, 243)
}
#rimg1{
    position: absolute;
    top: 0.2rem;
    right: 0.1rem;

}
#div1{
    position: absolute;
    top: 1.7rem;
    left: 0.45rem;
    width: 2.8rem;
    height: 1.7rem;
    background-color: white;
     border-top-right-radius: 0.05rem;
    border-top-left-radius: 0.05rem;
}
#divimg{
    width: 0.8rem;
    position: absolute;
    top: 0.08rem;
    left: 1rem;
}
#divspan{
    display: inline-block;
    width: 2.5rem;
    position: absolute;
    top: 1rem;
    left: 0.69rem;
    font-size: 0.16rem;
}
#divspan1{
    display: inline-block;
    background-color: rgb(79, 217, 100);
    color: white;
    font-size: 0.18rem;
    line-height: 0.45rem;
    width: 2.8rem;
    position: absolute;
    top: 1.5rem;
    height: 0.45rem;
    text-align: center;
    border-bottom-right-radius: 0.05rem;
    border-bottom-left-radius: 0.05rem;
}
</style>
