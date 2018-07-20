<template>
  <Page>
    <div class="section">
      <h3 class="section-title">Radio 单选框</h3>
      <Radio :option="radio1Option" v-model="radio1" :size="16"/>
      <p>选择结果：{{radio1}}</p>
    </div>
    <div class="section">
      <h3 class="section-title">Radio 块级单选框</h3>
      <Radio role="block" :option="radio2Option" v-model="radio2" :size="16"/>
      <p>选择结果：{{radio2}}</p>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Radio from '@/components/Radio.vue'

export default {
  components: {
    Page,
    Radio
  },
  data () {
    return {
      radio1: 1,
      radio1Option: [
        {
          label: 'Option1',
          value: 1,
          disabled: false
        },
        {
          label: 'Option2',
          value: 2,
          disabled: false
        },
        {
          label: 'Option3',
          value: 3,
          disabled: true
        }
      ],
      radio2: '',
      radio2Option: [
        {
          label: 'Option1',
          value: 1,
          disabled: false
        },
        {
          label: 'Option2',
          value: 2,
          disabled: false
        },
        {
          label: 'Option3',
          value: 3,
          disabled: true
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
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
</style>
