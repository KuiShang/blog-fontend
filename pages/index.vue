<template>
  <div class="container">
    <blog-header></blog-header>
    <article-list :page="page"></article-list>
    <pagination key="pagination" :page = page></pagination>
  </div>
</template>
<script>
import service from '~/service/ArticleService'
import ArticleList from '~/components/article/ArticleList'
import BlogHeader from '~/components/BlogHeader'
import Pagination from '~/components/Pagination'
export default {
  components: {ArticleList, BlogHeader, Pagination},
  async asyncData ({route: {query: {pageSize, currentPage}}}) {
    let page = await service.list(currentPage, pageSize)
    console.log(page)
    console.log(123)
    // this.showLoginError()
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
  },
  destroyed () {
  },
  notifications: {
    showLoginError: { // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>
<style lang="scss" scoped>
.container {

}
</style>
