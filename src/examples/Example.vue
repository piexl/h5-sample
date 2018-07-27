<template>
  <Page>
    <div class="section">
      <h3 class="section-title">基本组件</h3>
      <router-link class="link-btn" to="/examples/color"><Button text="Color" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/icon"><Button text="Icons" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/button"><Button text="Button" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/loading"><Button text="Loading" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/radio"><Button text="Radio" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/checkbox"><Button text="Checkbox" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/select"><Button text="Select" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/picker"><Button text="Picker" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/city-picker"><Button text="CityPicker" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/popup"><Button text="Popup" type="primary" :block="true" /></router-link>
      <router-link class="link-btn" to="/examples/scroll"><Button text="Scroll" type="primary" :block="true" /></router-link>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Example',
  components: {
    Page,
    Button
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/ProPreboot.less';
.link-btn{
  display:block;
  margin-bottom:10px;
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
</style>
