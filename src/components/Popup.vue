<template>
  <div class="popup" :class="{'popup-visible':popupVisible}">
    <div class="popup-mask" v-if="mask" @click="maskClose" :style="{backgroundColor:maskBgColor}"></div>
    <div class="popup-content" :position="position" :style="{backgroundColor:bgColor, color:color} ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskBgColor: {
      type: String,
      default: 'rgba(0,0,0,.6)'
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'center' // top || bottom || center
    },
    color: {
      type: String,
      default: '#fff'
    },
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,.5)'
    }
  },
  data () {
    return {
      popupVisible: this.visible
    }
  },
  methods: {
    show () {
      this.popupVisible = true
    },
    hide () {
      this.popupVisible = false
    },
    maskClose () {
      if (this.maskClosable) {
        this.popupVisible = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/less/ProPreboot.less';
.popup{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:999;
  display:none;
  &.popup-visible{
    display:block;
  }
  .popup-mask{
    width:100%;
    height:100%;
  }
  .popup-content{
    position: absolute;
    z-index:9;
    color:#fff;
    &[position='top']{
      top:0;
      left:50%;
      .translate(-50%,0);
    }
    &[position='center']{
      top:50%;
      left:50%;
      .translate(-50%,-50%);
    }
    &[position='bottom']{
      bottom:0;
      left:50%;
      .translate(-50%,0);
    }
  }
}
</style>
