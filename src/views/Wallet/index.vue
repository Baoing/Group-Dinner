<template>
  <div class="page">
    <nav-bar title="钱包" right-icon="question-o" @right-click="handleQuestionIconClick"/>
    <wallet-header :amount="amount"></wallet-header>
    <van-notice-bar text="消费记录" class="notice"/>
    <wallet-list :wallet-list="walletList"></wallet-list>

  </div>
</template>

<script>
import WalletHeader from './components/header'
import WalletList from './components/wallet-list'
import {Dialog, NoticeBar} from 'vant'

export default {
  components: {
    WalletHeader,
    [Dialog.name]: Dialog,
    [NoticeBar.name]: NoticeBar,
    WalletList
  },
  data() {
    return {
      amount: 0,
      popupShow: false,
      walletList: []
    }
  },
  created() {
    this.amount = 80
    this.walletList = []
  },
  methods: {
    // 显示弹窗
    handleQuestionIconClick() {
      Dialog.alert({
        title: '钱包说明',
        message: '<div style="text-align: left;line-height: 1.7rem;">1.钱包余额永久有效</div><div style="text-align: left;line-height: 1.7rem;">2.钱包余额不可提现</div><div style="line-height: 1.7rem;text-align: left;">3.使用钱包余额支付的订单,如有退款,退款金额将原路返还致钱包 </div>',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  height: 1.8rem;
  line-height: 1.8rem;
}
</style>