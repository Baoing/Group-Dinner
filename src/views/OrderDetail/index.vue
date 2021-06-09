<template>
  <div class="detail-page">
    <nav-bar :title="'订单详情-'+ detail.status"/>

    <detail-header :detail="detail"></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailHeader from './components/detail-header'
import DetailList from './components/detail-list'
export default {
  components:{
    DetailHeader,
    DetailList
  },
  data() {
    return {
      id: null,
      detail:{
        status: "商家备餐中",
        title: "爆炒牛肚套餐",
        pic: require("@/assets/images/good01.jpg"),
        desc:"辅荤+素菜+米饭",
        price: 25,
        shopName:"演示店铺",
        id: '002',
      }
    }
  },
  created() {
    this.id = this.$route.params.id
    console.log(this.id)

  }
}
</script>

<style scoped lang="scss">
.detail-page{
  height: 100vh;
  background: #F5F5F5;
}
</style>