# H5-sample

## 概述

手机端H5的示例模板，包含我们常用的一些设置和常用组件,项目采用[webapck](https://webpack.docschina.org/)进行打包，文档使用[docify](https://docsify.js.org/),基于vue开发。

特点：

+ 基于vue组件化开发
+ 使用es6
+ 热更新
+ css预编译

组件列表：

+ [PageLoading组件](#PageLoading组件)
+ [BgMusic组件](#Bgmusic组件)

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

### PageLoading组件

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

### BgMusic组件

为H5增加背景音乐

属性

参数 | 说明 | 类型 | 可选 | 默认
-|:-:|-:
music | 背景音乐 | string | 是 | /assets/imgs/bgMusic.mp3
show | 是否显示 | Boolean | 是 | true

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