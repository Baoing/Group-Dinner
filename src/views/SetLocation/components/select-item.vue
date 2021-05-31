<template>
  <div class='select-item' @click="$emit('click')">
    <slot></slot>
    <div class="icon">
      <van-icon v-show="iconShow" name="success" />
    </div>
  </div>
</template>

<script>
import {Icon} from "vant"
export default {
  components: {
    [Icon.name]: Icon
  },
  props:{
    // 图标的显示
    iconShow: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.select-item{
  margin-left: 1rem;
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon{
    color: #3BC442;
  }
}
</style>