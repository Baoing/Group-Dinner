<template>
  <div class="item-wrapper">
    <div class="title">{{ label }}</div>
    <div class="desc">
      <div class="desc-info">
        <slot></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0.8rem;
  font-size: 0.9rem;
  color: #444;
  .title{
    width: 4rem;
    text-align: right;
  }
  .desc{
    padding-left: 1rem;
    flex: 1;
    color: #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>