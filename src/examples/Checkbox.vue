<template>
  <Page>
    <div class="section">
      <h3 class="section-title">Radio 复选框</h3>
      <Checkbox :option="radio1Option" v-model="radio1" :size="16"/>
      <p>选择结果：{{radio1.join(",")}}</p>
    </div>
    <div class="section">
      <h3 class="section-title">Radio 块级复选框</h3>
      <Checkbox role="block" :option="radio2Option" v-model="radio2" :size="16"/>
      <p>选择结果：{{radio2.join(",")}}</p>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'
import Checkbox from '@/components/Checkbox.vue'

export default {
  components: {
    Page,
    Checkbox
  },
  data () {
    return {
      radio1: [1, 2],
      radio1Option: [
        {
          label: 'Option1',
          value: 1,
          checked: false,
          disabled: false
        },
        {
          label: 'Option2',
          value: 2,
          checked: false,
          disabled: false
        },
        {
          label: 'Option3',
          value: 3,
          checked: false,
          disabled: true
        }
      ],
      radio2: [],
      radio2Option: [
        {
          label: 'Option1',
          value: 1,
          checked: false,
          disabled: false
        },
        {
          label: 'Option2',
          value: 2,
          checked: false,
          disabled: false
        },
        {
          label: 'Option3',
          value: 3,
          checked: false,
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
