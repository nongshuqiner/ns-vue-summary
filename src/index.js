import Summary from './components/summary/index.js'
import SummaryItem from './components/summary-item/index.js'
// ...如果还有的话继续添加

// 样式
import './style/index.scss'

const components = [
  Summary,
  SummaryItem
  // ...如果还有的话继续添加
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.2', // 版本
  // install
  install,
  // 组件
  Summary,
  SummaryItem
  // ...如果还有的话继续添加
}

// module.exports.default = module.exports;
