<template>
  <div class="order-header">
    <div
        v-for="(item,index) of headerItems"
        class="item-wrap"
        :key="index"
        @click="$emit('ChangeStatus',index)"
    >
      <div :class="status===item.status? 'header-item active': 'header-item'">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"order-header",
  props: {
    status: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      headerItems: [
        {title: '今日订单', status: 0},
        {title: '预定订单', status: 1},
        {title: '历史订单', status: 2},
        {title: '待评价', status: 3},
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.order-header {
  background: #fff;
  width: 100%;
  display: flex;
}

.item-wrap {
  flex: 1;
}

.header-item {
  text-align: center;
  width: 4rem;
  margin: 0 auto;
  color: #999;
  padding: 0.8rem 0;
  &.active {
    color: $theme-color;
    border-bottom: 2px solid $theme-color;
  }
}
</style>