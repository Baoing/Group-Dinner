<template>
  <div class='order-page'>
    <order-header :status="status"></order-header>

    <order-list></order-list>
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

  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.order-page{

}
</style>