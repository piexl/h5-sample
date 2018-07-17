<template>
  <div>
    <label class="radio-label"
      :style="{fontSize:size}"
      v-for="(item, index) in option"
      :key="index"
      :role="role"
      :disabled="item.disabled"
      :class="{'radio-label-checked':radioValue==item.value}">
      <i class="iconfont" :class="{'icon-danxuan':radioValue!==item.value,'icon-danxuanfill':radioValue==item.value}"></i>
      <input type="radio"
        :value="item.value"
        v-model="radioValue"
        class="radio-input"
        :disabled="item.disabled">
      {{item.label}}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    option: {
      type: Array,
      default () {
        return []
      }
    },
    role: {
      type: String,
      default: 'inline' // inline || block
    },
    size: {
      type: Number,
      default: 14
    }
  },
  data () {
    return {
      radioValue: this.value
    }
  },
  watch: {
    radioValue (newV) {
      this.$emit('input', newV)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/less/ProPreboot.less';
.radio-label{
    position: relative;
    padding-right:0.5em;
    .iconfont{padding-right:0.2em; position: relative; top:1px;}
    &.radio-label-checked{
      .iconfont{
        color:@brand-primary;
      }
    }
    &[disabled]{
      opacity:0.6;
    }
    .radio-input{
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    &[role="inline"]{
      display:inline-block;
    }
    &[role="block"]{
      display:block;
    }
}
</style>
