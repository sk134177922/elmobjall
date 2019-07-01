<template>
    <div>
       <div id="top">
            <div id="topone" @click="back()">
                <img  src="../../assets/back.png" alt="">
                <span id="topspan">{{title}}</span>
            </div>
            </div>





            
            <div v-if="show">
                <img  id="img1" :src="data[0]">
       
                 <p>{{datas[0]}}</p>
          
             <img  id="img1" :src="data[1]">
            
                 <p>{{datas[1]}}</p>
                 
                <img  id="img1" :src="data[2]">
            
                 <p>{{datas[2]}}</p>

                 <img  id="img1" :src="data[3]">
            
                 <p>{{datas[3]}}</p>

                 <img  id="img1" :src="data[4]">
            
                 <p>{{datas[4]}}</p>

                 <img  id="img1" :src="data[5]">
            
                 <p>{{datas[5]}}</p>

            
            </div>
            <p v-if="show2">{{data}}</p>
           <img id="img2" :src="data" alt="">
    </div>
</template>
<script>
export default {
    name:"servicede",
    data(){
        return {
            title:"",
            data:"",
            datas:"",
            show:"",
            show2:true,
        }
    },
    created() {
        this.data = this.$route.query.data;
      this.title = this.$route.query.title;
      this.datas = this.$route.query.datas;
      this.show2 = this.$route.query.B;
      this.show = this.$route.query.A;
      console.log(this.show2);
      console.log(this.$route);
    },
    methods:{
        back(){
            this.$router.back();
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
    font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
p{
     /* margin-top: 0.55rem; */
  font-size: 0.25rem;

}
#img1{
    width: 3.75rem;
}
#img2{
    width: 3.75rem;
}
</style>
