<template>
  <div>
    <nav-bar :title="'订单详情-'+ detail.status"/>

    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailHeader from './component/detail-header'
export default {
  data() {
    return {
      id: null,
      detail:{
        status: "商家备餐中",
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

</style>