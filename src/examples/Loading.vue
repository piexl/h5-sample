<template>
  <div>
    <div class="section">
      <h3 class="section-title">icon样式</h3>
      <Loading/>
      <Loading icon="loading1"/>
      <Loading icon="loading2"/>
      <Loading icon="loading3"/>
      <Loading icon="loading4"/>
    </div>
    <div class="section">
      <h3 class="section-title">大小</h3>
      <Loading/>
      <Loading :size="16" icon="loading1"/>
      <Loading :size="18" icon="loading2"/>
      <Loading :size="20" icon="loading3"/>
      <Loading :size="22" icon="loading4"/>
    </div>
    <div class="section">
      <h3 class="section-title">文字</h3>
      <Loading text="加载中" :size="18" :text-size="18" color="#2185D0" text-color="#2185D0"/>
    </div>
    <div class="section">
      <h3 class="section-title">块级</h3>
      <div class="loading-parent">
        <Loading role="block" :size="20"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
      <div class="loading-parent">
        <Loading role="block" :size="20" background="rgba(0,0,0,0.5)" color="#fff"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
      <div class="loading-parent">
        <Loading role="block" :size="20" text="加载中"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
      <div class="loading-parent">
        <Loading role="block" :size="20" text="加载中" direction="column"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
    </div>
    <div class="section">
      <h3 class="section-title">全屏 </h3>
      <p>role为fullscreen</p>
      <!-- <Loading role="fullscreen" text="加载中" direction="column" :size="20" :text-size="12"/> -->
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  components: {
    Loading
  }
}
</script>
<style lang='less' scoped>
@import '../assets/less/ProPreboot.less';
.section{
  margin-bottom:20px;
  .section-title{
    font-size:16px;
    color:@gray-dark;
    font-weight:normal;
    margin-bottom:0.5em;
  }
}
.loading-parent{
  width:100%;
  height:100px;
  padding:1em;
  border:1px solid @gray-light;
  position: relative;
  margin-bottom:10px;
}
</style>
