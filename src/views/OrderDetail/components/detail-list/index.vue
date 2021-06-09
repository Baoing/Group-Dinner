<template>
  <div class="detail-list">
    <list-item label="配送状态">
      商家备餐中 2021-05-27 16:00
      <template #right>
        <div class="detail-to" @click="handleDetailPopup">详情 ></div>
      </template>
    </list-item>

    <list-item label="取餐时段">
      2021-05-27 周四 00:00-20:30
    </list-item>

    <list-item label="取餐地点">
      北京东路路521号A204
    </list-item>

    <list-item label="总金额">
      ¥25 (公司为您支付¥25)
    </list-item>

    <list-item label="订单编号">
      T210527110048-510
      <template #right>
        <div class="code-show">
          <van-icon name="qr" size="26" class="icon" /> >
        </div>
      </template>
    </list-item>

    <list-item label="下单时间">
      2021-05-27 （周四） 11:00
    </list-item>
  </div>
</template>

<script>
import ListItem from './list-item'
import {Icon} from 'vant'

export default {
  components: {
    ListItem,
    [Icon.name]:Icon
  },
  data() {
    return {
      detailList: []
    }
  },
  methods: {
    handleDetailPopup() {

    }
  }
}
</script>

<style scoped lang="scss">
.detail-list {
  background: #fff;
}
.code-show{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon{
    margin-right: .3rem;
  }
}
.detail-to {
  color: $theme-color;
}
</style>