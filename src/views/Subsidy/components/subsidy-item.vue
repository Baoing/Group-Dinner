<template>
  <div class="subsidy-item">
    <div class="date-wrap">
      <div class="week">{{itemInfo.week}}</div>
      <div class="date">{{itemInfo.date}}</div>
    </div>

    <div class="info-wrap">

      <div class="detail">
        <div class="info" v-if="itemInfo.info">{{itemInfo.info}}</div>
        <img src="@/assets/images/wan.png" v-else alt>
        <div :class="{'subtract':true,'red': itemInfo.subtract>0}">{{itemInfo.subtract}}</div>
      </div>
    </div>

    <div class="balance-wrap">
      <img src="@/assets/images/yu.png" alt>
      <div class="subtract">{{itemInfo.balance}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subsidyItem",
  props: {
    itemInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.subsidy-item {
  display: flex;
  width: 100%;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
}

.date-wrap {
  width: 6rem;

  .date {
    color: #ccc;
  }
}


.info-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  text-align: center;

  .info {
    width: 100%;
    text-align: left;
  }

  img {
    width: 1rem;
    height: 1rem;
  }

  .detail {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .subtract {
    color: #54CC8C;
  }

  .red {
    color: #f00;
  }
}


.balance-wrap {

  width: 4rem;
  display: flex;
  align-items: center;

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

}
</style>