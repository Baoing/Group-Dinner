<template>
  <div class="page">
    <nav-bar title="口味偏好" rightText="确定" @right-click="handleConfirmClick"/>

    <h2 class="preference-title">选择您喜欢的菜系（多选）和口味</h2>

    <div class="taste-wrapper">
      <template v-for="item of tasteClassList">
        <van-button
          :class="{'taste-button':true, 'active': tasteSelect.includes(item.id)}"
          round
          :key="item.id"
          @click="handleTasteClick(item)"
        >
          {{item.name}}
        </van-button>
      </template>
    </div>

    <van-divider/>

    <div class="hot-wrapper">
      <template v-for="item of hotClassList">
        <van-image
          width="56"
          height="56"
          round
          :src="hotActive===item.type ? item.active_url: item.url"
          :key="item.id"
          @click="handleHotClick(item)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import {Button, Divider, Image, Toast} from 'vant'

export default {
  data() {
    return {
      tasteClassList: [
        {name: "粤港菜", id: 1},
        {name: "川湘鄂菜", id: 2},
        {name: "东北菜", id: 3},
        {name: "江浙菜", id: 4},
        {name: "日韩料理", id: 5},
        {name: "甜品饮品", id: 6},
        {name: "煎炸小吃", id: 7},
        {name: "烧烤", id: 8},
        {name: "素食", id: 9},
        {name: "健康餐", id: 10},
        {name: "客家菜", id: 11},
        {name: "炖汤", id: 12},
        {name: "粥粉面", id: 13},
        {name: "早点", id: 14},
        {name: "水果", id: 15},
        {name: "水果沙拉", id: 16},
        {name: "其他", id: 17},
      ],
      tasteSelect: [1, 2, 3, 6, 9],
      hotClassList: [
        {type: 1, url: require("@/assets/images/nohot.png"), active_url: require("@/assets/images/nohot-a.png")},
        {type: 2, url: require("@/assets/images/onehot.png"), active_url: require("@/assets/images/onehot-a.png")},
        {type: 3, url: require("@/assets/images/twohot.png"), active_url: require("@/assets/images/twohot-a.png")},
        {type: 4, url: require("@/assets/images/threehot.png"), active_url: require("@/assets/images/threehot-a.png")},
      ],
      hotActive: null
    }
  },
  components: {
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Image.name]: Image
  },
  created() {

  },
  methods: {
    handleTasteClick(item) {
      this.tasteSelect.push(item.id)
    },
    handleHotClick({type}) {
      this.hotActive = type
    },
    // 右上角确认保存
    handleConfirmClick() {
      Toast("保存成功")
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 0 1rem;
}

.preference-title {
  padding: 2rem 0;
  font-size: 1.1rem;
  text-align: center;
  font-weight: bolder;
}

.taste-wrapper,
.hot-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hot-wrapper {
  margin-top: 2rem;
}

.taste-button {
  flex: 0 0 22%;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  padding: 0;
  height: 2.4rem;
  line-height: 2.4rem;
  background: #F2F2F2;
  transition: background 0.5s;

  &.active {
    background: $theme-linear;
    color: #fff;
  }
}

.hot-img {

}
</style>