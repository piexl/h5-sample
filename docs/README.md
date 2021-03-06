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
+ [Select 选择框](#Select选择框)
+ [Picker 组件](#Picker组件)
+ [CityPicker 组件](#CityPicker组件)
+ Upload 上传
+ [Popup 弹层](#Popup弹层)
+ [Toast 提示信息](#Toast提示信息)
+ [Dialog 对话框](#Dialog对话框)
+ [Scroll 滚动](#Scroll滚动)
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
icon | 图标名称 | String | 否 | -
color | 颜色 | String | 是 | #333
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
text | 文字 | String | 否 | - | -
role | 角色 | String | 是 | button/submit | button
type | 类型 | String | 是 | default/primary/success/info/warning/danger/link | default
icon | 图标名 | String | 否 | 根据icon组件的icon名 | -
disabled | 是否禁用状态 | Boolean | 是 | true/false | false
round | 是否圆角按钮 | Boolean | 是 | true/false | false
block | 是否块级按钮 | Boolean | 是 | true/false | false
loading | 是否加载中状态 | Boolean | 是 | true/false | false

事件

事件名 | 说明 | 参数
-| - |-
click | 点击事件 | -

使用示例

``` html
<template>
  <Button text="button" type="default"/>
  <Button text="primary" type="primary"/>
  <Button text="success" type="success"/>
  <Button text="info" type="info"/>
  <Button text="warning" type="warning"/>
  <Button text="danger" type="danger"/>
  <Button text="link" type="link"/>
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
role | 图标名称 | String | 是 | inline/block/fullscreen | inline | 为block其父元素需要设置position:relative
size | 大小 | Number | 是 | - | 14 | -
color | 颜色 | String | 是 | 十六进制/rgb | - | #333
text | 加载文字 | String | 是 | - | - | -
textSize | 文字大小 | String | 是 | - | - | 设置text时使用
textColor | 文字颜色 | String | 是 | 十六进制/rgb | - | 设置text时使用
direction | 排版方式 | String | 是 | row/column | row | 设置图标和文字的排版
background | 背景颜色 | String | 是 | 十六进制/rgb  | - | role为block/fullscreen时使用

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
value | 单选框的值 | String/Number | 否 | - | -
role | 展示方式 | String | 是 | inline/block | inline
size | 文字大小 | Number | 是 | - | 14
option | 选项数组 | array | 是 | - | -

`option`子配置项

参数 | 说明 | 类型
-|:-:|-:
label | 单选框显示文字 | String
value | 单选框的值 | String/Number
disabled | 单选框是否被禁用 | Boolean

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
value | 复选框的值 | String/Number | 否 | - | -
role | 展示方式 | String | 是 | inline/block | inline
size | 文字大小 | Number | 是 | - | 14
option | 选项数组 | array | 是 | - | -

`option`子配置项

参数 | 说明 | 类型
-|:-:|-:
label | 单选框显示文字 | String
value | 单选框的值 | String/Number
checked | 是否备选 | Boolean
disabled | 单选框是否被禁用 | Boolean

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

### Select选择框

属性

参数 | 说明 | 类型 | 可选值 | 默认值
-|-|-
value | 数据模型 | String/Number | - | -
option | 选项 | Arry | - | -
title | 选择的标题 | String | - | '请选择'
cancel-txt | 取消按钮文字 | String | - | '取消'
confirm-txt | 确定按钮文字 | String | - | '确定'
selected-index | 默认选项序列 | Arry | - | []
bolck | 是否块级 | Boolean | true/false | false
size | 文字大小 | Number | - | 14
color | 文字颜色 | String | - | '#343637'

使用示例

```html
<template>
  <div class="select-view">
    <div class="section">
      <h3 class="section-title">行里选择框</h3>
      <Select
        :option="option"
        title="选择角色"
        v-model="select"/>
      <span v-if="select">结果为：{{select}}</span>
    </div>
    <div class="section">
      <h3 class="section-title">块级选择框</h3>
      <Select
        :option="option"
        title="选择角色2"
        :bolck="true"
        :size="18"
        color="#2185D0"
        v-model="select2"
        :selectedIndex="[1]"/>
      <span v-if="select2">结果为：{{select2}}</span>
    </div>
  </div>
</template>
```

```js
import Select from '@/components/Select.vue'
let option = [
  {
    text: '剧毒',
    value: '剧毒'
  },
  {
    text: '蚂蚁',
    value: '剧毒'
  },
  {
    text: '幽鬼',
    value: '剧毒'
  },
  {
    text: '主宰',
    value: '剧毒'
  },
  {
    text: '卡尔',
    value: '剧毒'
  }
]
export default {
  data () {
    return {
      select: '',
      select2: '',
      option: option
    }
  },
  components: {
    Select
  }
}
```

### Picker组件

属性

参数 | 说明 | 类型 | 可选 | 默认值
-|-|-
data | 选项的数组 | Arry | 否 | []
title | 标题  | String | 否 | ''
cancel-txt | 取消按钮文案  | String | 是 | '取消'
confirm-txt | 确定按钮文案  | String | 是 | '确定'
selectedIndex | 被选中的索引值，拉起 picker 后显示这个索引值对应的内容  | Array | 否 | '确定'

`data`子配置项

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| text | picker每一列展示的文案 | String/Number | - | - |
| value | picker每一列展示的每项文案对应的值 | String/Number/Boolean | - | - |

`事件`

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 | selectedText: 当前选中项每一列的文案，Array类型 |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number类型 | selectedIndex: 当前列选中项的索引，Number类型 | - |
| value-change | 所确认的值变化时触发此事件 | selectedVal: 当前确认项每一列的值，Array类型 | selectedIndex: 当前确认项每一列的索引，Array类型 | selectedText: 当前选中项每一列的文案，Array类型 |
| cancel | 点击取消按钮触发此事件 | - | - | - |

`实例方法`

| 方法名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| setData | 设置picker可选项 | picker每列可选项的文案和值，Array类型 | picker每列选中的索引，Array类型 |
| show | 显示 | - | - |
| hide | 隐藏 | - | - |

使用示例

```html
<template>
  <div class="picker-render-view">
    <div class="select" @click="showPicker(0)" ref="select0">{{ selectedText[0] }}</div>
    <picker @select="handleSelect(0,arguments)"
      :selected-index="selectedIndex[0]"
      ref="picker0"
      :title="title[0]"
      cancelTxt="取消"
      confirmTxt="确定"></picker>
    <div class="select" @click="showPicker(1)" ref="select1">{{ selectedText[1] }}</div>
    <picker @select="handleSelect(1,arguments)"
      :data="data[1]"
      :selected-index="selectedIndex[1]"
      ref="picker1"
      :title="title[1]"
      cancelTxt="关闭"
      confirmTxt="好的"></picker>

    <div class="select" @click="showPicker(2)" ref="select2">{{ selectedText[2] }}</div>
    <picker @select="handleSelect(2,arguments)"
      :data="data[2]"
      :selected-index="selectedIndex[2]"
      ref="picker2"
      :title="title[2]"
      cancelTxt="取消"
      confirmTxt="确定"></picker>
  </div>
</template>
```

```js

import Picker from '@/components/Picker.vue'

let data1 = [
  {
    text: '剧毒',
    value: 1
  },
  {
    text: '蚂蚁',
    value: 2
  },
  {
    text: '幽鬼',
    value: 3
  },
  {
    text: '主宰',
    value: 4
  },
  {
    text: '卡尔',
    value: 5
  },
  {
    text: '宙斯',
    value: 6
  },
  {
    text: '巫医',
    value: 7
  },
  {
    text: '巫妖',
    value: 8
  },
  {
    text: '神谕者',
    value: 9
  },
  {
    text: '撼地神牛',
    value: 10
  },
  {
    text: '蓝胖子',
    value: 11
  },
  {
    text: '水晶室女',
    value: 12
  },
  {
    text: '莉娜',
    value: 13
  },
  {
    text: '斯拉克',
    value: 14
  },
  {
    text: '斯拉达',
    value: 15
  }
]

let data2 = [
  {
    text: '输出',
    value: 'a'
  },
  {
    text: '控制',
    value: 'b'
  },
  {
    text: '核心',
    value: 'c'
  },
  {
    text: '爆发',
    value: 'd'
  },
  {
    text: '辅助',
    value: 'e'
  },
  {
    text: '打野',
    value: 'f'
  },
  {
    text: '逃生',
    value: 'g'
  },
  {
    text: '先手',
    value: 'h'
  }
]

let data3 = [
  {
    text: '梅肯',
    value: 's'
  },
  {
    text: '秘法鞋',
    value: 'ss'
  },
  {
    text: '假腿',
    value: 'sss'
  },
  {
    text: '飞鞋',
    value: 'ssss'
  },
  {
    text: '辉耀',
    value: 'sssss'
  },
  {
    text: '金箍棒',
    value: 'ssssss'
  }
]

export default {
  mounted () {
    this.$refs.picker0.setData([data1])
    this.$refs.picker0.setSelectedIndex([1])
  },
  data () {
    return {
      data: [
        [data1],
        [data1, data2],
        [data1, data2, data3]
      ],
      selectedIndex: [[0], [1, 0], [0, 1, 2]],
      selectedText: ['单列选择器示例', '两列选择器示例', '三列选择器示例'],
      title: ['单列选择器', '两列选择器', '三列选择器']
    }
  },
  methods: {
    showPicker (index) {
      let picker = this.$refs['picker' + index]
      picker.show()
    },
    handleSelect (index, args) {
      this.selectedText.splice(index, 1, args[2].join('，'))
    }
  },
  components: {
    Picker
  }
}

```

### CityPicker组件

属性

参数 | 说明 | 类型 | 可选 | 默认值
-|-|-
data | 选项的数组 | Arry | 否 | []
title | 标题  | String | 否 | ''
cancel-txt | 取消按钮文案  | String | 是 | '取消'
confirm-txt | 确定按钮文案  | String | 是 | '确定'
selectedIndex | 被选中的索引值，拉起 picker 后显示这个索引值对应的内容  | Array | 否 | '确定'

`事件`

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 | selectedText: 当前选中项每一列的文案，Array类型 |

方法

| 方法名 | 说明
| - | -
| show | 显示
| hide | 隐藏

使用示例

```html
<template>
  <div class="picker-render-view">
    <div class="select" @click="showPicker()" ref="select3">{{ selectedText}}</div>
    <CityPicker @select="handleSelect(3,arguments)" :data="data" :selected-index="selectedIndex"
      ref="cityPicker" title="省市区三级联动选择器" cancel-txt="取消"
      confirm-txt="确定"></CityPicker>
  </div>
</template>
```

```js
mport CityPicker from '@/components/CityPicker.vue'
import { provinceList, cityList, areaList } from '@/data/areaData'

export default {
  data () {
    return {
      data: [provinceList, cityList, areaList],
      selectedIndex: [0, 0, 0],
      selectedText: '省市区三级联动选择器'
    }
  },
  methods: {
    showPicker (index) {
      let picker = this.$refs.cityPicker
      picker.show()
    },
    handleSelect (index, args) {
      this.selectedText = args[2].join('，')
    }
  },
  components: {
    CityPicker
  }
}
```

### Popup弹层

弹层组件

属性

参数 | 说明 | 类型 | 可选值 | 默认 | 备注
-|-|-
visible | 默认显示状态 | Boolean | true/false | false | -
mask | 是否显示背景层 | Boolean | true/false | true | -
maskBgColor | 背景层颜色 | String | - | 'rgba(0,0,0,.6)' | -
maskClosable | 内容展示位置 | Boolean | true/false | true | -
position | 内容展示位置 | String | center/top/bottom | true | -
color | 内容文字颜色 | String | - | '#fff' | -
bgColor | 内容背景颜色 | String | - | 'rgba(0,0,0,.5)' | -

方法

方法名 | 说明
-|-|-
show | 显示弹层
hide | 隐藏弹层

使用示例

```html
<template>
  <div class="page">
    <Button text="弹层1" type="primary" @click="openPopup('popup1')"/>
    <Button text="弹层2" type="primary" @click="openPopup('popup2')"/>
    <Button text="弹层3" type="primary" @click="openPopup('popup3')"/>
    <Button text="顶部弹层" type="primary" @click="openPopup('popup4')"/>
    <Button text="底部弹层" type="primary" @click="openPopup('popup5')"/>
    <Popup ref="popup1">弹层1</Popup>
    <Popup ref="popup2"
      :maskClosable="false"
      maskBgColor="rgba(255,255,255,0.5)">
      <span @click="closePopup('popup2')">点击关闭弹层2</span>
    </Popup>
    <Popup ref="popup3"
      bgColor="rgba(255,255,255,1)"
      color="#333"
      maskBgColor="rgba(0,0,0,0.6)">
      <p>弹层3</p>
    </Popup>
    <Popup ref="popup4" position="top">顶部弹层</Popup>
    <Popup ref="popup5" position="bottom">底部弹层</Popup>
  </div>
</template>
```

```js
import Button from '@/components/Button.vue'
import Popup from '@/components/Popup.vue'

export default {
  components: {
    Button,
    Popup
  },
  methods: {
    openPopup (id) {
      this.$refs[id].show()
    },
    closePopup (id) {
      this.$refs[id].hide()
    }
  }
}
```

### Toast提示信息

弹层组件

属性

参数 | 说明 | 类型 | 可选值 | 默认 | 备注
-|-|-
position | 显示位置 | String | top | -
autoClose | 是否自动关闭 | true/false | true | -
autoCloseTime | 自动关闭的时间 | Number | - | 2000 | 在autoClose为'false'时起效
role | 提示信息的类型 | String | default/primary/success/<br/>info/warning/danger | 'default' | -

方法

方法名 | 说明
-|-|-
show | 显示弹层
hide | 隐藏弹层

使用示例

```html
<template>
  <div class="page">
    <Button text="toast1" type="primary" @click="openToast('toast1')"/>
    <Button text="toast-1s自动关闭" type="primary" @click="openToast('toast2')"/>
    <Button text="toast-点击关闭" type="primary" @click="openToast('toast3')"/>
    <Button text="toast-顶部提示" type="primary" @click="openToast('toast4')"/>
    <Button text="toast-primary" type="primary" @click="openToast('toast5')"/>
    <Button text="toast-success" type="primary" @click="openToast('toast6')"/>
    <Button text="toast-info" type="primary" @click="openToast('toast7')"/>
    <Button text="toast-warning" type="primary" @click="openToast('toast8')"/>
    <Button text="toast-danger" type="primary" @click="openToast('toast9')"/>
    <Toast ref="toast1" >toast1</Toast>
    <Toast ref="toast2" :auto-close-time="1000">1s自动关闭</Toast>
    <Toast ref="toast3" :auto-close="false">点击关闭</Toast>
    <Toast ref="toast4" position="top">顶部提示</Toast>
    <Toast ref="toast5" position="top" role="primary">toast-primary</Toast>
    <Toast ref="toast6" position="top" role="success">toast-primary</Toast>
    <Toast ref="toast7" position="top" role="info">toast-info</Toast>
    <Toast ref="toast8" position="top" role="warning">toast-warning</Toast>
    <Toast ref="toast9" position="top" role="danger">toast-danger</Toast>
  </div>
</template>
```

```js
import Button from '@/components/Button.vue'
import Toast from '@/components/Toast.vue'

export default {
  components: {
    Button,
    Toast
  },
  methods: {
    openToast (id) {
      this.$refs[id].show()
    },
    closeToast (id) {
      this.$refs[id].hide()
    }
  }
}
```

### Dialog对话框

属性

参数 | 说明 | 类型 | 可选值 | 默认值
-|-|-
title | 标题 | String | - | -
hideCancel | 是否隐藏取消 | Boolean | true/false | false
showClose | 是否关闭按钮 | Boolean | true/false | true

事件

事件名称 | 说明
cancel | 取消按钮点击
confirm | 确定按钮点击
close |对话框关闭

方法

方法名 | 说明
-|-|-
open | 打开对话框
close | 关闭对话框

使用示例

```html
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
```

```js
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
```

### Scroll滚动

属性

参数 | 说明 | 类型 | 可选值 | 默认值 | 备注
-|-|-
direction | 滚动方向 | String | vertical/horizontal | vertical | `vertical`:父容器需要设置高度<br>`horizontal`:父容器需要设置宽度
canClick | 是否可点击 | Boolean | true/false | false | -
probeType | scroll事件触发条件 | Number | 0/1/2/3 | 0 | -
mouseWheel | 是否开启鼠标滚轮 | Boolean | true/false | false | -
startY | 纵轴方向初始化位置 | Number | - | 0 | -
scrollbar | 是否开启滚动条 | Boolean/Object | true/false/- | flase | -
listenScroll | 是否监听滚动事件 | Boolean | true/false | flase | 与事件scroll配合使用
listenBeforeScroll | 是否监听滚动前事件 | Boolean | true/false | flase | 与事件<br>before-scroll-start/scroll-start<br>配合使用
listenScrollEnd | 是否监听滚动完成事件 | Boolean | true/false | flase | 与事件scrollEnd配合使用

有时候我们需要知道滚动的位置。`probeType`为派发scroll事件

可选值 | 说明
-|-|-
0 | 不派发 scroll 事件
1 | 非实时（屏幕滑动超过一定时间后）派发scroll 事件
2 | 屏幕滑动的过程中实时的派发 scroll 事件
3 | 不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件

`scrollbar` 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条

参数 | 说明 | 类型 | 默认
-|-|-
fade | 当滚动停止的时候滚动条是否需要渐隐 | Boolean | true
interactive | 滚动条是否可以交互 | Boolean | false

事件

事件名 | 说明 | 参数
-|-|-
scroll | 滚动过程中 | Object{x, y}-实时滚动位置的坐标
before-scroll-start | 开始滚动前 | 无
scroll-start | 开始滚动 | 无
scroll-end | 滚动结束 | Object{x, y}-实时滚动位置的坐标

方法

方法名 | 说明 | 参数
-|-|-
scrollTo | 滚动到指定位置 | x: 横向位置<br>y: 纵向位置<br>time: 过渡动画时间<br>ease: 缓动函数，一般不建议修改
scrollToElement | 滚动到指定位置 | el: 滚动到的目标元素, 如果是字符串，则内部会尝试调用 querySelector 转换成 DOM 对象<br> time: 滚动动画执行的时长（单位 ms）<br>offsetX: 相对于目标元素的横轴偏移量，如果设置为 true，则滚到目标元素的中心位置<br>offsetY: 相对于目标元素的纵轴偏移量，如果设置为 true，则滚到目标元素的中心位置<br>easing:缓动函数，一般不建议修改
disable | 禁用滚动 | -
enable | 启用滚动，默认是开启滚动的。 | -
stop | 立即停止当前运行的滚动动画。 | -
refresh | 刷新 | -
destroy | 销毁 | -

使用示例

```html
<template>
  <div class="scroll-page">
    <div class="section">
      <h3 class="section-title">纵向滚动</h3>
      <div class="scroll-vertical">
        <Scroll :mouse-wheel="true"
          ref="scroll1"
          :listen-scroll="true"
          :probe-type="2"
          :start-y="-50"
          :can-click="true"
          @scroll="scroll1Scroll">
          <ul class="scroll-content">
            <li class="item">1</li>
            ……
            <li class="item">20</li>
          </ul>
        </Scroll>
      </div>
    </div>
    <div class="section">
      <h3 class="section-title">横向滚动</h3>
      <div class="scroll-horizontal">
        <Scroll direction="horizontal">
          <ul class="scroll-content">
            <li class="item">1</li>
            ……
            <li class="item">20</li>
          </ul>
        </Scroll>
      </div>
    </div>
  </div>
</template>
```

```js
import Scroll from '@/components/Scroll.vue'
export default {
  components: {
    Scroll
  },
  methods: {
    test () {
      console.log('test')
    },
    scroll1Scroll (pos) {
      console.log('scroll1Scroll', pos)
    }
  }
}
```

```less
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
.scroll-wrapper{
  width:100%;
  height:100%;
}
.scroll-vertical{
  width:100%;
  height:300px;
  overflow:hidden;
  .scroll-content{
    .item{
      line-height:2em;
      font-size:14px;
      text-align:center;
      border-top:1px solid @gray-lighter;
      border-bottom:1px solid @gray-lighter;
    }
  }
}
.scroll-horizontal{
  width:100%;
  overflow:hidden;
  .scroll-content{
    display:flex;
    width:3em*20;
    .item{
      padding:0.5em 1em;
      line-height:2em;
      font-size:14px;
      text-align:center;
      border-left:1px solid @gray-lighter;
      border-right:1px solid @gray-lighter;
    }
  }
}
```

### PageLoading

页面加载组件

属性

参数 | 说明 | 类型 | 可选 | 默认
-|:-:|-:
text | 加载的文字 | String | 是 | 加载中
show | 是否显示 | Boolean | 是 | false

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
music | 背景音乐 | String | 是 | /assets/imgs/bgMusic.mp3
show | 是否显示 | Boolean | 是 | true
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