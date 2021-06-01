<template>
  <div>
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      class="nav-bar"
      fixed
      z-index="9999"
    >
      <template v-if="rightIcon" #right>
        <van-icon :name="rightIcon" size="18" @click="$emit('right-click')" />
      </template>
    </van-nav-bar>
    <div class="block"></div>
  </div>
</template>

<script>
import {NavBar,Icon} from 'vant'
export default {
  props:{
    title: String,
    rightIcon: String
  },
  components:{
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.nav-bar{
  background: $theme-linear;
  color: #fff;
  /deep/ .van-nav-bar__content, .block{
    height: 52px;
  }
  /deep/ .van-nav-bar__left i,
  /deep/ .van-nav-bar__right i,
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
.block{
  height: 52px;
  width: 100%;
}
</style>