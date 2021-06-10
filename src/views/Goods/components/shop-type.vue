<template>
  <div class="type-list">
    <div class="type-item" v-for="item of shopTypes" @click="$emit('typeChange',item.id)" :key="item.id">
      <div class="item-pic">
        <img src="@/assets/images/allgoods.png" size="40px" alt="全部">
      </div>
      <div class="desc">全部</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'shopType',
  props:{
    shopTypes:Array
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped lang="scss">
.type-list {
  padding: 0.2rem 1rem;
  display: flex;
  .type-item {
    .item-pic {
      padding: 0.5rem;
      border-radius: 50%;
      border: 1px solid $theme-color;
      width: 3rem;
      height: 3rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .desc{
      line-height: 1.8rem;
      color: $theme-color;
      font-size: 0.82rem;
      text-align: center;
    }
  }
}
</style>