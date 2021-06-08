<template>
  <div class="copyright">
    团餐版权所有 ©{{ year }}
  </div>
</template>

<script>

export default {
  name: "logo",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
}
</script>
<style scoped>
.copyright {
    margin: 2rem;
    text-align: center;
    color: #999;
    font-size: 0.86rem;
}
</style>