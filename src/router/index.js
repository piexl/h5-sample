import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/Index'

// 示例
import Example from '@/examples/Index'
import Button from '@/examples/Button'

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
      component: Example,
      children: [
        { path: '', component: Button },
        { path: 'button', component: Button }
      ]
    }
  ]
})
