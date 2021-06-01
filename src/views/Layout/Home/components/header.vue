<template>
  <div class='home-header'>
    <router-link to="/setLocation" class="location">
      <van-icon name="location-o" class="header-icon"/>
      {{location}}
    </router-link>

    <div class="header-menu">
      <div class="introduce">欢迎来到演示智能食堂 ~</div>
      <div class="menu-list">
        <van-icon class="icon" name="qr" @click="handleLinkTo('/qrcode')"/>
        <van-icon class="icon" name="scan"/>
        <van-icon class="icon" name="volume-o" @click="handleLinkTo('/notify')"/>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "vant"

export default {
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      location: "演示点位1F"
    };
  },
  mounted() {
    this.location = this.$store.state.location
  },
  methods: {
    handleLinkTo(link) {
      this.$router.push(link)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';
.home-header{
  padding: 1rem;
}
.location {
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;

  .header-icon {
    color: $theme-color;
    font-size: 1.6rem;
    margin-right: .2rem;
  }
}

.header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem 0;
  color: $gray-600;

  .menu-list {
    font-size: 1.3rem;

    .icon {
      margin-left: 1rem;
    }
  }

  .introduce {
    margin-left: 1.9rem;
  }
}
</style>