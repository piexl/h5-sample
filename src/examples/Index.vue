<template>
  <div class="example">
    <div class="example-hd">
      <h2 class="example-title"><router-link class="link-btn" to="/examples">示例页面</router-link></h2>
      <div class="nav-box">
        <Scroll direction="horizontal" :can-click="true">
          <nav class="example-nav">
            <router-link class="link-btn" to="/examples/icon">图标</router-link>
            <router-link class="link-btn" to="/examples/button">按钮</router-link>
            <router-link class="link-btn" to="/examples/loading">加载</router-link>
            <router-link class="link-btn" to="/examples/radio">单选框</router-link>
            <router-link class="link-btn" to="/examples/checkbox">复选框</router-link>
            <router-link class="link-btn" to="/examples/scroll">Scroll</router-link>
          </nav>
        </Scroll>
      </div>
    </div>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import Scroll from '@/components/Scroll.vue'

export default {
  name: 'Example',
  components: {
    Button,
    Icon,
    Scroll
  },
  data () {
    return {
      test: true
    }
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
    display:flex;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid #eee;
  }
  .example-title{
    font-size:18px;
    padding:0.5em;
  }
  .nav-box{
    flex:1;
    padding:0 30*@rpx;
    overflow:hidden;
  }
  .example-nav{
    width:400px;
    display:flex;
    justify-content:flex-start;
    align-items:cneter;
    .link-btn{
      font-size:14px;
      display:inline-block;
      padding:0.3em 1em;
      background-color:#fefefe;
      margin:5px 0;
      border-radius:0.3em;
      &.router-link-exact-active{
        color:#fff;
        background-color:@brand-primary;
      }
    }
  }
}
.page{
  flex:1;
  padding:30*@rpx;
  overflow:hidden;
}
</style>
