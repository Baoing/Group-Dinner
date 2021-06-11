<template>
  <div class="type-list">
    <div
        :class="{'type-item': true, 'active': storeId === '0'}"
        @click="$emit('typeChange','0')"
    >
      <div class="item-pic">
        <img src="@/assets/images/allgoods.png" size="40px" alt="全部">
      </div>
      <div class="desc">全部</div>
    </div>

    <div
        v-for="item of shopTypes"
        :class="{'type-item': true, 'active': storeId===item.store_id}"
        @click="$emit('typeChange',item.store_id)"
        :key="item.store_id"
    >
      <div class="item-pic">
        <img :src="item.store_cover_url ||'@/assets/images/allgoods.png'" size="40px" alt="全部">
      </div>
      <div class="desc">{{ item.store_name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shopType',
  props: {
    shopTypes: Array,
    storeId: String
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.type-list {
  padding: 0.2rem 1rem;
  display: flex;

  .type-item {
    margin-right: 0.5rem;

    .item-pic {
      padding: 0.3rem;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #999;
      width: 3rem;
      height: 3rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      line-height: 1.8rem;
      color: #999;
      font-size: 0.82rem;
      text-align: center;
    }
  }

  .active {
    .item-pic {
      border-color: $theme-color;
    }

    .desc {
      color: $theme-color;
    }
  }
}
</style>