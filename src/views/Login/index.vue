<template>
  <div class='login-page'>
    <my-logo/>
    <div class="longin-main">
      <van-tabs v-model="active" title-active-color="#FE5400">
        <van-tab title="账号密码">
          <login-form/>
        </van-tab>
        <van-tab title="短信验证">
          <div style="text-align: center;margin-top: 20px">暂未支持</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {Tab, Tabs, Form, Field, Button} from 'vant';
import MyLogo from '@/components/logo'
import LoginForm from './components/loginForm'

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    MyLogo,
    LoginForm
  },
  data() {
    return {
      active: 0
    };
  }
}
</script>
<style scoped lang="scss">
@import '~@/assets/styles/_variables.scss';

.longin-main {
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 0px #999;
  width: 90vw;
  min-height: 60vh;
  border-radius: 0.4rem;
}

/deep/ .van-tabs__wrap {
  border-bottom: 1px solid #eee;
}

/deep/ .van-tabs__line {
  width: 60px;
  height: 1px;
  background: $theme-color;
}
</style>