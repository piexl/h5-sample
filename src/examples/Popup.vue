<template>
  <div class="page">
    <Button text="弹层1" type="primary" @click="openPopup('popup1')"/>
    <Button text="弹层2" type="primary" @click="openPopup('popup2')"/>
    <Button text="弹层3" type="primary" @click="openPopup('popup3')"/>
    <Button text="顶部弹层" type="primary" @click="openPopup('popup4')"/>
    <Button text="底部弹层" type="primary" @click="openPopup('popup5')"/>
    <Popup ref="popup1">弹层1</Popup>
    <Popup ref="popup2"
      :maskClosable="false"
      maskBgColor="rgba(255,255,255,0.5)">
      <span @click="closePopup('popup2')">点击关闭弹层2</span>
    </Popup>
    <Popup ref="popup3"
      bgColor="rgba(255,255,255,1)"
      color="#333"
      maskBgColor="rgba(0,0,0,0.6)">
      <p>弹层3</p>
    </Popup>
    <Popup ref="popup4" position="top">顶部弹层</Popup>
    <Popup ref="popup5" position="bottom">底部弹层</Popup>
  </div>
</template>

<script type="text/ecmascript-6">
import Page from '@/components/Page.vue'
import Button from '@/components/Button.vue'
import Popup from '@/components/Popup.vue'

export default {
  components: {
    Page,
    Button,
    Popup
  },
  methods: {
    openPopup (id) {
      this.$refs[id].show()
    },
    closePopup (id) {
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
