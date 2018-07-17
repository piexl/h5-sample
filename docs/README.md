# H5-sample

## 概述

### 介绍

手机端H5的示例模板，包含我们常用的一些设置和常用组件,项目采用[webapck](https://webpack.docschina.org/)进行打包，文档使用[docify](https://docsify.js.org/),基于vue开发。

### 特点

+ 基于vue组件化开发
+ 使用es6
+ 热更新
+ css预编译

### 包含组件

+ [Icon 图标](#Icon图标)
+ [Button 按钮](#Button按钮)
+ [Loading 加载](#Loading加载)
+ [Radio 单选框](#Radio单选框)
+ [Checkbox 复选框](#Checkbox复选框)
+ Select 单选框
+ Upload 上传
+ Popup 弹层
+ Toast 提示信息
+ Picker 组件
+ Dialog 对话框
+ Scroll 滚动
+ [PageLoading 加载页面](#PageLoading)
+ [BgMusic 背景音乐](#Bgmusic)

## 开始项目

安装依赖启动项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

查看文档

``` bash
# 启动文档服务，将在3000端口打开
docsify serve docs
```

## 组件

### Icon图标

属性

参数 | 说明 | 类型 | 可选 | 默认
-|:-:|-:
icon | 图标名称 | string | 否 | -
color | 颜色 | string | 是 | #333
size | 大小 | Number | 是 | 14

icon 具体名称参考 [公司图标库](http://www.iconfont.cn/) `图标管理 -> 我的图标 -> 我的项目 -> 移动端H5`

使用示例

``` html
<template>
  <Icon :size="20" icon="danpin"/>
  <Icon :size="20" color="#2185D0" icon="danpin"/>
  <Icon :size="20" color="#21BA45" icon="danpin"/>
  <Icon :size="20" color="#00B5AD" icon="danpin"/>
  <Icon :size="20" color="#FBBD08" icon="danpin"/>
  <Icon :size="20" color="#e22428" icon="danpin"/>
</template>
```

```js
import Icon from '@/components/Icon.vue'
export default {
  components: {
    Icon
  }
}
```

### Button按钮

属性

参数 | 说明 | 类型 | 可选 | 可选值 | 默认
-|:-:|-:
text | 文字 | string | 否 | - | -
role | 角色 | string | 是 | button/submit | button
type | 类型 | string | 是 | default/primary/success/info/warning/danger/link | default
icon | 图标名 | string | 否 | 根据icon组件的icon名 | -
disabled | 是否禁用状态 | boolean | 是 | true/false | false
round | 是否圆角按钮 | boolean | 是 | true/false | false
block | 是否块级按钮 | boolean | 是 | true/false | false
loading | 是否加载中状态 | boolean | 是 | true/false | false

使用示例

``` html
<template>
  <Button text="button" type="btn-default"/>
  <Button text="primary" type="btn-primary"/>
  <Button text="success" type="btn-success"/>
  <Button text="info" type="btn-info"/>
  <Button text="warning" type="btn-warning"/>
  <Button text="danger" type="btn-danger"/>
  <Button text="link" type="btn-link"/>
</template>
```

```js
import Button from '@/components/Button.vue'
export default {
  components: {
    Button
  }
}
```

### Loading加载

属性

参数 | 说明 | 类型 | 可选 | 可选值 | 默认 | 备注
-|:-:|-:
role | 图标名称 | string | 是 | inline/block/fullscreen | inline | 为block其父元素需要设置position:relative
size | 大小 | number | 是 | - | 14 | -
color | 颜色 | string | 是 | 十六进制/rgb | - | #333
text | 加载文字 | string | 是 | - | - | -
textSize | 文字大小 | string | 是 | - | - | 设置text时使用
textColor | 文字颜色 | string | 是 | 十六进制/rgb | - | 设置text时使用
direction | 排版方式 | string | 是 | row/column | row | 设置图标和文字的排版
background | 背景颜色 | string | 是 | 十六进制/rgb  | - | role为block/fullscreen时使用

使用示例

``` html
<template>
  <div>
    <div class="section">
      <h3 class="section-title">icon样式</h3>
      <Loading/>
      <Loading icon="loading1"/>
      <Loading icon="loading2"/>
      <Loading icon="loading3"/>
      <Loading icon="loading4"/>
    </div>
    <div class="section">
      <h3 class="section-title">大小</h3>
      <Loading/>
      <Loading :size="16" icon="loading1"/>
      <Loading :size="18" icon="loading2"/>
      <Loading :size="20" icon="loading3"/>
      <Loading :size="22" icon="loading4"/>
    </div>
    <div class="section">
      <h3 class="section-title">文字</h3>
      <Loading text="加载中" :size="18" :text-size="18" color="#2185D0" text-color="#2185D0"/>
    </div>
    <div class="section">
      <h3 class="section-title">块级</h3>
      <div class="loading-parent">
        <Loading role="block" :size="20"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
      <div class="loading-parent">
        <Loading role="block" :size="20" background="rgba(0,0,0,0.5)" color="#fff"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
      <div class="loading-parent">
        <Loading role="block" :size="20" text="加载中"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
      <div class="loading-parent">
        <Loading role="block" :size="20" text="加载中" direction="column"/>
        <p>加载测试文字加载测试文字加载测试文字加载测试文字加载测试文字</p>
      </div>
    </div>
    <div class="section">
      <h3 class="section-title">全屏 </h3>
      <p>role为fullscreen</p>
      <!-- <Loading role="fullscreen" text="加载中" direction="column" :size="20" :text-size="12"/> -->
    </div>
  </div>
</template>
```

```js
import Loading from '@/components/Loading.vue'
export default {
  components: {
    Loading
  }
}
```

### Radio单选框

属性

参数 | 说明 | 类型 | 可选 | 可选值 | 默认 |
-|:-:|-:
value | 单选框的值 | string/number | 否 | - | -
role | 展示方式 | string | 是 | inline/block | inline
size | 文字大小 | number | 是 | - | 14
option | 选项数组 | array | 是 | - | -

`option`子配置项

参数 | 说明 | 类型
-|:-:|-:
label | 单选框显示文字 | string
value | 单选框的值 | string/number
disabled | 单选框是否被禁用 | boolean

使用示例

```html
<template>
  <div>
    <label class="radio-label"
      :style="{fontSize:size}"
      v-for="(item, index) in option"
      :key="index"
      :role="role"
      :disabled="item.disabled"
      :class="{'radio-label-checked':radioValue==item.value}">
      <i class="iconfont" :class="{'icon-danxuan':radioValue!==item.value,'icon-danxuanfill':radioValue==item.value}"></i>
      <input type="radio"
        :value="item.value"
        v-model="radioValue"
        class="radio-input"
        :disabled="item.disabled">
      {{item.label}}
    </label>
  </div>
</template>
```

```js
export default {
  props: {
    value: [String, Number],
    option: {
      type: Array,
      default () {
        return []
      }
    },
    role: {
      type: String,
      default: 'inline' // inline || block
    },
    size: {
      type: Number,
      default: 14
    }
  },
  data () {
    return {
      radioValue: this.value
    }
  },
  watch: {
    radioValue (newV) {
      this.$emit('input', newV)
    }
  }
}
```

### Checkbox复选框

属性

参数 | 说明 | 类型 | 可选 | 可选值 | 默认 |
-|:-:|-:
value | 复选框的值 | string/number | 否 | - | -
role | 展示方式 | string | 是 | inline/block | inline
size | 文字大小 | number | 是 | - | 14
option | 选项数组 | array | 是 | - | -

`option`子配置项

参数 | 说明 | 类型
-|:-:|-:
label | 单选框显示文字 | string
value | 单选框的值 | string/number
checked | 是否备选 | boolean
disabled | 单选框是否被禁用 | boolean

使用示例

```html
<template>
  <div>
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
  </div>
</template>
```

```js
import Checkbox from '@/components/Checkbox.vue'
export default {
  components: {
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
```

### PageLoading

页面加载组件

属性

参数 | 说明 | 类型 | 可选 | 默认
-|:-:|-:
text | 加载的文字 | string | 是 | 加载中
show | 是否显示 | boolean | 是 | false

使用示例

``` html
<template>
  <PageLoad
    text="拼命加载中……"
    :show="showLoading"></PageLoad>
</template>
```

```js
import PageLoad from '@/components/Loading.vue'
export default {
  components: {
    PageLoad
  },
  data () {
    return {
      showLoading: true
    }
  }
}
```

### BgMusic

为H5增加背景音乐

属性

参数 | 说明 | 类型 | 可选 | 默认
-|:-:|-:
music | 背景音乐 | string | 是 | /assets/imgs/bgMusic.mp3
show | 是否显示 | boolean | 是 | true
auto-play | 是否自动播放 | Boolean | 是 | false

方法

方法名 | 说明 | 参数
-|:-:|-:
openBgMusic | 打开背景音乐 | 无
closeBgMusic | 关闭背景音乐 | 无

使用示例

``` html
<template>
  <BgMusic
    :show="showBgMusic"
    ref="bgMusic"
    v-bind:auto-play="true"
    :music="musicUrl"></BgMusic>
</template>
```

``` js
import BgMusic from '@/components/BgMusic.vue'
import musicUrl from '@/assets/imgs/bgMusic.mp3'
export default {
  components: {
    BgMusic
  },
  data () {
    return {
      showBgMusic: true,
      musicUrl: musicUrl
    }
  }
}
```

## 插件

### Animate Css动画类库

+ [官方网站](https://daneden.github.io/animate.css/)

### swiper 滑动插件

+ [官方文档](http://www.swiper.com.cn/api/index.html)
+ [官方示例](http://www.swiper.com.cn/demo/index.html)

### better-scroll 更好的滚动插件

+ [官方文档](https://ustbhuangyi.github.io/better-scroll/doc/)
+ [官方示例](https://ustbhuangyi.github.io/better-scroll/#/examples/zh)

### pixijs 2D游戏引擎

+ [官方文档](https://pixijs.io/docs/)
+ [官方示例](https://pixijs.io/examples/)
+ [中文入门教程](https://github.com/Zainking/learningPixi)

