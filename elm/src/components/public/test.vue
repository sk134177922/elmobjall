<template>
    <div>
        <!-- <p>{{data}}</p> -->
        <p v-for="(v,i) in getq1" :key="i">{{v.name}}</p>
    </div>
</template>
<script>
export default {
    name:'test',
    data() {
        return {
            data:[]
        }
    },
    created() {
        this.getq();
    },
   methods: {
        getq(){
           this.data=this.$store.state.datasget;
        }
   },
   computed: {
       getq1(){
           return this.$store.state.datasget;
        }
   },
}
</script>