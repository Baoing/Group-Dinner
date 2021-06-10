<template>
  <div class="page">
    <nav-bar title="餐补" />
    <subsidy-header></subsidy-header>
    <van-notice-bar text="消费记录" class="notice"/>

    <subsidy-item
      v-for="item of subsidyList"
      :item-info="item"
      :key="item.id"
    />
  </div>
</template>

<script>
import SubsidyHeader from './components/subsidy-header'
import SubsidyItem from './components/subsidy-item'
import {NoticeBar} from 'vant'

 export default {
  components:{
    SubsidyHeader,
    [NoticeBar.name]:NoticeBar,
    SubsidyItem
  },
   data(){
     return {
       subsidyList:[
         {id:1,date:'2021-06-07',week:'周二',info:'清零',balance:0},
         {id:2,date:'2021-06-06',week:'周二',status:'0',subtract: -25,balance:99923},
         {id:3,date:'2021-06-05',week:'周二',status:'0',subtract: -18,balance:99948},
         {id:4,date:'2021-06-04',week:'周二',status:'0',subtract: -18,balance:99966},
         {id:5,date:'2021-06-03',week:'周二',status:'0',subtract: -15,balance:99984},
         {id:6,date:'2021-06-01',week:'周二',info:'发放下月餐补',subtract: 99999,balance:99999}
       ]
     }
   },
   created() {

   },
   methods:{

   }
 }
</script>

<style lang="scss" scoped>

</style>