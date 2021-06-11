<template>
  <div class="page">
    <nav-bar title="二维码"/>

    <div class="qr-container">
      <div class="qr-header">
        <div class="author-box"><img src="@/assets/images/default-author.jpg" alt></div>
        <div class="qr-title">
          <h3>author_4389820221</h3>
          <p>演示账号-演示稻草人9</p>
        </div>
      </div>

      <div class="qr-code" @click="handleRefreshCode">
        <img src="@/assets/images/qrcode.jpg" alt>
      </div>

      <div class="qr-desc">
        <strong>轻触刷新</strong>
        <p>二维码是您取餐、消费时的身份凭证，仅供机器识别，切勿出示于他人。</p>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from "vant"

export default {
  data() {
    return {}
  },
  created() {

  },
  methods: {
    handleRefreshCode() {
      Toast("已刷新二维码")
    }
  }
}
</script>

<style lang="scss" scoped>
.qr-container {
  width: 90%;
  margin: 4rem auto;
  box-shadow: 0 0 10px 0px #cfcfcf;
  border-radius: 10px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  .qr-header {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    padding: 1rem 2rem;
  }

  .author-box {
    width: 4rem;
    height: 4rem;
  }

  .qr-code {
    margin: 0rem auto;
    width: 18rem;
  }

  .qr-title {
    margin-left: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  p {
    margin-bottom: 0;
  }

  .qr-desc {
    color: #666;
    padding: 0 3rem;
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.6rem;

    p {
      font-size: 0.88rem;
      position: relative;

      &:before,
      &:after {
        position: absolute;
        top: 0.8rem;
        content: '';
        width: 2rem;
        height: 1px;
        background: #999;
      }

      &:before {
        left: -2.2rem;
      }

      &:after {
        right: -2.2rem;
      }
    }
  }
}
</style>