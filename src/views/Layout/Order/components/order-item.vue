<template>
  <div class="order-item" @click="handleLinkOrderDetail(itemInfo.id)">
    <div class="item-header">
      <div class="shop-name">{{ itemInfo.shopName }}</div>
      <div class="order-type">{{ itemInfo.status }}</div>
    </div>
    <div class="item-content">
      <div class="pic-box">
        <img :src="itemInfo.pic" alt="">
      </div>
      <div class="desc">
        <div class="desc-title">{{ itemInfo.title }}</div>

        <div class="address">地址：{{ itemInfo.address }}</div>
        <div class="user-time">取餐时间：{{ itemInfo.time }}</div>
      </div>
    </div>

    <div class="item-bottom">
      <div class="collection">
        <van-icon size="18" :name="itemInfo.isCollection?'like':'like-o'" :class="itemInfo.isCollection?'like':''"/>
        <div class="text">收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from 'vant'

export default {
  name: "orderItem",
  components: {
    [Icon.name]: Icon
  },
  props: {
    itemInfo: {
      type: Object,
      require: true
    }
  },
  data() {
    return {}
  },
  methods: {
    handleLinkOrderDetail(id) {
      if(id) this.$router.push("/orderDetail/"+id)
    }
  }
}
</script>

<style scoped lang="scss">
.order-item {
  box-shadow: 0 0 10px 0px #ccc;
  margin: 1rem;
  //margin-bottom: 1rem;

  .item-header {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    border-bottom: 1px solid #eee;
    font-size: 0.85rem;

    .order-type {
      color: #999;
    }
  }

  .item-content {
    padding: 1rem 0.8rem;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;

    .pic-box {
      width: 7rem;
      height: 7rem;

      img {
        width: 100%;
      }
    }
    .desc{
      margin-left: 1rem;
      color: #aaa;
      .desc-title{
        font-weight: bold;
        color: #444;
      }
      .address{
        margin-top: 1rem;
        font-size: 0.86rem;
      }
      .user-time{
        font-size: 0.86rem;
      }
    }
  }

  .item-bottom {
    padding: 0.8rem;

  }

  .collection {
    display: flex;
    align-items: center;
    font-size: 0.88rem;

    .like {
      color: $theme-color;
    }
    .text{
      margin-left: 0.4rem;
      color: #999;
    }
  }

}
</style>