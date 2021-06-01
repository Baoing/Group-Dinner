<template>
  <div class="page">
    <nav-bar title="关于我们"/>
    <my-logo/>
    <van-cell-group class="cell-group">
      <van-cell to="/privacyPolicy" title="隐私协议" is-link />
      <van-cell to="/tos" title="服务条款" is-link />
      <van-cell title="联系客服" is-link />
    </van-cell-group>
    <my-copyright/>
  </div>
</template>

<script>
import MyLogo from '@/components/logo'
import MyCopyright from '@/components/copyright'
import {Cell, CellGroup} from 'vant'

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    MyLogo,
    MyCopyright
  },
  data() {
    return {}
  },
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cell-group{
  margin: 4rem 0;
}
</style>