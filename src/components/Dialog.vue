<template>
  <Popup ref="popup" :maskClosable="false">
    <div class="dialog-inner">
      <div class="dialog-hd">
        <h3 class="dialog-title">{{title}}</h3>
        <button
          v-if="showClose"
          class="dialog-close-btn"
          @click="close"><i class="iconfont icon-jiahao1"></i></button>
      </div>
      <div class="dialog-bd">
        <slot></slot>
      </div>
      <div class="dialog-ft">
        <Button class="btn-cancel" @click="cancel" text="取消" v-if="!hideCancel"/>
        <Button class="btn-confirm" @click="confirm" type="primary" text="确定"/>
      </div>
    </div>
  </Popup>
</template>

<script>
import Button from '@/components/Button.vue'
import Popup from '@/components/Popup.vue'

export default {
  name: 'Dialog',
  components: {
    Button,
    Popup
  },
  props: {
    title: String,
    hideCancel: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    open () {
      this.$refs.popup.show()
    },
    close () {
      this.$refs.popup.hide()
      this.$emit('close')
    },
    cancel () {
      this.close()
      this.$emit('cancel')
    },
    confirm () {
      this.close()
      this.$emit('confirm')
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/less/ProPreboot.less";
.popup-content{
  padding:0;
  background:transparent;
}
.dialog-inner{
  background:#fff;
  color:@text-color;
  font-size:14px;
  line-height:1.5;
  border-radius:0.3em;
  width:600*@rpx;
  overflow:hidden;
  .dialog-hd{
    position: relative;
    border-bottom:1px solid @gray-lighter;
    padding:15*@rpx 0;
    .dialog-title{
      font-weight:normal;
      line-height:@line-height-base;
      text-align:center;
      font-size:16px;
    }
    .dialog-close-btn{
      padding:15*@rpx;
      position: absolute;
      top:0;
      right:0;
      line-height:1;
      color:@gray;
      .iconfont{font-size:20px;.rotate(-45deg); display:block;}
    }
  }
  .dialog-bd{
    padding:20*@rpx;
  }
  .dialog-ft{
    display:flex;
    flex-direction:row;
    border-top:1px solid @gray-lighter;
    .btn{
      flex:1;
      border:0;
    }
    .btn-cancel{
      background-color:@gray-lighter;
    }
  }
}
</style>
