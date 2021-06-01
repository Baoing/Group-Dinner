<template>
  <div class='order-page'>
    <order-header :status="status" @ChangeStatus="ChangeStatus"></order-header>
    <order-list :status="status" class="order-list"></order-list>
  </div>
</template>

<script>
import OrderHeader from './components/order-header'
import OrderList from './components/order-list'
export default {
  components: {
    OrderHeader,
    OrderList
  },
  data() {
    return {
      status: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 改变当前的状态
    ChangeStatus(status){
      this.status = status
    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.order-page{
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  .order-list{
    flex: 1
  }
}
</style>