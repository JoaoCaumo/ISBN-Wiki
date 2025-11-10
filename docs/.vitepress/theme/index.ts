import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title': () =>
        h('a', { href: '/WikiHome/', 'aria-label': 'Go to home' }, [
          h('img', { src: '/Home/Images/SAP_Logo.svg', alt: 'SAP', height: 24 })
        ])
    })
  }
}
