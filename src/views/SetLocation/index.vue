<template>
  <div>
    <nav-bar title="选择取餐地址" />
    <select-item
      v-for="(item,index) of locationList"
      :key="index"
      :iconShow="activeLocation===index"
      @click="handleItemClick(index)"
    >
      {{item.location}}
    </select-item >
  </div>
</template>

<script>
import {Toast} from 'vant'
import SelectItem from "./components/select-item"
export default {
  components:{
    SelectItem
  },
  data() {
    return {
      locationList:[
        {location:"演示地点1F"},
        {location:"演示地点2F"},
        {location:"演示地点3F"}
      ],
      activeLocation: null
    }
  },
  mounted(){
    let location = this.$store.getters['user/location']
    this.locationList.forEach((item,index)=>{
      location == item.location && (this.activeLocation = index)
    })
  },
  methods:{
    handleItemClick(i){
      this.activeLocation = i
      this.$store.dispatch("user/setLocation",this.locationList[i].location)
      Toast("绑定成功")
    }
  }
}
</script>