<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />

    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" active-color="#FE5B00" style="border-top: 1px solid #f5f5f5;" >
      <van-tabbar-item v-for="item in tabbar" @click="goto(item.path)" :key="item.path" :icon="item.icon">{{ item.text }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
} from 'vant';

export default {
  name: 'Layout',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: 0,
      tabbar:[
        {
          path:"/home",
          text:"首页",
          icon:"home-o"
        },
        {
          path:"/order",
          text:"订单",
          icon:"orders-o"
        },
        {
          path:"/me",
          text:"我的",
          icon:"friends-o"
        }
      ]
    };
  },
  created(){
    this.changeActive()
  },
  methods: {
    goto(path){
      this.$router.push(path)
    },
    changeActive(){
      this.tabbar.map((item,idx) =>{
        if(item.path === this.$route.path){
          this.active = idx;
        }
      })
    }
  },
  watch:{
    $route(){
      this.changeActive()
    }
  },
}
</script>
<style lang="scss" scoped>
.layout-container{
  background: #F5F5F5;
  height: 100vh;
}
</style>