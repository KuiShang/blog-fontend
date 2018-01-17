<template>
  <div class="container">
    <article-list :page="page"></article-list>
  </div>
</template>
<script>
import service from '~/service/ArticleService'
import ArticleList from '~/components/article/ArticleList'
export default {
  components: {ArticleList},
  async asyncData ({route: {query: {pageSize, currentPage}}}) {
    let page = await service.list(currentPage, pageSize)
    // console.log(12)
    // console.log(page)
    return {
      page: page
    }
  },
  head () {
    return {
      title: '人生苦短, 我用JavaScript',
      meta: [
        {name: 'description', content: 'meta-description'}
      ]
    }
  }
}
</script>
<style scoped>
</style>
