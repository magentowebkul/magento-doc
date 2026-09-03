<template>
  <div class="mermaid-actions">
    <button class="preview-button" @click="previewSvg" title="preview" v-html="previewIcon"></button>
    <button class="download-button" @click="downloadSvg" title="download" v-html="downloadIcon"></button>
  </div>
  <div ref="wrapperRef" class="mermaid-wrapper">
    <div v-if="svgContent" class="mermaid-content" v-html="svgContent"></div>
    <LoadingIcon v-else class="mermaid-loading" :height="96" />
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'
import { useDarkMode, decodeData, LoadingIcon, isFunction } from '@vuepress/helper/client'
import { useMermaidOptions } from 'vuepress-plugin-md-enhance/client'

const defaultMermaidConfig = { useMaxWidth: false }

const getThemeVariables = (isDark) => ({
  dark: isDark,
  background: isDark ? "#1e1e1e" : "#fff",
  primaryColor: isDark ? "#389d70" : "#4abf8a",
  primaryBorderColor: isDark ? "#389d70" : "#4abf8a",
  primaryTextColor: isDark ? "#fff" : "#000",
  secondaryColor: "#ffb500",
  secondaryBorderColor: isDark ? "#fff" : "#000",
  secondaryTextColor: isDark ? "#ddd" : "#333",
  tertiaryColor: isDark ? "#282828" : "#efeef4",
  tertiaryBorderColor: isDark ? "#bbb" : "#242424",
  tertiaryTextColor: isDark ? "#ddd" : "#333",
  noteBkgColor: isDark ? "#f6d365" : "#fff5ad",
  noteTextColor: "#242424",
  noteBorderColor: isDark ? "#f6d365" : "#333",
  lineColor: isDark ? "#d3d3d3" : "#333",
  textColor: isDark ? "#fff" : "#242424",
  mainBkg: isDark ? "#389d70" : "#4abf8a",
  errorBkgColor: "#eb4d5d",
  errorTextColor: "#fff",
  nodeBorder: isDark ? "#389d70" : "#4abf8a",
  nodeTextColor: isDark ? "#fff" : "#242424",
  signalTextColor: isDark ? "#9e9e9e" : "#242424",
  classText: "#fff",
  labelColor: "#fff",
  attributeBackgroundColorEven: isDark ? "#0d1117" : "#fff",
  attributeBackgroundColorOdd: isDark ? "#161b22" : "#f8f8f8",
  fillType0: isDark ? "#cf1322" : "#f1636e",
  fillType1: "#f39c12",
  fillType2: "#2ecc71",
  fillType3: "#fa541c",
  fillType4: "#25a55b",
  fillType5: "#13c2c2",
  fillType6: "#096dd9",
  fillType7: "#aa6fe9"
})

export default {
  name: 'Mermaid',
  components: {
    LoadingIcon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const isDarkMode = useDarkMode()
    const mermaidOptions = useMermaidOptions()
    const wrapperRef = ref(null)
    const svgContent = ref('')
    
    const decodedCode = computed(() => decodeData(props.code))
    
    let activeRenderToken = 0
    
    const renderSvg = async () => {
      activeRenderToken++
      const currentToken = activeRenderToken
      
      try {
        const { default: mermaid } = await import('mermaid/dist/mermaid.esm.min.mjs')
        
        if (currentToken !== activeRenderToken) return
        
        const { themeVariables, ...options } = mermaidOptions || {}
        
        const mergedThemeVariables = {
          ...getThemeVariables(isDarkMode.value),
          ...(isFunction(themeVariables) ? themeVariables(isDarkMode.value) : themeVariables)
        }
        
        mermaid.initialize({
          theme: 'base',
          themeVariables: mergedThemeVariables,
          flowchart: defaultMermaidConfig,
          sequence: defaultMermaidConfig,
          journey: defaultMermaidConfig,
          gantt: defaultMermaidConfig,
          er: defaultMermaidConfig,
          pie: defaultMermaidConfig,
          ...options,
          startOnLoad: false
        })
        
        const uniqueRenderId = `${props.id}-${currentToken}`
        
        const { svg } = await mermaid.render(uniqueRenderId, decodedCode.value)
        
        if (currentToken !== activeRenderToken) return
        
        svgContent.value = svg
      } catch (err) {
        console.error('Failed to render Mermaid diagram:', err)
      }
    }
    
    const previewSvg = () => {
      if (!svgContent.value) return
      const { body } = document
      const previewDiv = document.createElement('div')
      previewDiv.classList.add('mermaid-preview')
      previewDiv.innerHTML = svgContent.value
      body.appendChild(previewDiv)
      previewDiv.addEventListener('click', () => {
        body.removeChild(previewDiv)
      })
    }
    
    const downloadSvg = () => {
      if (!svgContent.value) return
      const svgDataUrl = `data:image/svg+xml;charset=utf8,${svgContent.value
        .replace(/<br>/g, '<br />')
        .replace(/%/g, '%25')
        .replace(/"/g, '%22')
        .replace(/'/g, '%27')
        .replace(/&/g, '%26')
        .replace(/#/g, '%23')
        .replace(/{/g, '%7B')
        .replace(/}/g, '%7D')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')}`
      
      const downloadLink = document.createElement('a')
      downloadLink.setAttribute('href', svgDataUrl)
      downloadLink.setAttribute('download', `${props.title ? decodeData(props.title) : props.id}.svg`)
      downloadLink.click()
    }
    
    onMounted(() => {
      watch([isDarkMode, decodedCode], () => {
        renderSvg()
      }, { immediate: true, flush: 'post' })
    })
    
    const previewIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'
    const downloadIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'

    return {
      svgContent,
      wrapperRef,
      previewSvg,
      downloadSvg,
      previewIcon,
      downloadIcon
    }
  }
}
</script>
