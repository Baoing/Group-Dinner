<template>
  <van-form @submit="handleLoginClick">
    <div class="input-wrap">
      <van-field
          v-model="userInfo.username"
          name="账号"
          label="账号"
          placeholder="请输入用户名"
          label-width="3rem"
      />
    </div>
    <div class="input-wrap">
      <van-field
          v-model="userInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          label-width="3rem"
          autocomplete
      />
    </div>
    <div class="question">遇到问题？</div>
    <div class="button-wrap">
      <van-button block class="submit-button" type="info" native-type="submit">登录</van-button>
    </div>
    <div class="read-wrap">
      <van-checkbox class="checkbox" v-model="isRead" shape="round" icon-size="1rem"/>
      <span @click="isReadClick" class="read-text">我已阅读并同意<router-link to="/privacyPolicy">《用户服务条款》</router-link>和<router-link
          to="/tos">《平台隐私协议》</router-link></span>
    </div>

  </van-form>
</template>


<script>
import {Form, Field, Button, Checkbox, Toast} from 'vant';
import {login, getUserInfo} from '@/network'

export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox
  },
  data() {
    return {
      active: 0,
      userInfo: {
        username: 18311540605,
        password: 123456,
        token: "",
        location: "演示地点2F"
      },
      isRead: true
    };
  },
  methods: {
    handleLoginClick() {
      let that = this
      let {username, password} = that.userInfo
      if (!that.formValidate(username, password)) return false

      login({type: 'username', mobile: username, password}).then(res => {
        let {code, msg, data} = res
        if (code === 1) {
          Toast(msg)
        } else if (code === 0) {
          that.userInfo.token = data.access_token
          that.$store.dispatch('user/LoginIn', that.userInfo)
          that.getUserInfo()
        }
      })
      // this.userInfo.token = 'qjbaTl5osGBxc9FhPL6c0Y4GZXDlkPbd'
      // this.$store.dispatch('user/LoginIn',this.userInfo)
      // // 登录成功后，返回上次进入的页面；
      // setTimeout(()=> this.$route.query.redirect ? this.$router.go(-1) :this.$router.push("/"),0)

    },
    getUserInfo() {
      let that = this
      getUserInfo().then(res => {
        if (res.code === 0) {
          console.log(res.data)
          that.userInfo = Object.assign(that.userInfo, res.data)
          this.$store.dispatch('user/LoginIn', this.userInfo)
          // 跳转到对应页面
          this.$route.query.redirect ? this.$router.go(-1) :this.$router.push("/")
        }
      })
    },

    formValidate(username, password) {
      if (!username) {
        Toast("请输入用户名")
        return false
      } else if (!password) {
        Toast("请输入用户名")
        return false
      } else if (!this.isRead) {
        Toast("请阅读并同意用户协议和隐私协议")
        return false
      } else {
        return true
      }
    },
    isReadClick() {
      this.isRead = !this.isRead
    }
  }
}
</script>
<style lang="scss" scoped>
$width: 86%;

.input-wrap {
  border: 1px solid #ccc;
  margin: 2rem auto;
  width: $width;
  border-radius: 3px;
}

/deep/ .van-cell {
  padding: 10px;
}

.question {
  text-align: right;
  color: #999;
  font-size: 0.86rem;
  margin: 1rem auto;
  width: $width;
}

.submit-button {
  background: $theme-linear;
  border: none;
  font-size: 1.2rem;
  width: 100%;
}

.button-wrap,
.read-wrap {
  margin: 1rem auto;
  width: $width;

  /deep/ .van-checkbox__icon--checked .van-icon {
    border: 1px solid $theme-color;
    background: $theme-color;
  }
}

.read-wrap {
  line-height: 1.6rem;
  font-size: 0.86rem;
}

.checkbox {
  display: inline-block;
  position: relative;
  top: 0.2rem;
}

.read-text {
  margin-left: 0.4rem;

  a {
    color: $theme-color;
    display: inline;
  }
}
</style>