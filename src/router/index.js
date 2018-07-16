import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/Index'

// 示例
import ExampleIndex from '@/examples/Index'
import Example from '@/examples/Example'
import Button from '@/examples/Button'
import Loading from '@/examples/Loading'
import Icon from '@/examples/Icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/examples',
      component: ExampleIndex,
      children: [
        { path: '', component: Example },
        { path: 'icon', component: Icon },
        { path: 'button', component: Button },
        { path: 'Loading', component: Loading }
      ]
    }
  ]
})
