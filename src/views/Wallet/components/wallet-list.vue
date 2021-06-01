<template>
  <div>
    <div v-if="!walletList || walletList.length<1">
      <van-empty description="暂无消费记录"></van-empty>
    </div>
  </div>
</template>
<script>
import { Empty} from 'vant'
export default {
  components: {
    [Empty.name]: Empty
  },
  props: {
    walletList: {
      type: Array
    }
  }
}
</script>