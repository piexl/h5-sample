<template>
  <div class="page">
    <Scroll direction="vertical" :can-click="true">
      <div class="page-inner">
        <slot></slot>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll.vue'
export default {
  name: 'Page',
  components: {
    Scroll
  }
}
</script>
<style lang="less" scoped>
@import '../assets/less/ProPreboot.less';
.page{
  width:100%;
  height:100%;
  padding:30*@rpx;
  overflow:hidden;
}
</style>
