import VueVirtualScroller from 'vue-virtual-scroller'
import LogViewer from './LogViewer.vue'

export default function install(Vue) {
  Vue.use(VueVirtualScroller)
  Vue.component('log-viewer', LogViewer)
}

export { LogViewer }
