<template>
  <div class="logo">
    <img :src="logo" alt/>
  </div>
</template>

<script>

export default {
  name:"logo",
  data() {
    return {
      logo: 'http://shared-https.ydstatic.com/dict/v2016/160525/logo@2x.png'
    };
  }
}
</script>
<style scoped>
.logo{
  width: 14rem;
  min-height: 3rem;
  margin: 0 auto;
  margin-top: 10vh;
}
.logo img{
  width: 100%;
}
</style>