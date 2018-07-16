<template>
  <i class="iconfont"
    :class="'icon-'+icon"
    :style="{fontSize: size+'px', color: color}"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#333'
    },
    size: {
      type: Number,
      default: 14
    }
  }
}
</script>
