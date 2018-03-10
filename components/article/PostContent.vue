<template>
  <div v-html="htm" ref="content"/>
</template>
<script>
import markdownIt from 'markdown-it'
import hljs from 'highlightjs'
export default {
  props: ['content'],
  methods: {
    buildContent () {
      this.$nextTick(() => {
        this.setImgStyle()
      })
    },
    setImgStyle () {
      this.$refs.content.querySelectorAll('img').forEach(img => {
        img.setAttribute(`style`,
          `position:relative; 
          display:block; 
          max-width:100%;
          height: auto;
          padding: 0.6em 0;
          left: 50%;
          transform: translateX(-50%);`)
      })
    }
  },
  computed: {
    htm () {
      return markdownIt({
        html: true,
        breaks: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value
            } catch (__) {}
          }
          return '' // use external default escaping
        }
      }).render(this.content)
    }
  },
  mounted () {
    this.buildContent()
  }
}
</script>

