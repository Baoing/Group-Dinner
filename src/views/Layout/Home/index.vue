<template>
  <div class='home-container'>
    <home-header />
    <date-list @changeFullTime="changeFullTime"/>
    <order-list :userDate="fullTime"/>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import DateList from './components/date-list'
import OrderList from './components/order-list'

export default {
  components: {
    HomeHeader,
    DateList,
    OrderList
  },
  data(){
    return {
      userDate: '',
      fullTime: ''
    }
  },
  methods:{
    changeFullTime(fullTime){
      this.fullTime = fullTime
    }
  }
}
</script>
<style lang="scss" scoped>
.home-container{
  background: #fff;
  height: 100%;
}
</style>