<template>
  <div>
    <div class="section">
      <h3 class="section-title">基本样式</h3>
      <Button text="button" type="btn-default"/>
      <Button text="primary" type="btn-primary"/>
      <Button text="success" type="btn-success"/>
      <Button text="info" type="btn-info"/>
      <Button text="warning" type="btn-warning"/>
      <Button text="danger" type="btn-danger"/>
      <Button text="link" type="btn-link"/>
    </div>
    <div class="section">
      <h3 class="section-title">圆角按钮</h3>
      <Button round text="button" type="btn-default"/>
      <Button round text="primary" type="btn-primary"/>
      <Button round text="success" type="btn-success"/>
      <Button round text="info" type="btn-info"/>
      <Button round text="warning" type="btn-warning"/>
      <Button round text="danger" type="btn-danger"/>
      <Button round text="link" type="btn-link"/>
    </div>
    <div class="section">
      <h3 class="section-title">圆形按钮</h3>
      <Button circle text="button" type="btn-default"/>
      <Button circle text="primary" type="btn-primary"/>
      <Button circle text="success" type="btn-success"/>
      <Button circle text="info" type="btn-info"/>
      <Button circle text="warning" type="btn-warning"/>
      <Button circle text="danger" type="btn-danger"/>
      <Button circle text="link" type="btn-link"/>
    </div>
    <div class="section">
      <h3 class="section-title">icon按钮</h3>
      <Button icon="icon-xuanze" text="button" type="btn-default"/>
      <Button icon="icon-right" text="primary" type="btn-primary"/>
      <Button icon="icon-icon-up" text="success" type="btn-success"/>
      <Button icon="icon-danpin" text="info" type="btn-info"/>
      <Button icon="icon-wifi" text="warning" type="btn-warning"/>
      <Button icon="icon-shuaxin" text="danger" type="btn-danger"/>
      <Button icon="icon-jiazai" text="link" type="btn-link"/>
    </div>
    <div class="section">
      <h3 class="section-title">加载按钮</h3>
      <Button loading text="button" type="btn-default"/>
      <Button loading text="primary" type="btn-primary"/>
      <Button loading text="success" type="btn-success"/>
      <Button loading text="info" type="btn-info"/>
      <Button loading text="warning" type="btn-warning"/>
      <Button loading text="danger" type="btn-danger"/>
      <Button loading text="link" type="btn-link"/>
    </div>
    <div class="section block-btns">
      <h3 class="section-title">块级按钮</h3>
      <Button block text="button" type="btn-default"/>
      <Button block text="primary" type="btn-primary"/>
      <Button block text="success" type="btn-success"/>
      <Button block text="info" type="btn-info"/>
      <Button block text="warning" type="btn-warning"/>
      <Button block text="danger" type="btn-danger"/>
      <Button block text="link" type="btn-link"/>
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
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
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
