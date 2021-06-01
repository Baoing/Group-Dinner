<template>
  <div :class="isActive? 'item-day active':'item-day'">
    <div class="week">{{ item.weekday }}</div>
    <strong class="day">{{ item.day }}</strong>
  </div>
</template>

<script>

export default {
  name: 'day-item',
  props: {
    item: Object,
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.item-day {
  width: 2.8rem;
  height: 2.8rem;
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
    font-size: 0.8rem;
  }

  .day {
    font-size: 1.1rem;
    position: relative;
    top: -0.2rem;
    font-weight: bold;
  }

  &.active {
    color: #fff;
    background: $theme-linear;
    border-color: $theme-color;
  }
}
</style>