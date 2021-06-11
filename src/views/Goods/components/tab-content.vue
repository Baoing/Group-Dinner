<template>
    <div class="tab-content" v-if ="flag" >
      <div class="content-empty" v-if="!goodList||goodList.length<1">
        <div class="pic-box">
          <img src="@/assets/images/empty.png" alt>
        </div>
        <p>{{emptyDesc}}</p>
      </div>
      <template v-else>
      <div class="content-item" v-for="item of goodList" :key="item.id">
        <div class="item-content">
          <div class="pic-box">
            <img :src="item.cover_pic" alt="">
          </div>
          <div class="desc">
            <div class="desc-title">{{ item.name }}</div>
            <div class="desc-text">{{ item.desc }}</div>

            <div class="desc-list">
              <div class="list-num"><img src="@/assets/images/number.png" alt>{{item.sales}}</div>
              <div class="list-like"><img src="@/assets/images/like.png" alt>{{item.likes}}</div>
              <div class="list-collect"><img src="@/assets/images/number.png" alt>{{item.collects}}分</div>
            </div>

            <div class="desc-info">
              <div class="left">
                <div class="price">￥{{ item.price }}</div>
                <div class="shop">{{ item.store_name }}</div>
              </div>
              <div class="active" v-if="item.status == 2" @click="handleAddGoodCart(item.id)">
                +
              </div>
              <div class="status" v-else>
                {{ item.status == 0 ? '未开通' : item.status == 1 ? '已截止' : '' }}
              </div>
            </div>
          </div>
        </div>
      </div>
      </template>
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
      flag: false
    }
  },
  methods:{
    // 添加商品进入购物车
    handleAddGoodCart(id){
      console.log(id)
    }
  },
  watch: {
    goodList: function () {
      this.$nextTick(()=>{
        this.flag = true;
      })
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
.item-content {
  display: flex;
  padding: 1.2rem 0rem;
  margin: 0 0.8rem 1rem;
  border-bottom: 1px solid #eee;
  background: #fff;

  .pic-box {
    width: 7rem;
    height: 7rem;
    border-radius: .4rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .desc {
    margin-left: 1rem;
    color: #aaa;
    flex: 1;

    .desc-title {
      font-weight: bold;
      color: #444;
    }

    .desc-text {
      line-height: 2rem;
      font-size: 0.86rem;
    }

    .desc-info{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 8rem;
      }
    }
    .price {
      font-size: 1.1rem;
      color: #ff0000;
      font-weight: bold;
    }

    .shop {
      border-radius: 0.2rem;
      border: 1px solid #aaa;
      color: #aaa;
      font-size: 0.8rem;
      padding: 0.1rem 0.2rem;
    }

    .status {
      font-size: 0.8rem;
      color: #fff;
      background: #cecece;
      border-radius: 4px;
      padding: 1px 4px;
    }
    .active {
      background: #5BCF84;
      width: 1.5rem;
      height: 1.5rem;
      line-height: 20px;
      color: #fff;
      background: $theme-linear;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
      border-radius: 50%;
    }
    .desc-list{
      display: flex;
      font-size: 0.85rem;
      .list-num,
      .list-like,
      .list-collect{
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
      }
      img{
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  }
}
</style>