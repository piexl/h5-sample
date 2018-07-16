<template>
  <div id="loading" v-show="show">
    <p class="img-box loading-img">
      <img :src="loadingImg" alt="">
    </p>
    <p>{{text}}</p>
  </div>
</template>

<script>
import loadingImg from '@/assets/imgs/loading.gif'
export default {
  props: {
    text: {
      type: String,
      default: '加载中'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loadingImg: loadingImg
    }
  }
}
</script>

<style lang='less' scoped>
@import '../assets/less/ProPreboot.less';
#loading{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:9999;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:rgba(0,0,0,0.7);
  color:#fff;
  .loading-img{
    width:100*@rpx;
    margin:20*@rpx;
  }
}
</style>
