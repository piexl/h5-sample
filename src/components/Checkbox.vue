<template>
  <div>
    <label class="checkbox-label"
      :style="{fontSize:size}"
      v-for="(item, index) in option"
      :key="index"
      :role="role"
      :disabled="item.disabled"
      :class="{'checkbox-label-checked':item.checked}">
      <i class="iconfont" :class="{'icon-fangxingweixuanzhong':!item.checked,'icon-fangxingxuanzhongfill':item.checked}"></i>
      <input type="checkbox"
        :value="item.value"
        v-model="item.checked"
        class="checkbox-input"
        :disabled="item.disabled">
      {{item.label}}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: Array,
    option: {
      type: Array,
      default () {
        return []
      }
    },
    role: {
      type: String,
      default: 'inline'
    },
    size: {
      type: Number,
      default: 14
    }
  },
  created () {
    let that = this
    that.value.forEach(item => {
      that.option.forEach(itemOpt => {
        if (item === itemOpt.value) {
          itemOpt.checked = true
        }
      })
    })
  },
  watch: {
    option: {
      handler () {
        let that = this
        let newV = []
        that.option.forEach(item => {
          if (item.checked) {
            newV.push(item.value)
          }
        })
        that.$emit('input', newV)
      },
      deep: true
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/less/ProPreboot.less';
.checkbox-label{
    position: relative;
    padding-right:0.5em;
    .iconfont{padding-right:0.2em; position: relative; top:1px;}
    &.checkbox-label-checked{
      .iconfont{
        color:@brand-primary;
      }
    }
    &[disabled]{
      opacity:0.6;
    }
    .checkbox-input{
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
