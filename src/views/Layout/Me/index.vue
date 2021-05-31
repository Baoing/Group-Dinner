<template>
  <div class="me-page">
    <me-header :user-info="userInfo" />

    <van-cell-group class="cell-group">
      <van-cell to="/coupon" is-link>
        <template #title>
          <svg-icon icon-class="coupon"/>
          <span class="custom-title">优惠券</span>
        </template>
      </van-cell>
      <van-cell to="/order" is-link>
        <template #title>
          <svg-icon icon-class="order"/>
          <span class="custom-title">订单记录</span>
        </template>
      </van-cell>
      <van-cell to="/preference" is-link class="mt">
        <template #title>
          <svg-icon icon-class="preference"/>
          <span class="custom-title">口味偏好</span>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <svg-icon icon-class="wechat"/>
          <span class="custom-title">订餐微信提示</span>
        </template>
        <template #default>
          <van-switch v-model="wechatChecked" size="20px" active-color="#00C800" />
        </template>
      </van-cell>
      <van-cell to="/about" is-link class="mt">
        <template #title>
          <svg-icon icon-class="about"/>
          <span class="custom-title">关于我们</span>
        </template>
      </van-cell>

      <van-cell to="/qrcode" is-link class="mt">
        <template #title>
          <svg-icon icon-class="qrcode"/>
          <span class="custom-title">二维码</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import MeHeader from "./components/me-header"
import {Cell,CellGroup,Icon,Switch} from 'vant'

export default {
  components:{
    MeHeader,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Icon.name]:Icon,
    [Switch.name]:Switch,
  },
  data() {
    return {
      userInfo: {
        name: "呼伦贝尔",
        author:"",
        company: "应用演示有限公司",
        wallet: "80",
        subsidy:"899"
      },
      wechatChecked: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';
.cell-group{
  background: none;
}
svg.svg-icon{
  position: relative;
  top: 0.1rem;
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.8rem;
}
.mt{
  margin-top: 0.6rem;
}
</style>