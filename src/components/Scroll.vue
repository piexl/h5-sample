<template>
  <div class="scroll-wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    direction: {
      type: String,
      default: 'vertical'
    },
    canClick: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    },
    mouseWheel: {
      type: Boolean,
      default: false
    },
    startY: {
      type: Number,
      default: 0
    },
    scrollbar: {
      type: Boolean || Object,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    listenScrollEnd: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: this.direction === 'horizontal', // 是否开启横向滚动
        scrollY: this.direction === 'vertical', // 是否开启纵向滚动
        click: this.canClick, // 是否可点击
        startY: this.startY, // 纵轴方向初始化位置
        mouseWheel: this.mouseWheel, // 是否开启鼠标滚轮
        probeType: this.probeType, // scroll事件触发条件 0->不派发: 1->非实时: 2->屏幕滑动的过程中实时的派发: 3->屏幕滑动的过程中和momentum 滚动动画运行过程中实时的派发
        scrollbar: this.scrollbar // 是否开启滚动条
      })
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      if (this.listenScrollEnd) {
        this.scroll.on('scrollEnd', (pos) => {
          this.$emit('scroll-end', pos)
        })
      }
      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
        this.scroll.on('scrollStart', () => {
          this.$emit('scroll-start')
        })
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    stop () {
      this.scroll && this.scroll.stop()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    destroy () {
      this.scroll && this.scroll.destroy()
    }
  }
}
</script>
<style lang="less" scoped>
.scroll-wrapper{
  width:100%;
  height:100%;
}
</style>
