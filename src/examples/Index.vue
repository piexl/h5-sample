<template>
  <div class="example">
    <div class="example-hd">
      <h2 class="example-title">示例页面</h2>
      <nav class="example-nav">
        <router-link class="link-btn" to="/examples">返回</router-link>
        <router-link class="link-btn" to="/examples/button">按钮</router-link>
      </nav>
    </div>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Example',
  components: {
    Button
  },
  data () {
    return {
      test: true
    }
  }
}
</script>

<style lang='less' scoped>
.example{
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position: relative;
  .example-hd{
    width:100%;
  }
  .example-title{
    font-size:18px;
    padding:0.5em;
    border-bottom:1px solid #eee;
  }
  .example-nav{
    width:100%;
    padding:0 5%;
    .link-btn{
      font-size:14px;
      display:inline-block;
      padding:0.5em 1em;
      background-color:#fefefe;
      margin:5px 0;
    }
  }
}
.page{
  flex:1;
}
</style>
