<template>
  <div id="homePage">
    <PageLoad
      text="拼命加载中……"
      :show="showLoading"></PageLoad>
    <BgMusic
      :show="showBgMusic"
      ref="bgMusic"
      :music="musicUrl"></BgMusic>
    <div class="page">
      <button class="btn" @click="triggerBgMusic">{{showBgMusic ? '隐藏音乐' : '显示音乐'}}</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PageLoad from '@/components/Loading.vue'
import BgMusic from '@/components/BgMusic.vue'
import musicUrl from '@/assets/imgs/bgMusic.mp3'

export default {
  name: 'Index',
  components: {
    PageLoad,
    BgMusic
  },
  data () {
    return {
      showLoading: true,
      showBgMusic: true,
      musicUrl: musicUrl
    }
  },
  mounted: function () {
    console.log('app mounted')
    this.getData()
  },
  methods: {
    // 获取数据
    getData: function () {
      var that = this
      axios.get('http://hurtigruten.cn/api/mag.destination.list.json')
        .then(function (response) {
          console.log('getData', response)
          that.showLoading = false
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 显示和隐藏音乐
    triggerBgMusic: function () {
      if (this.showBgMusic) {
        this.showBgMusic = false
        this.$refs.bgMusic.closeBgMusic()
      } else {
        this.showBgMusic = true
        this.$refs.bgMusic.openBgMusic()
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import './assets/less/ProPreboot.less';
#homePage{
  width:100%;
  height:100%;
}
.btn{
    padding:0.5em 1em;
    border:0;
    background-color:@brand-success;
    color:#fff;
    border-radius:0.3em;
    margin-top:0.5em;
}
.page{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:@brand-primary;
    color:#fff;
    outline:none;
}
</style>
