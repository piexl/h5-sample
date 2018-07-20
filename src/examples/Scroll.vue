<template>
  <Page class="scroll-page">
    <div class="section">
      <h3 class="section-title">纵向滚动</h3>
      <div class="scroll-vertical">
        <Scroll :mouse-wheel="true"
          ref="scroll1"
          :listen-scroll="true"
          :probe-type="2"
          :start-y="-50"
          :can-click="true"
          @scroll="scroll1Scroll">
          <ul class="scroll-content">
            <li class="item">1</li>
            <li class="item">2</li>
            <li class="item">3</li>
            <li class="item">4</li>
            <li class="item">5</li>
            <li class="item">6</li>
            <li class="item">7</li>
            <li class="item">8</li>
            <li class="item">9</li>
            <li class="item">10</li>
            <li class="item">11</li>
            <li class="item">12</li>
            <li class="item">13</li>
            <li class="item">14</li>
            <li class="item">15</li>
            <li class="item">16</li>
            <li class="item">17</li>
            <li class="item">18</li>
            <li class="item">19</li>
            <li class="item">20</li>
          </ul>
        </Scroll>
      </div>
    </div>
    <div class="section">
      <h3 class="section-title">横向滚动</h3>
      <div class="scroll-horizontal">
        <Scroll direction="horizontal">
          <ul class="scroll-content">
            <li class="item">1</li>
            <li class="item">2</li>
            <li class="item">3</li>
            <li class="item">4</li>
            <li class="item">5</li>
            <li class="item">6</li>
            <li class="item">7</li>
            <li class="item">8</li>
            <li class="item">9</li>
            <li class="item">10</li>
            <li class="item">11</li>
            <li class="item">12</li>
            <li class="item">13</li>
            <li class="item">14</li>
            <li class="item">15</li>
            <li class="item">16</li>
            <li class="item">17</li>
            <li class="item">18</li>
            <li class="item">19</li>
            <li class="item">20</li>
          </ul>
        </Scroll>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Scroll from '@/components/Scroll.vue'

export default {
  components: {
    Page,
    Scroll
  },
  methods: {
    test () {
      console.log('test')
    },
    scroll1Scroll (pos) {
      console.log('scroll1Scroll', pos)
    }
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
.scroll-wrapper{
  width:100%;
  height:100%;
}
.scroll-vertical{
  width:100%;
  height:300px;
  overflow:hidden;
  .scroll-content{
    .item{
      line-height:2em;
      font-size:14px;
      text-align:center;
      border-top:1px solid @gray-lighter;
      border-bottom:1px solid @gray-lighter;
    }
  }
}
.scroll-horizontal{
  width:100%;
  overflow:hidden;
  .scroll-content{
    display:flex;
    width:3em*20;
    .item{
      padding:0.5em 1em;
      line-height:2em;
      font-size:14px;
      text-align:center;
      border-left:1px solid @gray-lighter;
      border-right:1px solid @gray-lighter;
    }
  }
}
</style>
