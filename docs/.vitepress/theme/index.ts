import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'
import { h } from 'vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'navbar-logo': () =>
        h('a', { href: withBase('/') }, 'ISBN Product Security')
    })
  }
}
