<template>
  <div>goods</div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    created() {
      let {intervalNo,userDate,title} = this.$route.query
      console.log(intervalNo,userDate,title)
    }
  }
</script>

<style scoped>

</style>