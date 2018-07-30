import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/Index'

// 示例
import ExampleIndex from '@/examples/Index'
import Example from '@/examples/Example'
import Color from '@/examples/Color'
import Button from '@/examples/Button'
import Loading from '@/examples/Loading'
import Icon from '@/examples/Icon'
import Radio from '@/examples/Radio'
import Checkbox from '@/examples/Checkbox'
import Select from '@/examples/Select'
import Picker from '@/examples/Picker'
import CityPicker from '@/examples/CityPicker'
import Popup from '@/examples/Popup'
import Toast from '@/examples/Toast'
import Dialog from '@/examples/Dialog'
import Scroll from '@/examples/Scroll'

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
        {path: '', component: Example, name: '示例首页'},
        {path: 'color', component: Color, name: 'Color'},
        {path: 'icon', component: Icon, name: 'Icon'},
        {path: 'button', component: Button, name: 'Button'},
        {path: 'loading', component: Loading, name: 'Loading'},
        {path: 'radio', component: Radio, name: 'Radio'},
        {path: 'checkbox', component: Checkbox, name: 'Checkbox'},
        {path: 'select', component: Select, name: 'Select'},
        {path: 'scroll', component: Scroll, name: 'Scroll'},
        {path: 'picker', component: Picker, name: 'Picker'},
        {path: 'city-picker', component: CityPicker, name: 'CityPicker'},
        {path: 'popup', component: Popup, name: 'Popup'},
        {path: 'Toast', component: Toast, name: 'Toast'},
        {path: 'Dialog', component: Dialog, name: 'Dialog'}
      ]
    }
  ]
})
