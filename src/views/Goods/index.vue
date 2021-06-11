<template>
  <div>
    <nav-bar :title="query.title" />

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

    <shop-type :shop-types="storeList" :store-id="storeId" @typeChange="handleShopChange"/>

    <tab-wrapper ref="tabWrapper"/>

    <pay-bar />

  </div>
</template>

<script>
import {Search,Toast} from 'vant';
import ShopType from './components/shop-type'
import PayBar from './components/pay-bar'
import TabWrapper from './components/tab-wrapper'
import {getStore} from '@/network'

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
      searchButton: true,
      storeList:[],
      storeId: '2'
    }
  },
  created() {
    let that = this
    this.query = this.$route.query
    // 获取商户列表
    getStore().then(res => {
      let {msg,data,code} = res
      if(code===0){
        that.storeList = data.list
        //初始点击
        that.handleShopChange(data.list[0].store_id)
      }else{
        Toast(msg)
      }
    })
  },
  methods: {
    handleShopChange(e){
      console.log(e)
      this.storeId = e
      this.$refs.tabWrapper.handleGoodsClick(e);
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