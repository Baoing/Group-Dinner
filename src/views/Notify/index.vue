<template>
  <div class="page">
    <nav-bar title="消息通知" />

    <div v-show="!notify || notify.length<1" class="default">
      <van-empty description="暂无消息 ~" />
    </div>

  </div>
</template>

<script>
import { Empty } from 'vant'
 export default {
  components: {
    [Empty.name]: Empty
  },
   data(){
     return {
       notify:[]
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