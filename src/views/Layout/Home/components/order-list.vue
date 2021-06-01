<template>
  <div class="container">
    <div class="order-wrap" v-for="(item,index) of orderList" :key="index" :class="item.status==1?'':'opacity'">
      <div class="order-item">
        <div class="pic"><img :src="item.pic" :alt="item.title"></div>
        <div class="desc">
          <div class="desc-title"><strong>{{item.title}}</strong> <span>{{item.english}}</span></div>
          <p>{{item.text}}</p>
        </div>
        <div class="status">{{item.status==1?'已截至':'未开通'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   data(){
     return {
      orderList:[
        {title: "早餐",pic:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1664615073,686141833&fm=26&gp=0.jpg",english:"Breakfast",text:"元气的一天从早餐开始!",status:0},//0已截至 1未开通
        {title: "午餐",pic:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.tbw-hufu.com%2FtuhfJDEwLmFsaWNkbi5jb20vaTMvMzIyOTc1NzczOS9UQjJRenpTZ09BS0wxSmpTWkZvWFhhZ0NGWGFfISEzMjI5NzU3NzM5JDk.jpg&refer=http%3A%2F%2Fwww.tbw-hufu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624973242&t=0166c905c58ac2a07a054c33b765d845",english:"Lunch",text:"再忙也要记得吃午餐哦!",status:1},
        {title: "晚餐",pic:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=833649704,1644325229&fm=26&gp=0.jpg",english:"Dinner",text:"一天的晚餐请整顿好的!",status: 1},
      ]
     }
   }
 }
</script>

<style lang="scss" scoped>
.opacity{
  opacity: 0.5;
}
.container{
  padding: 0 1rem;
}
.order-wrap{
  position: relative;
  margin: 1rem 0;
  padding: 0.4rem;
  box-shadow: 0 0 4px 0 #ddd;
  border-radius: 0.4rem;
}
.order-item{
  display: flex;
  width: 100%;
  .pic{
    width: 6.6rem;
    height: 6.6rem;
    border-radius: 0.5rem;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .desc{
    margin-left: 1rem;
    .desc-title{
      margin-top: .8rem;
      strong{
        font-weight: 600;
        font-size: 1.1rem;
      }
      span{
        font-size: 0.8rem;
        color: #999;
      }
    }
    p{
      font-size: 0.8rem;
      margin-top: .5rem;
      color: #999;
    }
  }
  .status{
    position: absolute;
    right: 0;
    top: 1rem;
    font-size: 0.8rem;
    color: #fff;
    background: #ccc;
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    height: 1.4rem;
    line-height: 1.4rem;
    padding:  0 0.3rem;
  }
}
</style>