<template>
  <div class="select-view">
    <div class="section">
      <h3 class="section-title">行里选择框</h3>
      <Select
        :option="option"
        title="选择角色"
        v-model="select"/>
      <span v-if="select">结果为：{{select}}</span>
    </div>
    <div class="section">
      <h3 class="section-title">块级选择框</h3>
      <Select
        :option="option"
        title="选择角色2"
        :bolck="true"
        :size="18"
        color="#2185D0"
        v-model="select2"
        :selectedIndex="[1]"/>
      <span v-if="select2">结果为：{{select2}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Select from '@/components/Select.vue'

let option = [
  {
    text: '剧毒',
    value: '剧毒'
  },
  {
    text: '蚂蚁',
    value: '剧毒'
  },
  {
    text: '幽鬼',
    value: '剧毒'
  },
  {
    text: '主宰',
    value: '剧毒'
  },
  {
    text: '卡尔',
    value: '剧毒'
  }
]

export default {
  data () {
    return {
      select: '',
      select2: '',
      option: option
    }
  },
  components: {
    Select
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/ProPreboot.less";
.select-view{
  width:100%;
  height:100%;
  padding:15px;
}
.section{
  margin-bottom:20px;
  .section-title{
    font-size:16px;
    color:@gray-dark;
    font-weight:normal;
    margin-bottom:0.5em;
  }
}
</style>
