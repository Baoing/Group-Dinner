<template>
    <div :class="isActive? 'item-day active':'item-day'">
      <div class="week">{{item.weekday}}</div>
      <strong class="day">{{item.day}}</strong>
    </div>
</template>

<script>

export default {
  name: 'day-item',
  props:{
    item: Object,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.wrap{
  display: flex;
  align-items: flex-start;
  margin-top: .8rem;
  .switch{
    width: 2rem;
    text-align: right;
    font-size: 1.4rem;
    line-height: 3rem;
    color: #999;
  }
}
.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
}

.item-day-wrap {
  width: 13%;
  margin-bottom: .4rem;
}

.item-day {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  color: #666;
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;

  .week {
    font-size: 0.66rem;
  }

  .day {
    font-size: 1.2rem;
    position: relative;
    top: -0.2rem;
  }

  &.active {
    color: #fff;
    background: $theme-linear;
    border-color: $theme-color;
  }
}
</style>