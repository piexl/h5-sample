<template>
  <div class="loading"
    :class="'loading-'+direction"
    :role="role"
    :style="{color: color, backgroundColor: background}">
    <i class="iconfont" :class="'icon-'+icon" :style="{fontSize: size+'px'}"></i>
    <span class="loading-text" :style="{fontSize: textSize + 'px', color:textColor}" v-if="text && text !== ''">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: 'inline' // inline || block || fullscreen
    },
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: '#333'
    },
    icon: {
      type: String,
      default: 'loading' // loading1 || loading2 || loading3 || loading4
    },
    background: {
      type: String,
      default: 'rgba(255,255,255,0.9)'
    },
    text: {
      type: String,
      default: ''
    },
    textSize: {
      type: Number,
      default: 14
    },
    textColor: {
      type: String,
      default: '#767676'
    },
    direction: {
      type: String,
      default: 'row' // row || column
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

.loading{
  display:inline-block;
  line-height:1;
  &[role="inline"],&.loading-row{
    .loading-text{padding-left:0.2em;}
  }
  &[role="block"]{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:rgba(255,255,255,0.9);
  }
  &[role="fullscreen"]{
    display:block;
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:rgba(255,255,255,0.9);
  }
  &.loading-row{
    flex-direction:row;
  }
  &.loading-column{
    flex-direction:column;
  }
  .iconfont{
      display:inline-block;
      line-height:1;
      .transform-origin(center,center);
      .animation(ani-rotate,2s,linear,infinite,normal,forwards);
  }
}
</style>
