<template>
  <div class="tab-wrapper">
    <div class="tab-header">
      <div
          v-for="(item,index) of tabList"
          :class="{'tab-item':true, active:activeIndex==index}"
          @click="handleItemClick(index)"
          :key="index"
      >
        {{ item }}
      </div>
    </div>

    <div class="tab-content">
      <tab-content :empty-desc="emptyDesc" :good-list="goodLists[activeIndex]"></tab-content>
    </div>
  </div>
</template>

<script>
import TabContent from './tab-content'
export default {
  components:{
    TabContent
  },
  data() {
    return {
      tabList: ['综合', '月销', '价格', '评分', '新菜', '收藏'],
      activeIndex: 0,
      emptyDesc: '暂未上传菜单',
      goodLists:[
        [{
          status: 0,
          title: "爆炒牛肚套餐",
          pic: require("@/assets/images/good01.jpg"),
          desc:"辅荤+素菜+米饭",
          price: 25,
          shopName:"演示店铺",
          id: '002',
          number:11,
          like:2,
          collect:1
        },
          {
            status: 2,
            title: "爆炒牛肚套餐",
            pic: require("@/assets/images/good02.jpg"),
            desc:"辅荤+素菜+米饭",
            price: 25,
            shopName:"演示店铺",
            id: '003',
            number:11,
            like:2,
            collect:1,
            time:"14:00截至"
          }
          ],[],[],[],[]
      ]
    }
  },
  methods: {
    handleItemClick(index) {
      this.activeIndex = index

      switch (this.tabList[index]) {
        case '新菜':
          this.emptyDesc = '暂无新菜品'
          break
        case '收藏':
          this.emptyDesc = '暂无收藏'
          break
        default:
          this.emptyDesc = '暂未上传菜单'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tab-wrapper {
  width: 100%;

  .tab-header {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;

    .tab-item{
      font-size: 0.9rem;
      padding: 0.2rem 0.5rem;
      line-height: 2rem;
      color: #666;
    }

    .active{
      color:#555;
      font-size: 1rem;
      font-weight: bold;
      position: relative;
      top: -0.05rem;
    }
  }
}
</style>