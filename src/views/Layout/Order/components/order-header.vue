<template>
  <div class="order-header">
    <div class="item-wrap" v-for="(item,index) of headerItems" :key="index" @click="handleTypeChange(index)">
      <div :class="type==index? 'header-item active': 'header-item'">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerItems: [
        {title: '今日订单', type: 0},
        {title: '预定订单', type: 1},
        {title: '历史订单', type: 2},
        {title: '待评价', type: 3},
      ],
      type: 0
    }
  },
  methods: {
    handleTypeChange(i) {
      this.type = i
    }
  }
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