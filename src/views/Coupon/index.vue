<template>
  <div class="page">
    <nav-bar title="优惠券" />

    <my-empty image="notCoupon" description="暂无优惠券 ~" />
  </div>
</template>

<script>
import MyEmpty from '@/components/empty'
 export default {
  components:{
    MyEmpty
  },
   data(){
     return {

     }
   },
   created() {

   },
   methods:{

   }
 }
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';


</style>