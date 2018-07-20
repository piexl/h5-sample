<template>
  <div class="select" :class="{'select-bolck':bolck}">
    <div class="selcet-inner" @click="showPicker" :style="{fontSize:size, color:color}">
      <input type="text" v-model="selectValue">
      <span class="select-value">{{selectValue}}</span>
      <i class="iconfont icon-xiangxia1"></i>
    </div>
    <picker @select="handleSelect(0,arguments)"
      :selected-index="[selectedIndex]"
      ref="picker"
      :data="[option]"
      :title="title"
      :cancel-txt="cancelTxt"
      :confirm-txt="confirmTxt"></picker>
  </div>
</template>

<script>
import Picker from '@/components/Picker.vue'
export default {
  name: 'Select',
  components: {
    Picker
  },
  props: {
    value: [String, Number],
    option: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: '请选择'
    },
    cancelTxt: {
      type: String,
      default: '取消'
    },
    confirmTxt: {
      type: String,
      default: '确定'
    },
    selectedIndex: {
      type: Array,
      default () {
        return []
      }
    },
    bolck: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#343637'
    }
  },
  data () {
    return {
      selectValue: this.value ? this.value : this.title
    }
  },
  methods: {
    showPicker () {
      let picker = this.$refs.picker
      picker.show()
    },
    handleSelect (index, args) {
      this.selectValue = args[2][0]
      // console.log('args', args[2][0])
      this.$emit('input', this.selectValue)
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/less/ProPreboot.less";
.select {
  display: inline-block;
  &.select-bolck{
    display:block;
  }
  .selcet-inner{
    display:flex;
    align-items:center;
    position:relative;
    font-size:14px;
    line-height:1;
    padding:0.5em 1em;
    border:1px solid @gray-lighter;
    input{display:none;}
    .select-value{
      flex:1;
      padding-right:0.3em;
    }
  }
}
</style>
