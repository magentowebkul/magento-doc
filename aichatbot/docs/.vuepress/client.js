import { defineClientConfig } from 'vuepress/client'
import SidebarSearchLayout from './components/SidebarSearchLayout.vue'

export default defineClientConfig({
  layouts: {
    Layout: SidebarSearchLayout,
  },
})