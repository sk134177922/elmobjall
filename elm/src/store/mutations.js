export default {
       getDatas(state,v){
           this.state.datasget=v;
       },
       getClickid(state,v){
           this.state.clickShopid=v;
       },
       getAllcontent(state,v){
           this.state.allContent=v;
       },
       getPrice(state,v){
            this.state.allPrice=v;
       },
       //从外卖页面把餐馆id传来
       getcanguanId(state,v){
           this.state.shopID=v;
       },
       //传输数据
       spspshuju(state,obj){
        if (state.obj.length > 0 && state.shopID == state.obj[0].foods[0].restaurant_id) {
            return;
          }
          state.obj = obj;
       },
       //点击+时执行
       getindex(state, obj) {//state是必须参数
        state.obj[obj.a].foods[obj.b].is_featured += 1;
        state.totalprice += state.obj[obj.a].foods[obj.b].specfoods[0].price;
      },
      //点击-时执行
      getdele(state, obj) {//state是必须参数
        state.obj[obj.a].foods[obj.b].is_featured -= 1;
        if (state.obj[obj.a].foods[obj.b].is_featured == 0) {
          state.obj[obj.a].foods[obj.b].is_featured = 0;
        };
        state.totalprice -= state.obj[obj.a].foods[obj.b].specfoods[0].price;
        if(state.totalprice==0){
          state.totalprice=0;
        }
      },
      //点击购物车时显示的加
      goujia(state,b){
        for(var i=0;i<state.obj.length;i++){
          for(var k=0;k<state.obj[i].foods.length;k++){
            if(state.obj[i].foods[k]._id==b){
              state.obj[i].foods[k].is_featured+=1;
              state.totalprice += state.obj[i].foods[k].specfoods[0].price;
            }
          }
        }
      },
      //点击购物车时显示的减
      goujian(state,c){
        for(var i=0;i<state.obj.length;i++){
          for(var k=0;k<state.obj[i].foods.length;k++){
            if(state.obj[i].foods[k]._id==c){
              state.obj[i].foods[k].is_featured-=1;
              state.totalprice -= state.obj[i].foods[k].specfoods[0].price;
            }
          }
        }
      },
      getgeohash(state,a){
        this.state.geohasha = a;
      },
      getxiabiao(state,a){
        this.state.xiabiaoId =a;
      },
      getjinweidu(state,v){
        this.state.jinweidu=v;
      },
      // 心彦部分
      getlogin(state,a){
        this.state.loginac = a;
      },
      getuserid(state,a){
        this.state.userid = a;
      },
      getlength(state,a){
        this.state.length = a;
      },
      getdetail(state,a){
          this.state.detail = a;
      },
      getgeohash(state,a){
        this.state.geohash = a;
      },
      getaddress(state,a){
          this.state.address = a;
      },
      getcityid(state,a){
          this.state.cityid = a;
      },
      // 修改登录标志
      xiugaidl(state,v){
        this.state.dl=v;
      },
      //长江修改
      getmingzi(state,v){
        this.state.mingzi=v;
      },
      dedaojindu(state,v){
        this.state.latitude=v.latitude;
      },
      dedaoweidu(state,v){
        this.state.longitude=v.longitude;
      }
}