<template>
  <div class="setting-page">
    <nav-bar title="个人设置" />

    <van-cell-group class="cell-group">
      <van-cell title="头像" to="/setAuthor" is-link>
        <template #default>
          <img class="author" :src="author||require('@/assets/images/default-author.jpg')" alt>
        </template>
      </van-cell>

      <van-cell title="昵称" to="/setAuthor" is-link>
        <template #default>
          {{name}}
        </template>
      </van-cell>

      <van-cell title="所属公司">
        <template #default>
          {{company}}
        </template>
      </van-cell>

      <van-cell title="账号" to="/setUsername" is-link class="mt">
        <template #default>
          {{username}}
        </template>
      </van-cell>

      <van-cell title="密码" to="/setPassword" is-link>
        <template #default>
          修改密码
        </template>
      </van-cell>

      <van-cell title="邮箱" to="/setEmail">
        <template #default>
          {{email}}
        </template>
      </van-cell>

      <van-cell title="手机号" >
        <template #default>
          {{mobile}}
        </template>
      </van-cell>

      <van-cell title="二维码" to="/qrcode" is-link class="mt">
        <template #default>
          <svg-icon icon-class="qrcode"/>
        </template>
      </van-cell>
    </van-cell-group>

    <van-button plain class="login-out" @click="LoginOut">退出登录</van-button>
  </div>
</template>

<script>
import {Cell, CellGroup, Icon,Button,Dialog} from 'vant'
 export default {
  components: {
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Icon.name]:Icon,
    [Button.name]:Button,
    [Dialog.name]:Dialog,
  },
   data(){
     return {
       author: '',
       name:'呼伦贝尔',
       company: '应用演示有限公司',
       username: '884812',
       email:' 13700000000@163.com',
       mobile: '13900000000'
     }
   },
   created() {

   },
   methods:{
    LoginOut(){
      Dialog.confirm({
        title: '退出登录',
        message: '确认要退出登录吗？',
      })
      .then(() => {
        // on confirm
        this.$store.dispatch('user/LoginOut')
      })
      .catch(() => {
        // on cancel
      });
    }
   }
 }
</script>

<style lang="scss" scoped>
.setting-page{
  background: #f5f5f5;
  height: 100vh;
}
.cell-group{
  background: none;
}
svg.svg-icon{
  position: relative;
  top: 0.1rem;
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.8rem;
}
.mt{
  margin-top: 0.6rem;
}

.author{
  width: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
}
.login-out{
  display: block;
  margin: 2rem auto 0;
  border: 1px solid $theme-color;
  color: $theme-color;
  background: none;
  height: 2.6rem;
  line-height: 2.6rem;
  width: 12rem;
  border-radius: 0.3rem;
}
</style>