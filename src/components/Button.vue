<template>
  <button class="btn"
    :type="role"
    :block="block"
    :round="round"
    :disabled="disabled"
    :class="type">
    <i class="iconfont" :class="icon" v-if="icon!==''"></i>
    <i class="iconfont icon-loading" v-if="loading"></i>
    {{text}}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'button' // button || submit
    },
    type: {
      type: String,
      default: 'default' // default || primary || success || info || warning || danger || link
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='less' scoped>
@import '../assets/less/ProPreboot.less';
//旋转动画
.rotate{
  from {
    .rotate(0deg);
  }
  to {
    .rotate(360deg);
  }
}
@keyframes ani-rotate{ .rotate;}
@-moz-keyframes ani-rotate{ .rotate;}
@-webkit-keyframes ani-rotate{ .rotate;}
@-o-keyframes ani-rotate{ .rotate;}
.btn{
  outline:none;
  display:inline-block;
  padding:0.8em 1.6em;
  font-size:14px;
  line-height:1;
  border:0;
  background-color:transparent;
  .icon-loading{
    display:inline-block;
    line-height:1;
    .transform-origin(center,center);
    .animation(ani-rotate,2s,linear,infinite,normal,forwards);
  }
  &.btn-default{
    color:@gray;
    border:1px solid @gray;
  }
  &.btn-primary{
    color:#fff;
    background-color:@brand-primary;
    border:1px solid @brand-primary;
  }
  &.btn-success{
    color:#fff;
    background-color:@brand-success;
    border:1px solid @brand-success;
  }
  &.btn-info{
    color:#fff;
    background-color:@brand-info;
    border:1px solid @brand-info;
  }
  &.btn-warning{
    color:#fff;
    background-color:@brand-warning;
    border:1px solid @brand-warning;
  }
  &.btn-danger{
    color:#fff;
    background-color:@brand-danger;
    border:1px solid @brand-danger;
  }
  &.btn-link{
    color:@brand-primary;
  }
  &[block]{
    width:100%;
    display:block;
  }
  &[round]{
    border-radius:0.3em;
  }
  &[circle]{
    border-radius:2em;
  }
  &[disabled]{
    opacity:0.75;
  }
}
</style>
