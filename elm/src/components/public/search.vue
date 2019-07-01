<template>
    <div>
        <div id="top">
            <img @click="back()" id="img1" src="../../assets/back.png" alt="">
            <p id="LocCity">{{hotcity}}</p>
            <span @click="back()" id="city">切换城市</span>
        </div>
        <div id="center">
            <input v-model="search" placeholder="输入学校、商务楼、地址" id="inp" type="text">
            <p @click="searchAddress()" id="submit">提交</p>
        </div>
        <div id="searchhistory">
           搜索历史
           <p @click="address(i)" :key="i" v-for="(v,i) in arr">{{v.name}}</p>
           <!-- <p :key="i" v-for="(v,i) in arr">{{v.address}}</p> -->
        </div>
    </div>
</template>
<script>
export default {
    
    name:"search",
    data(){
        return {
        hotcity:"",
        search:"",
        Cid:"",
        arr:{}
        }
    },
    created(){
        this.searchAddress();
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        searchAddress(){
            const api = "https://elm.cangdu.org/v1/pois?city_id="+this.Cid+"&keyword="+this.search+"&type=search";
            this.$http({
                url:api,
                method:"get"
            }).then(res=>{
                this.arr=res.data;
                console.log(res.data);
                
            })
        },
        address(i){
            this.$store.commit("getgeohash",this.arr[i].geohash);
            console.log(this.arr[i].geohash)
            this.$router.push({
                name:"login"
            })
        }
    },
    created(){
          this.datas=this.$route.query;
          this.hotcity = this.$route.query.cityName;
          this.Cid = this.$route.query.cityId;
          console.log(this.$route.query.cityName);
          console.log(this.$route.query);
          this.$store.commit("getcityid",this.$route.query.cityId);
    }
}
</script>
<style scoped>
#top{
    width: 3.75rem;
    height: 0.5rem;
    background-color:rgb(49,144,232);
    position: relative;
}
#img1{
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    width: 0.12rem;
}
#city{
    position: absolute;
    color: white;
    font-size: 0.16rem;;
    top: 0.16rem;
    right: 0.1rem;
}
#center{
    margin-top: 0.15rem;
    width: 3.75rem;
    height: 1rem;
    background-color:white;
    position: relative;
}
#inp{
    position: absolute;
    top: 0.12rem;
    width: 3.2rem;
    height: 0.3rem;
    left: 0.26rem;
    border: 1px solid rgb(245, 245, 245);
    border-radius: 3px;
    font-size: 0.16rem;
}
#submit{
    border: 1px solid rgb(49,144,232);
    background-color: rgb(49,144,232);
    text-align: center;
    color: white;
    width: 3.2rem;
    height: 0.3rem;
    position: absolute;
    bottom: 0.1rem;
    border-radius: 3px;
    line-height: 0.3rem;
    left: 0.26rem;
}
#searchhistory{
    /* margin: 0.1rem; */
    border: 1px solid rgb(240, 240, 240);
    font-size: 0.16rem;
}
#LocCity{
    height: 0.5rem;
    line-height: 0.5rem;
    width: 3.75rem;
    text-align: center;
    color: white;
    font-size: 0.18rem;
}
#searchhistory>p{
    width: 3.75rem;
    height: 0.5rem;
    border-top: 1px solid black;
    line-height: 0.5rem;
     border-bottom: 1px solid black;
     background-color: white;
}
</style>
