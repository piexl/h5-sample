<template>
  <div>
    <div class="section">
      <h3 class="section-title">icon样式</h3>
      <Icon :size="18" icon="loading"/>
      <Icon :size="18" icon="loading1"/>
      <Icon :size="18" icon="loading2"/>
      <Icon :size="18" icon="loading3"/>
      <Icon :size="18" icon="loading4"/>
      <Icon :size="18" icon="right"/>
      <Icon :size="18" icon="up"/>
      <Icon :size="18" icon="others"/>
      <Icon :size="18" icon="erweima"/>
      <Icon :size="18" icon="danpin"/>
      <Icon :size="18" icon="caidan"/>
      <Icon :size="18" icon="leimu"/>
      <Icon :size="18" icon="wifi"/>
      <Icon :size="18" icon="jiazai"/>
      <Icon :size="18" icon="xiangzuo2"/>
      <Icon :size="18" icon="xiangzuo1"/>
      <Icon :size="18" icon="xiangyou3"/>
      <Icon :size="18" icon="xiangyou3fill"/>
      <Icon :size="18" icon="xiangyou2"/>
      <Icon :size="18" icon="xiangyou1"/>
      <Icon :size="18" icon="xiangxia5"/>
      <Icon :size="18" icon="xiangxia3"/>
      <Icon :size="18" icon="xiangxia2"/>
      <Icon :size="18" icon="xiangxia1"/>
      <Icon :size="18" icon="xiangshang5"/>
      <Icon :size="18" icon="xiangshang3"/>
      <Icon :size="18" icon="dingbu"/>
      <Icon :size="18" icon="dibu"/>
      <Icon :size="18" icon="zuobiao"/>
      <Icon :size="18" icon="zuobiaofill"/>
      <Icon :size="18" icon="zuji"/>
      <Icon :size="18" icon="zhengli"/>
      <Icon :size="18" icon="xinxi"/>
      <Icon :size="18" icon="xinxifill"/>
      <Icon :size="18" icon="xihuan"/>
      <Icon :size="18" icon="xihuanfill"/>
      <Icon :size="18" icon="sousuo"/>
      <Icon :size="18" icon="shizhong"/>
      <Icon :size="18" icon="shizhongfill"/>
      <Icon :size="18" icon="shaixuan"/>
      <Icon :size="18" icon="liuyan"/>
      <Icon :size="18" icon="liuyanfill"/>
      <Icon :size="18" icon="gengduo"/>
      <Icon :size="18" icon="fenxiang"/>
      <Icon :size="18" icon="fankui"/>
      <Icon :size="18" icon="biaoxing"/>
      <Icon :size="18" icon="biaoxingfill"/>
      <Icon :size="18" icon="yuanxingxuanzhong"/>
      <Icon :size="18" icon="yuanxingxuanzhongfill"/>
      <Icon :size="18" icon="yuanxingweixuanzhong"/>
      <Icon :size="18" icon="xuanze"/>
      <Icon :size="18" icon="wenhao"/>
      <Icon :size="18" icon="wenhaofill"/>
      <Icon :size="18" icon="tishi"/>
      <Icon :size="18" icon="tishifill"/>
      <Icon :size="18" icon="jianhao"/>
      <Icon :size="18" icon="jiahao2fill"/>
      <Icon :size="18" icon="jiahao1"/>
      <Icon :size="18" icon="jiahao"/>
      <Icon :size="18" icon="guanbi2"/>
      <Icon :size="18" icon="guanbi2fill"/>
      <Icon :size="18" icon="fangxingxuanzhong"/>
      <Icon :size="18" icon="fangxingxuanzhongfill"/>
      <Icon :size="18" icon="fangxingweixuanzhong"/>
      <Icon :size="18" icon="danxuan"/>
      <Icon :size="18" icon="danxuanfill"/>
    </div>
    <div class="section">
      <h3 class="section-title">大小</h3>
      <Icon :size="12" icon="danpin"/>
      <Icon :size="14" icon="danpin"/>
      <Icon :size="16" icon="danpin"/>
      <Icon :size="18" icon="danpin"/>
      <Icon :size="20" icon="danpin"/>
      <Icon :size="22" icon="danpin"/>
      <Icon :size="24" icon="danpin"/>
      <Icon :size="26" icon="danpin"/>
      <Icon :size="28" icon="danpin"/>
      <Icon :size="30" icon="danpin"/>
    </div>
    <div class="section">
      <h3 class="section-title">颜色</h3>
      <Icon :size="20" icon="danpin"/>
      <Icon :size="20" color="#2185D0" icon="danpin"/>
      <Icon :size="20" color="#21BA45" icon="danpin"/>
      <Icon :size="20" color="#00B5AD" icon="danpin"/>
      <Icon :size="20" color="#FBBD08" icon="danpin"/>
      <Icon :size="20" color="#e22428" icon="danpin"/>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  components: {
    Icon
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
.iconfont{
  padding:0.5em;
}
</style>
