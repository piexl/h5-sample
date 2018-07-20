<template>
  <Page>
    <div class="section">
      <h3 class="section-title">color 色彩</h3>
      <div class="colors">
        <div class="color-item primary">primary(#2185D0)</div>
        <div class="color-item  success">success(#21BA45)</div>
        <div class="color-item  info">info(#00B5AD)</div>
        <div class="color-item  warning">warning(#FBBD08)</div>
        <div class="color-item  danger">danger(#e22428)</div>
        <div class="color-item  gray-darker">gray-darker(#222)</div>
        <div class="color-item  gray-dark">gray-dark(#333)</div>
        <div class="color-item  gray">gray(#555)</div>
        <div class="color-item  gray-light">gray-light(#999)</div>
        <div class="color-item  gray-lighter">gray-lighter(#eee)</div>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'Color',
  components: {
    Page
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/ProPreboot.less';
.section{
  margin-bottom:20px;
  .section-title{
    font-size:16px;
    color:@gray-dark;
    font-weight:normal;
    margin-bottom:0.5em;
  }
}
@grid-columns:6;
@grid-column-gutters:20px;
.colors{
  .make-row(@grid-column-gutters:@grid-column-gutters);
  .color-item{
    height:4em;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:@grid-column-gutters/2;
    .make-column(@columns:2,@grid-columns:@grid-columns,@grid-column-gutters: @grid-column-gutters);
    &.primary{background-color:@brand-primary;}
    &.success{background-color:@brand-success;}
    &.info{background-color:@brand-info;}
    &.warning{background-color:@brand-warning;}
    &.danger{background-color:@brand-danger;}
    &.gray-darker{background-color:@gray-darker;}
    &.gray-dark{background-color:@gray-dark;}
    &.gray{background-color:@gray;}
    &.gray-light{background-color:@gray-light;}
    &.gray-lighter{background-color:@gray-lighter;}
  }
}
</style>
