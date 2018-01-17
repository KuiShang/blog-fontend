<template>
  <main class="content">
    <article class="detail-article">
      <header class="detail-banner">
        <h1 class="title">{{article.title}}</h1>
      </header>
      <section>
        <div class="update-by">
            <i class="icono-tag"/>
            <span v-html="tagNames"/>
        </div>
        <post-content :content="article.content"/>
      </section>
    </article>
  </main>
</template>
<script>
import service from '~/service/ArticleService'
import PostContent from '~/components/article/PostContent'
export default {
  async asyncData ({params}) {
    let article = await service.getRender(params.id)
    // console.log(12)
    // console.log(page)
    return {
      article: article
    }
  },
  components: {PostContent},
  data () {

  },
  computed: {
    tagNames () {
      return this.article.tags.map(e => e.name).join(',')
    }
  }
}
</script>

