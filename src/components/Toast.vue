<template>
  <div class="toast"
    :class="{'toast-visible':visible}"
    :position="position"
    :role="role"
    @click="closeToast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    position: String, // top
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseTime: {
      type: Number,
      default: 2000
    },
    role: {
      type: String,
      default: 'default' // default || primary || success || info || warning || danger
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
      let that = this
      if (that.autoClose) {
        setTimeout(() => {
          that.visible = false
        }, that.autoCloseTime)
      }
    },
    closeToast () {
      this.visible = false
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/less/ProPreboot.less";
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  .translate(-50%,-50%);
  display: none;
  padding:0.6em 1.2em;
  border-radius:0.3em;
  color:#fff;
  font-size:14px;
  &.toast-visible{
    display:block;
  }
  &[position="top"] {
    top: 0;
    left: 0;
    width:100%;
    text-align:center;
    border-radius:0;
    .translate(0,0);
  }
  &[role='default']{
    background-color:rgba(0, 0, 0, 0.8);
  }
  &[role='primary']{
    background-color:@brand-primary;
  }
  &[role='success']{
    background-color:@brand-success;
  }
  &[role='info']{
    background-color:@brand-info;
  }
  &[role='warning']{
    background-color:@brand-warning;
  }
  &[role='danger']{
    background-color:@brand-danger;
  }
}
</style>
