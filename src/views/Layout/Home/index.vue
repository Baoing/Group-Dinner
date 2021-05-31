<template>
  <div class='home-container'>
    <home-header />
    <date-list />
    <order-list/>
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
  data() {
    return {
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
.home-container{
  padding: 1rem;
  background: #fff;
  height: 100%;
}
</style>