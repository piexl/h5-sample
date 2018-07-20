<template>
  <div class="example">
    <div class="example-hd">
      <router-link class="link-btn" to="/examples"><Button icon="xiangzuo1" type="link" :size="16" text="返回"></Button></router-link>
      <h2 class="example-title">{{$route.name}}</h2>
    </div>
    <div class="example-bd">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Scroll from '@/components/Scroll.vue'

export default {
  name: 'Example',
  components: {
    Button,
    Scroll
  }
}
</script>

<style lang='less' scoped>
@import '../assets/less/ProPreboot.less';
.example{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  position: relative;
  .example-hd{
    width:100%;
    height:80*@rpx;
    display:flex;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid #eee;
  }
  .example-title{
    flex:1;
    font-size:16px;
    font-weight:normal;
    line-height:1;
    padding:0.5em;
    color:#555;
    text-align:left;
  }
  .example-bd{
    flex:1;
    height:calc(100% - 80*@rpx);
  }
}
</style>
