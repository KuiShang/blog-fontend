<template>
<article class="article-item">
    <header>
        <h2 class="title">
          <nuxt-link :to="articleLink">{{article.title}}</nuxt-link>
        </h2>
    </header>
    <section class="summary-wrapper">
        <p> {{article.summary}}</p>
    </section>
    <footer class="footer-wrapper">
        <time class="update-by">CREATE: {{article.createTime | date}}</time>
        <time class="update-by">UPDATE: {{article.updateTime | date}}</time>
    </footer>
</article>
</template>
<script>
export default {
  props: ['article'],
  computed: {
    articleLink () {
      return {name: 'article-id', params: {id: this.article.id}}
    }
  }
}
</script>
