<template>
    <div class="tab-content">
      <div class="content-empty">
        <div class="pic-box">
          <img src="@/assets/images/empty.png" alt>
        </div>
        <p>{{emptyDesc}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:'tabContent',
  props:{
    goodList: {
      type: Array
    },
    emptyDesc:{
      type: String,
      default: '尚未上传菜单'
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.content-empty{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30%;
  .pic-box{
    width: 3rem;
  }
  img{
    width: 100%;
  }
  p{
    font-size: 0.85rem;
    line-height: 3rem;
    color: #aaa;
  }
}
</style>