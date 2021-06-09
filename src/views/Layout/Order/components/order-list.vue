<template>
  <div class="order-list">
    <div v-show="!orderList || orderList.length<1" class="default">
      <my-empty image="notOrder" description="暂无订单 ~" />
      <van-button class="empty-button" to="/home">立即下单</van-button>
    </div>
    <div v-show="orderList && orderList.length>=1" class="list-container">
      <order-item v-for="item of orderList" :key="item.id" :item-info="item" />
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import MyEmpty from '@/components/empty'
import OrderItem from  './order-item'
export default {
  props:{
    orderList: {
      type: Array
    }
  },
  components:{
    MyEmpty,
    OrderItem,
    [Button.name]: Button,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.order-list{
  margin-top: 0.8rem;
  background: #fff;
}
/deep/.van-empty__image{
  margin-top: 3rem;
  width: 180px;
}
.empty-button{
  background: $theme-linear;
  color: #fff;
  width: 56%;
  left: 50%;
  transform: translate(-50%,0);
}
.list-container{
  margin-bottom: 4rem;
}
</style>