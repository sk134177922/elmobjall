import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Allcity from '@/components/public/allcity'
import Allcity02 from '@/components/public/allcity02'
import Localcity from '@/components/public/localcity'
import Login from '@/components/public/login'
import Password from '@/components/public/password'
import Waimai from '@/components/public/waimai'
import Dht from '@/components/public/dht'
import Dingdan from '@/components/public/dingdan'
import Myself from '@/components/public/myself'
import Sousuo from '@/components/public/sousuo'
import Shopdetial from '@/components/public/shopdetial'
import Shangpingleft from '@/components/public/shangpingleft'
import Canguanpingjia from '@/components/public/canguanpingjia'
import Test from '@/components/public/test'
import Foods from '@/components/public/foods'
import ShangjiaAll from '@/components/public/shangjiaAll'
import FoodAnquan from '@/components/public/foodAnquan'
import test2 from '@/components/public/test2'
import test3 from '@/components/public/test3'
import test4 from '@/components/public/test4'
import test5 from '@/components/public/test5'
// 长江的部分配置
import shop from '@/components/public/shop'
import jlzj from '../components/L/jlzj'
import pfg from '../components/L/pfg'
import qjd from '../components/L/qjd'
import sdk from '../components/L/sdk'
import shdz from '../components/L/shdz'
import sList from '../components/L/sList'
import xlzg from '../components/L/xlzg'
import xzdz from '../components/L/xzdz'
import dd from '../components/L/dd'
//心彦的部分配置
import Success from '@/components/public/success'
import Myinfor from '@/components/public/myinfor'
import Changeuser from '@/components/public/changeuser'
import Changeaddress from '@/components/public/changeaddress'
import Jifen from '@/components/public/jifen'
import Vip from '@/components/public/vip'
import Server from '@/components/public/server'
import Download from '@/components/public/download'
import Servicede from '@/components/public/servicede'
import Discount from '@/components/public/discount'
import Shopdiscount from '@/components/public/shopdiscount'
import Explain from '@/components/public/explain'
import hongbaoexplain from '@/components/public/hongbaoexplain'
import Historyhongbao from '@/components/public/historyhongbao'
import Duihuan from '@/components/public/duihuan'
import Tuijian from '@/components/public/tuijian'
import Balance from '@/components/public/balance'
import Balanceex from '@/components/public/balanceex'
import Myjifen from '@/components/public/myjifen'
import Myjifenex from '@/components/public/myjifenex'
import Vipex from '@/components/public/vipex'
import Buyvip from '@/components/public/buyvip'
import Vipexchange from '@/components/public/vipexchange'
import Kaifapiao from '@/components/public/kaifapiao'
import Addaddress from '@/components/public/addaddress'
import Searchaddress from '@/components/public/searchaddress'
import testsou from '@/components/public/testsou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allcity',
      component: Allcity
    },
    {
      path: '/allcity',
      name: 'allcity',
      component: Allcity
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test4',
      name: 'test4',
      component: test4
    },
    {
      path: '/test5',
      name: 'test5',
      component: test5
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      redirect: "sList",
      children: [
        {
          path: '/sList',
          name: 'sList',
          component: sList
        },
        {
          path: '/jlzj',
          name: 'jlzj',
          component: jlzj
        },
        {
          path: '/xlzg',
          name: 'xlzg',
          component: xlzg
        },
        {
          path: '/qjd',
          name: 'qjd',
          component: qjd
        },
        {
          path: '/sdk',
          name: 'sdk',
          component: sdk
        },
        {
          path: '/pfg',
          name: 'pfg',
          component: pfg
        }
      ]

    },
    {
      path: '/allcity02',
      name: 'allcity02',
      component: Allcity02
    },
    {
      path: '/localcity',
      name: 'localcity',
      component: Localcity
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/password',
      name: 'password',
      component: Password
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods
    },
    {
      path: '/shangjiaAll',
      name: 'shangjiaAll',
      component: ShangjiaAll
    },
    {
      path: '/foodAnquan',
      name: 'foodAnquan',
      component: FoodAnquan
    },
    {
      path: '/shopdetial',
      name: 'shopdetial',
      component: Shopdetial,
      redirect:'/shangpingleft',
      children:[{
          path: '/shangpingleft',
          name: 'shangpingleft',
          component: Shangpingleft
      },
      {
        path:'/canguanpingjia',
        name:'canguanpingjia',
        component:Canguanpingjia
      }]
    },
    {
      path: '/dht',
      name: 'dht',
      component: Dht,
      redirect:'/myself',
      children:[
        {
          path: '/waimai',
          name: 'waimai',
          component: Waimai
        },
        {
          path: '/dingdan',
          name: 'dingdan',
          component: Dingdan
        },
        {
          path: '/dd',
          name: 'dd',
          component: dd
        },
        {
          path: '/shdz',
          name: 'shdz',
          component: shdz
        },
        {
          path: '/myself',
          name: 'myself',
          component: Myself
        },
        {
          path: '/sousuo',
          name: 'sousuo',
          component: Sousuo
        },
        {
          path: '/testsou',
          name: 'testsou',
          component: testsou
        }
      ]
    },
    // 心彦部分
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/myinfor',
      name: 'myinfor',
      component: Myinfor
    },
    {
      path: '/changeuser',
      name: 'changeuser',
      component:Changeuser
    },
    {
      path: '/changeaddress',
      name: 'changeaddress',
      component:Changeaddress
    },
    {
      path: '/jifen',
      name: 'jifen',
      component:Jifen
    },
    {
      path: '/vip',
      name: 'vip',
      component:Vip
    },
    {
      path: '/vipexchange',
      name: 'vipexchange',
      component:Vipexchange
    },
    {
      path: '/vipex',
      name: 'vipex',
      component:Vipex
    },
    {
      path: '/buyvip',
      name: 'buyvip',
      component:Buyvip
    },
    {
      path: '/server',
      name: 'server',
      component:Server
    },
    {
      path: '/download',
      name: 'download',
      component:Download
    },
    {
      path: '/servicede',
      name: 'servicede',
      component:Servicede
    },
    {
      path: '/discount',
      name: 'discount',
      component:Discount
    },
    {
      path: '/shopdiscount',
      name: 'shopdiscount',
      component:Shopdiscount
    },
    {
      path: '/explain',
      name: 'explain',
      component:Explain
    },
    {
      path: '/hongbaoexplain',
      name: 'hongbaoexplain',
      component:hongbaoexplain
    },
    {
      path: '/historyhongbao',
      name: 'historyhongbao',
      component:Historyhongbao
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component:Duihuan
    },
    {
      path: '/tuijian',
      name: 'tuijian',
      component:Tuijian
    },
    {
      path: '/balance',
      name: 'balance',
      component:Balance
    },
    {
      path: '/balanceex',
      name: 'balanceex',
      component:Balanceex
    },
    {
      path: '/myjifen',
      name: 'myjifen',
      component:Myjifen
    },
    {
      path: '/myjifenex',
      name: 'myjifenex',
      component:Myjifenex
    },
    {
      path: '/kaifapiao',
      name: 'kaifapiao',
      component:Kaifapiao
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component:Addaddress
    },
    {
      path: '/searchaddress',
      name: 'searchaddress',
      component:Searchaddress
    },
  ]
})
