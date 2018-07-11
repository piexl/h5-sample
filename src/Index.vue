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
import Mock from 'mockjs'
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
      // 利用Mock可以生成测试数据
      let data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1,
          'name': Mock.Random.cname(),
          'date': Mock.Random.date('yyyy-MM-dd'),
          'img': Mock.Random.image('200x100', '#ffcc33', '#FFF', 'jpg', 'test'),
          'color': Mock.Random.hex(),
          'text': Mock.Random.cparagraph(1, 3),
          'web': Mock.Random.domain(),
          'address': Mock.Random.region() + Mock.Random.city(true),
          'guid': Mock.Random.guid()
        }]
      })
      console.log('data', data)
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
