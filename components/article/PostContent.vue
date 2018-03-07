<template>
  <div v-html="htm" ref="content"/>
</template>
<script>
import markdownIt from 'markdown-it'
import hljs from 'highlightjs'
export default {
  props: ['content'],
  methods: {
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
  }
}
</script>

