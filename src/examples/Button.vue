<template>
  <Page>
    <div class="section">
      <h3 class="section-title">基本样式</h3>
      <Button text="button" type="default"/>
      <Button text="primary" type="primary"/>
      <Button text="success" type="success"/>
      <Button text="info" type="info"/>
      <Button text="warning" type="warning"/>
      <Button text="danger" type="danger"/>
      <Button text="link" type="link"/>
    </div>
    <div class="section">
      <h3 class="section-title">圆角按钮</h3>
      <Button round text="button" type="default"/>
      <Button round text="primary" type="primary"/>
      <Button round text="success" type="success"/>
      <Button round text="info" type="info"/>
      <Button round text="warning" type="warning"/>
      <Button round text="danger" type="danger"/>
      <Button round text="link" type="link"/>
    </div>
    <div class="section">
      <h3 class="section-title">圆形按钮</h3>
      <Button circle text="button" type="default"/>
      <Button circle text="primary" type="primary"/>
      <Button circle text="success" type="success"/>
      <Button circle text="info" type="info"/>
      <Button circle text="warning" type="warning"/>
      <Button circle text="danger" type="danger"/>
      <Button circle text="link" type="link"/>
    </div>
    <div class="section">
      <h3 class="section-title">icon按钮</h3>
      <Button icon="xuanze" text="button" type="default"/>
      <Button icon="right" text="primary" type="primary"/>
      <Button icon="icon-up" text="success" type="success"/>
      <Button icon="danpin" text="info" type="info"/>
      <Button icon="wifi" text="warning" type="warning"/>
      <Button icon="shuaxin" text="danger" type="danger"/>
      <Button icon="jiazai" text="link" type="link"/>
    </div>
    <div class="section">
      <h3 class="section-title">加载按钮</h3>
      <Button loading text="button" type="default"/>
      <Button loading text="primary" type="primary"/>
      <Button loading text="success" type="success"/>
      <Button loading text="info" type="info"/>
      <Button loading text="warning" type="warning"/>
      <Button loading text="danger" type="danger"/>
      <Button loading text="link" type="link"/>
    </div>
    <div class="section block-btns">
      <h3 class="section-title">块级按钮</h3>
      <Button block text="button" type="default"/>
      <Button block text="primary" type="primary"/>
      <Button block text="success" type="success"/>
      <Button block text="info" type="info"/>
      <Button block text="warning" type="warning"/>
      <Button block text="danger" type="danger"/>
      <Button block text="link" type="link"/>
    </div>
    <div class="section">
      <h3 class="section-title">警用状态</h3>
      <Button disabled text="button" type="btn-default"/>
      <Button disabled text="primary" type="btn-primary"/>
      <Button disabled text="success" type="btn-success"/>
      <Button disabled text="info" type="btn-info"/>
      <Button disabled text="warning" type="btn-warning"/>
      <Button disabled text="danger" type="btn-danger"/>
      <Button disabled text="link" type="btn-link"/>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    Page,
    Button
  }
}
</script>
<style lang='less' scoped>
@import '../assets/less/ProPreboot.less';
.btn{margin:5px;}
.section{
  margin-bottom:20px;
  .section-title{
    font-size:16px;
    color:@gray-dark;
    font-weight:normal;
    margin-bottom:0.5em;
  }
}
.section{
  &.block-btns{
    .btn{margin-left:0; margin-right:0;}
  }
}
</style>
