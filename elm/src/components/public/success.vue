<template>
    <div>
       <div id="top">
           <a id="head_left" href="javascript:location.reload()">ele.me</a>
           <span><router-link :to="{name:'myself'}"><img src="../../assets/wd1.png" alt=""></router-link></span>
       </div>
      <div id="topcenter">
          <span id="word">当前定位城市 :</span>
          <span id="rightword">定位不准时,请在城市列表中选择</span>
      </div>
      <div id="topbottom">
           <span id="city"><router-link :to="'/search?cityId=' + Name.id+'&cityName='+Name.name">{{Name.name}}</router-link></span>
            <span id="tubiao">></span>
      </div>
      <div id="center">
          <span id="hotcity">热门城市</span>
          
          <div id="centercity">
              
              <p :key="i" v-for="(v,i) in hotCity"><router-link :to="'/search?cityId=' + v.id+'&cityName='+v.name">{{v.name}}</router-link></p>
          </div>
         
      </div>
      <div id="AllCity">
          
          <ul id="ul1">
              <li :key="key" v-for="(value,key) in Allcity">
                  <p id="p1">123</p>
                <h3>
                    {{key}}
                        <span v-if="key=='A'">(按字母排序)</span>
                </h3>
            <ul>
                
                <li id="li1" :key="i" v-for="(v,i) in value"><router-link :to="'/search?cityId=' + v.id+'&cityName='+v.name">{{v.name}} </router-link></li>
               
                </ul>
            </li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    name:"success",
    data() {
        return {
            // show:false,
            Name:"",
            Allcity:{},
            hotCity:[],
        }
    },
    created() {
        this.getaddress();
        this.getAllcity();
        this.HotCity();
    },
    methods:{
        getaddress(){
            const api = "https://elm.cangdu.org/v1/cities?type=guess";
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.Name=res.data;
            })
        },
        getAllcity() {
            const api = "https://elm.cangdu.org/v1/cities?type=group";
            this.$http({
                url: api,
                method: "get"
            }).then(res => {
            console.log(res);
            var arr = [];
            for (const key in res.data) {
                arr.push(key);
            }
            arr.sort();
                console.log(arr);
            for (var i = 0; i < arr.length; i++) {
            // this.groupCities[arr[i]] = res.data[arr[i]];
            this.$set(this.Allcity, arr[i], res.data[arr[i]]);
                console.log(this.Allcity);
            }
            // this.groupCities = res.data;
            // var arr = [];
            // if(res.data.message){
            //     alert(res.data.message);
            // }else{
            //     this.$router.push({
            //         name:"search",
            //         query:arr,
            //     })
                
            // }
            });
            },
        HotCity(){
            const api = "https://elm.cangdu.org/v1/cities?type=hot";
            this.$http({
                url:api,
                methods:"get"
            }).then(res=>{
                this.hotCity=res.data;
                // this.show = true;
                
            })
        }
    },
}
</script>
<style scoped>
#p1{
    width: 3.75rem;
    background-color: rgb(245,245,245);
    color: transparent;
}
#centercity{
    position: absolute;
    width: 3.75rem;
    /* border: 1px solid blue; */
    top: 0.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center
}
#centercity>p{
    font-size: 0.16rem;
    box-sizing: border-box;
    float: left;
    border: 1px solid black;
    width: 25%;
    text-align: center;
    height: 0.32rem;
    line-height: 0.32rem;
    color: blue;
}
#top{
    display: inline-block;
    background-color: rgb(49,144,232);
    width: 3.75rem;
    height: 0.5rem;
    position: relative;
}
#top>a{
    font-size: 0.16rem;
    color: white;
    position: absolute;
    top: 0.17rem;
    left: 1vw;
}
#top>span:nth-child(2){
    font-size: 0.16rem;
    /* color: white; */
    position: absolute;
    right: 0.13rem;
    top: 0.12rem;
}
#topcenter{
    width: 3.75rem;
    height: 0.5rem;
    background-color: white;
    position: relative;
}
#word{
  display: inline-block;
  line-height: 0.5rem;
  font-size: 0.1rem;
  margin-left: 1.5vw;
}
#rightword{
  display: inline-block;
  line-height: 0.5rem;
  font-size: 0.16rem;
  position: absolute;
  right: 1vw;
  color:lightgray;
}
#topbottom{
    width: 3.75rem;
    height: 0.5rem;
    background-color: white;
    position: relative;
    border: 1px solid rgb(235,235,235);
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
}
#city{
    display: inline-block;
    font-size: 0.16rem;
    position: absolute;
    left: 0.1rem;
    top: 0.17rem;
    color: rgb(35,16,242);
}
#tubiao{
    display: inline-block;
    position: absolute;
    right: 0.12rem;
    top: 0.13rem;
    font-size: 0.25rem;
    color: lightgray;
}
#center{
    width: 3.75rem;
    height: 1rem;
    background-color: white;
    position: relative;
    top: 0.15rem;
}
#hotcity{
    font-size: 0.12rem;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem
}
#AllCity{
    margin-top: 0.15rem;
     background-color: white;
     position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center
}
 #ul1{
    width: 3.75rem;
    display: flex;
    flex-direction:column;

}
#li1{
    line-height: 0.35rem;
    height: 0.35rem;
     display: inline-block; 
     border: 1px solid black; 
     float: left; 
     width: 0.933rem;
     overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
   box-sizing: border-box;

   font-size: 0.16rem;
} 


</style>
