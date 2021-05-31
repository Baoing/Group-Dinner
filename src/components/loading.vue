<template>
  <div>
    <van-loading size="24px" vertical>加载中...</van-loading>
  </div>
</template>

<script>
import {Loading} from 'vant'
export default {
  components:{
    [Loading.name]: Loading
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

</style>