<template>
  <div class="item-content">
    <div class="pic-box">
      <img :src="detail.pic" alt="">
    </div>
    <div class="desc">
      <div class="desc-title">{{ detail.title }}</div>
      <div class="desc-text">{{ detail.desc }}</div>
      <div class="desc-info">
        <div class="left">
          <div class="price">￥{{ detail.price }}</div>
          <div class="shop">{{ detail.shopName }}</div>
        </div>
        <div class="id">{{ detail.id }}</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.item-content {
  padding: 1.2rem 0.8rem;
  width: 100%;
  display: flex;
  background: #fff;
  margin-bottom: 1rem;
  .pic-box {
    width: 6rem;
    height: 6rem;
    border-radius: .4rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .desc {
    margin-left: 1rem;
    color: #aaa;
    flex: 1;

    .desc-title {
      font-weight: bold;
      color: #444;
    }

    .desc-text {
      line-height: 2rem;
      font-size: 0.86rem;
    }

    .desc-info{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 8rem;
      }
    }
    .price {
      font-size: 1.1rem;
      color: #ff0000;
      font-weight: bold;
    }

    .shop {
      border-radius: 0.2rem;
      border: 1px solid #aaa;
      color: #aaa;
      font-size: 0.8rem;
      padding: 0.1rem 0.2rem;
    }

    .id {
      font-weight: bold;
      font-size: 1.2rem;
      color: #f00;
    }
  }
}
</style>