<template>
<button class="btn">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '加载中'
    }
  }
}
</script>

<style lang='less' scoped>
@import '../assets/less/ProPreboot.less';
.btn{
  padding:0.5em 1em;
  color:@gray-dark;
  font-size:1px;
  border:1px solid @gray-dark;
}
</style>
