<template>
  <div class="container">
    <h2><span>￥</span>{{ amount }}</h2>
    <p>钱包余额</p>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.container{
  width: 100%;
  padding: 2rem 0;
  background: $theme-linear;
  text-align: center;
  color: #fff;
  span{
    font-size: 1.4rem;
  }
  p{
    color: #C95305;
    font-size: 0.88rem;
  }
}
</style>