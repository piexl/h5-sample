<template>
  <div class="picker-render-view">
    <div class="select" @click="showPicker()" ref="select3">{{ selectedText}}</div>
    <CityPicker @select="handleSelect(3,arguments)" :data="data" :selected-index="selectedIndex"
      ref="cityPicker" title="省市区三级联动选择器" cancel-txt="取消"
      confirm-txt="确定"></CityPicker>
  </div>
</template>

<script type="text/ecmascript-6">
import CityPicker from '@/components/CityPicker.vue'
import { provinceList, cityList, areaList } from '@/data/areaData'

export default {
  data () {
    return {
      data: [provinceList, cityList, areaList],
      selectedIndex: [0, 0, 0],
      selectedText: '省市区三级联动选择器'
    }
  },
  methods: {
    showPicker (index) {
      let picker = this.$refs.cityPicker
      picker.show()
    },
    handleSelect (index, args) {
      this.selectedText = args[2].join('，')
    }
  },
  components: {
    CityPicker
  }
}
</script>

<style scoped lang="less">
.picker-render-view{
  width:100%;
  height:100%;
  padding:15px;
  .select {
    margin: 0 10px 20px 10px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e5e5e5;
    text-align: center;
    background: #fff;
  }
}
</style>
