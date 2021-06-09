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
      <template #right>
        <van-icon  v-if="rightIcon" :name="rightIcon" size="18" @click="$emit('right-click')" />
        <div v-if="rightText" @click="$emit('right-click')">{{rightText}}</div>
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
    rightIcon: String,
    rightText: String
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