<template>
  <div class="container">
    <article-list></article-list>
  </div>
</template>

<script>
import service from '~/service/ArticleService'
import ArticleList from '~/components/article/ArticleList'

export default {
  components: {ArticleList},
  async asyncData ({route: {query: {pageSize, currentPage}}}) {
       let page = await service.list(currentPage, pageSize)
    if (page.data.length === 0) {
      throw new Error('page number error: ' + currentPage)
    }
    return {
      page: page
    }
  },
  head () {
    return {
      title: this.$setting('blog-name'),
      meta: [
        {name: 'description', content: this.$setting('meta-description')}
      ]
    }
  }
}
</script>

<style scoped>

</style>
