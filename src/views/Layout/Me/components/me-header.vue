<template>
  <div class="me-header">
    <router-link to="/setting">
      <div class="pic"><img :src="userInfo.author|| require('@/assets/images/default-author.jpg')" alt=""></div>
      <div class="author">{{userInfo.name}}</div>
      <div class="company">{{userInfo.company}}</div>
    </router-link>

    <div class="header-bar">
      <div class="header-bar-item" @click="handleLinkTo('/wallet')">
        <div class="text">钱包</div>
        <div class="amount">￥{{userInfo.wallet || 0}}</div>
      </div>
      <div class="center-line"></div>
      <div class="header-bar-item" @click="handleLinkTo('/subsidy')">
        <div class="text">餐补</div>
        <div class="amount">
          <div class="mouth-pic"><img src="@/assets/images/mouth.png" alt=""></div>
          ￥{{userInfo.subsidy || 0}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleLinkTo(link){
      this.$router.push(link)
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

a:active {
  text-decoration: none;
}

.me-header {
  position: relative;
  padding-top: 1.6rem;
  padding-bottom: 4rem;
  width: 100%;
  background: $theme-linear;
  color: #fff;

  .pic {
    width: 4rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }

  .author,
  .company {
    text-align: center;
    margin: .4rem 0;
  }

  .author {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .company {
    font-size: 0.9rem;
  }

  .header-bar {
    position: absolute;
    padding: 0.4rem 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background: rgba(255, 255, 255, 0.1);

    .header-bar-item {
      width: 50%;
      text-align: center;
    }

    .text {
      font-size: 0.9rem;
    }

    .amount {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mouth-pic {
      width: 1rem;
    }

    .center-line {
      width: 1px;
      height: 1.3rem;
      background: #000;
      position: relative;
      top: .8rem;
      background: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>