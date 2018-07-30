<template>
  <div class="page">
    <Button text="toast1" type="primary" @click="openToast('toast1')"/>
    <Button text="toast-1s自动关闭" type="primary" @click="openToast('toast2')"/>
    <Button text="toast-点击关闭" type="primary" @click="openToast('toast3')"/>
    <Button text="toast-顶部提示" type="primary" @click="openToast('toast4')"/>
    <Button text="toast-primary" type="primary" @click="openToast('toast5')"/>
    <Button text="toast-success" type="primary" @click="openToast('toast6')"/>
    <Button text="toast-info" type="primary" @click="openToast('toast7')"/>
    <Button text="toast-warning" type="primary" @click="openToast('toast8')"/>
    <Button text="toast-danger" type="primary" @click="openToast('toast9')"/>
    <Toast ref="toast1" >toast1</Toast>
    <Toast ref="toast2" :auto-close-time="1000">1s自动关闭</Toast>
    <Toast ref="toast3" :auto-close="false">点击关闭</Toast>
    <Toast ref="toast4" position="top">顶部提示</Toast>
    <Toast ref="toast5" position="top" role="primary">toast-primary</Toast>
    <Toast ref="toast6" position="top" role="success">toast-primary</Toast>
    <Toast ref="toast7" position="top" role="info">toast-info</Toast>
    <Toast ref="toast8" position="top" role="warning">toast-warning</Toast>
    <Toast ref="toast9" position="top" role="danger">toast-danger</Toast>
  </div>
</template>

<script type="text/ecmascript-6">
import Button from '@/components/Button.vue'
import Toast from '@/components/Toast.vue'

export default {
  components: {
    Button,
    Toast
  },
  methods: {
    openToast (id) {
      this.$refs[id].show()
    },
    closeToast (id) {
      this.$refs[id].hide()
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/less/ProPreboot.less";
.page{
  width:100%;
  height:100%;
  padding:15px;
}
.section{
  margin-bottom:20px;
  .section-title{
    font-size:16px;
    color:@gray-dark;
    font-weight:normal;
    margin-bottom:0.5em;
  }
}
.btn{margin-bottom:0.5em;}
</style>
