<template>
  <div class="page">
    <Button text="toast1" type="primary" @click="openDialog('dialog1')"/>
    <Button text="toast2" type="primary" @click="openDialog('dialog2')"/>
    <Dialog ref="dialog1"
      title="toast1"
      :show-close="false"
      @cancel="handleCancel"
      @confirm="handleConfirm">
      <p>内容区域</p>
    </Dialog>
    <Dialog ref="dialog2" title="toast2" @close="handleClose"  :hide-cancel="true">
      <p>内容区域</p>
    </Dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import Button from '@/components/Button.vue'
import Dialog from '@/components/Dialog.vue'

export default {
  components: {
    Button,
    Dialog
  },
  methods: {
    openDialog (id) {
      this.$refs[id].open()
    },
    closeDialog (id) {
      this.$refs[id].close()
    },
    handleClose () {
      console.log('handleClose')
    },
    handleCancel () {
      console.log('handleCancel')
    },
    handleConfirm () {
      console.log('handleConfirm')
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
