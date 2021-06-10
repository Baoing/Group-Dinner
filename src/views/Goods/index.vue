<template>
  <div>
    <nav-bar :title="query.title"></nav-bar>

    <van-search
        v-model="searchValue"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        class="search"
    >
      <template #action>
        <div class="search-button" @click="onSearch" v-show="searchButton">搜索</div>
        <div class="cancel-button" @click="onCancel" v-show="!searchButton">取消</div>
      </template>
    </van-search>

    <shop-type :shop-types="[1]" @typeChange="handleShopChange"/>

    <tab-wrapper/>

    <pay-bar />

  </div>
</template>

<script>
import {Search} from 'vant';
import ShopType from './components/shop-type'
import PayBar from './components/pay-bar'
import TabWrapper from './components/tab-wrapper'

export default {
  components: {
    [Search.name]: Search,
    ShopType,
    PayBar,
    TabWrapper
  },
  data() {
    return {
      query: {},
      searchValue:'',
      searchButton: true
    }
  },
  created() {
    this.query = this.$route.query
  },
  methods: {
    handleShopChange(e){
      console.log(e)
    },
    onSearch() {
      if(!this.searchValue) return false
      console.log(this.searchValue)
      this.searchButton = false
    },
    onCancel(){
      console.log('取消搜索')
      this.searchButton = true
    },
    comeBuy(){

    }
  }
}
</script>

<style scoped lang="scss">
.search-button{
  color: $theme-color;
}

</style>