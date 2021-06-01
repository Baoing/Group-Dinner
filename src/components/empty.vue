<template>
  <van-empty :image="image ? require(`@/assets/images/${image}.png`):'default'" :description="description" />
</template>

<script>
import {Empty} from 'vant'
export default {
  name: 'empty',
  components:{
    [Empty.name]: Empty
  },
  props: {
    image: {
      type: String
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.van-empty__image{
  margin-top: 3rem;
  width: 180px;
}
/deep/.van-empty__description{
  color: $theme-color;
}
</style>