<template>
  <div class="cart">
    <div class="position-wrap" v-show="showPopup">
      <div class="mask" @click="toggleCartPopup"></div>

      <div class="cart-wrap">
        <div class="cart-header">
          <div class="left">购物车（{{ goods }}）</div>
          <div class="right">
            <van-icon name="delete-o"/>
            清空
          </div>
        </div>
      </div>

    </div>
    <div class="pay-bar">
      <div class="left-wrap">
        <div class="icon" @click="toggleCartPopup">
          <svg-icon icon-class="cart"/>
        </div>
        <div class="price">￥ {{ totalPrice }}</div>
      </div>
      <div class="to-pay">去结算</div>
    </div>
  </div>
</template>

<script>
import {Icon} from 'vant'

export default {
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      totalPrice: '0.00',
      goods: 0,
      showPopup:false
    }
  },
  methods:{
    toggleCartPopup(){
      this.showPopup = !this.showPopup
    }
  }
}
</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
}

.cart-wrap {
  position: fixed;
  z-index: 2;
  bottom: 3.2rem;
  background: #fff;
  width: 100%;

  .cart-header {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    .left{
      font-weight: bold;
    }
    .right{
      color: #aaa;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
    }
  }
}

.pay-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  border-top: 1px solid #efefef;
  background: #fff;
  z-index: 2;

  .to-pay {
    width: 7rem;
    line-height: 3.2rem;
    text-align: center;
    color: #fff;
    background: $theme-linear;
  }

  .left-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  svg.svg-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .price {
    margin-left: 1rem;
    color: #999;
  }
}
</style>