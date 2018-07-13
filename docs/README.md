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

+ [PageLoading 加载页面](#PageLoading)
+ [BgMusic 背景音乐](#Bgmusic)
+ Button 按钮
+ Loading 加载
+ Checkbox 复选框
+ Radio 单选框组
+ Select 单选框
+ Upload 上传
+ Popup 弹层
+ Toast 提示信息
+ Picker 组件
+ Dialog 对话框
+ Scroll 滚动

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

### PageLoading

页面加载组件

属性

参数 | 说明 | 类型 | 可选 | 默认
-|:-:|-:
text | 加载的文字 | string | 是 | 加载中
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
music | 背景音乐 | string | 是 | /assets/imgs/bgMusic.mp3
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

