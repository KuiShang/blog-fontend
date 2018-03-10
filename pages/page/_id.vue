<template>
  <div class="container">
    <pagination key="pagination_up" :page = page></pagination>
    <article-list :page="page"></article-list>
    <pagination key="pagination_down" :page = page v-show="hasNext"></pagination>
  </div>
</template>
<script>
import service from '~/service/ArticleService'
import ArticleList from '~/components/article/ArticleList'
import Pagination from '~/components/Pagination'
export default {
  components: {ArticleList, Pagination},
  async asyncData ({route}) {
    let page = await service.list(Number(route.params.id))
    console.log(page)
    return {
      page: page
    }
  },
  computed: {
    hasNext () {
      let totalPage = Math.ceil(this.page.total / this.page.page_size)
      return this.page.current_page < totalPage
    }
  },
  destroyed () {
  }
}
</script>
<style lang="scss" scoped>
.container {

}
</style>
