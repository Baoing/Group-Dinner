<template>
  <div class="subsidy-header">
    <img src="@/assets/images/card.png" alt="">
    <div class="amount">{{amount}}</div>
    <div class="desc">公司支付，按月补贴</div>
  </div>
</template>

<script>
export default {
  name:"subsidyHeader",
  data(){
    return {
      amount: 99999
    }
  },
  created() {

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.subsidy-header{
  background: $theme-linear;
  min-height: 20vh;
  text-align: center;
  .amount{
    font-weight: bolder;
    position: relative;
    top: -5.2rem;
  }
  .desc{
    position: relative;
    top: -1.2rem;
    color: #eee;
    font-size: 0.86rem;
  }
}
</style>