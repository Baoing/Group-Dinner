<template>
  <div class='order-page'>
    <order-header :status="status" @ChangeStatus="ChangeStatus"></order-header>
    <order-list :status="status" :order-list="orderList[status]" class="order-list"></order-list>
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
      status: 0,
      orderList: {
        0: [
          {
            id:100021,
            shopName: '演示商店',
            status: '商家备餐中',
            title: "爆炒牛肚套餐",
            pic: require("@/assets/images/good01.jpg"),
            address: "北京东路521号A201",
            time: "06月29日 12:00-13:30",
            type: 1,
            isCollection: 1
          },
          {
            id:100022,
            shopName: '演示商店',
            status: '商家备餐中',
            title: "红烧肉套餐",
            pic: require("@/assets/images/good02.jpg"),
            address: "北京东路521号A201",
            time: "06月29日 12:00-13:30",
            type: 1,
            isCollection: 0
          },
          {
            id:100023,
            shopName: '演示商店',
            status: '商家备餐中',
            title: "香菇滑鸡套餐饭",
            pic: require("@/assets/images/good03.jpg"),
            address: "北京东路521号A201",
            time: "06月29日 12:00-13:30",
            type: 1,
            isCollection: 0
          }
        ],
        1: [],
        2: [],
        3: []
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 改变当前的状态
    ChangeStatus(status) {
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
.order-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);

  .order-list {
    flex: 1
  }
}
</style>