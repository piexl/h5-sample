<template>
  <div class="music-btn" :class = "{'show': show, 'play': musicPlay}" @click="musicTrigger">
    <div class="btn-inner" :style = "musicBtnStyle">
      <audio id="bgMusic" loop :src="music"></audio>
    </div>
  </div>
</template>

<script>
import musicBtnBg from '@/assets/imgs/music_btn.png'
import musicUrl from '@/assets/imgs/bgMusic.mp3'

export default {
  props: {
    show: {
      type: Boolean,
      defaut: true
    },
    music: {
      type: String,
      defaut: musicUrl
    }
  },
  data () {
    return {
      musicPlay: false,
      musicBtnStyle: {
        background: 'url(' + musicBtnBg + ') no-repeat 100% 0',
        backgroundSize: '200% 100%'
      }
    }
  },
  mounted: function () {
    this.bgMusic = document.getElementById('bgMusic')
    this.bgMusic.play()
    this.musicPlay = !this.bgMusic.paused
    let _this = this
    document.addEventListener('WeixinJSBridgeReady', function () {
      _this.bgMusic.play()
      _this.musicPlay = !_this.bgMusic.paused
    }, false)
  },
  methods: {
    // 打开音乐
    openBgMusic: function () {
      if (this.bgMusic.paused) {
        this.bgMusic.play()
        this.musicPlay = true
      }
    },
    // 关闭音乐
    closeBgMusic: function () {
      if (!this.bgMusic.paused) {
        this.bgMusic.pause()
        this.musicPlay = false
      }
    },
    // 音乐触碰
    musicTrigger: function () {
      if (this.bgMusic.paused) {
        this.openBgMusic()
      } else {
        this.closeBgMusic()
      }
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
    .rotate(-360deg);
  }
}
@keyframes ani-rotate{ .rotate;}
@-moz-keyframes ani-rotate{ .rotate;}
@-webkit-keyframes ani-rotate{ .rotate;}
@-o-keyframes ani-rotate{ .rotate;}

.music-btn{
  border: 0;
  position:fixed;
  top:48*@rpx;
  right:32*@rpx;
  z-index:99;
  display:none;
  .border-radius(50%);
  box-shadow:2px 2px 8px rgba(0, 0, 0, 0.3);
  .btn-inner{
    width:75*@rpx;
    height:75*@rpx;
  }
  &.play{
    .btn-inner{
      background-position:0 0 !important;
      .animation(ani-rotate,2s,linear,infinite,normal,forwards);
    }
  }
  &.show{
    display: block;
  }
}
</style>
