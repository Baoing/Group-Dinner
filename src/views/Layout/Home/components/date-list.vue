<template>
  <div class="wrap">
    <div class="item-list">
      <template v-for="(item,index) of dayList">
        <div
          v-show="index < dayList.length/2 || show"
          class="item-day-wrap"
          @click="handleDayClick(index)"
          :key="index"
        >
          <day-item :is-active="activeDay===index" :item="item" />
        </div>
      </template>
    </div>
    <div class="switch" @click="handleSwitchClick">
      <van-icon :name="show? 'arrow-up':'arrow-down'"/>
    </div>
  </div>
</template>

<script>
import {getDay} from '@/utils/getdays'
import {Icon} from 'vant'
import DayItem from './day-item'

export default {
  components: {
    [Icon.name]: Icon,
    DayItem
  },
  data() {
    return {
      dayList: [],
      activeDay: 0,
      show: false
    }
  },
  mounted() {
    this.dayList = getDay(14)
  },
  methods: {
    handleDayClick(i) {
      this.activeDay = i
    },
    handleSwitchClick() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_variables.scss';

.wrap {
  display: flex;
  align-items: flex-start;
  margin-top: .8rem;

  .switch {
    width: 2rem;
    text-align: right;
    font-size: 1.4rem;
    line-height: 3rem;
    color: #999;
  }
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.item-day-wrap {
  width: 13%;
  margin-bottom: .4rem;
}

.item-day {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  color: #666;
  display: flex;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;

  .week {
    font-size: 0.66rem;
  }

  .day {
    font-size: 1.2rem;
    position: relative;
    top: -0.2rem;
  }

  &.active {
    color: #fff;
    background: $theme-linear;
    border-color: $theme-color;
  }
}
</style>