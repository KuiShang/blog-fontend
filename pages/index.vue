<template>
  <div class="container">
    <article-list></article-list>
  </div>
</template>

<script>
// import service from '~/service/ArticleService'
import ArticleList from '~/components/article/ArticleList'
import axios from 'axios'
export default {
  components: {ArticleList},
  async asyncData ({route: {query: {pageSize, currentPage}}}) {
    // let page = await service.list(currentPage, pageSize)
    // console.log(service)
    console.log('111111111111111111111111111111111111111111111111111111111111111')
    let page = {}
    axios.get('http://127.0.0.1:9528/v6/article/list')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    debugger
    // if (page.data.length === 0) {
    //   throw new Error('page number error: ' + currentPage)
    // }
    return {
      page: page
    }
  },
  head () {
    return {
      title: 'blog-name',
      meta: [
        {name: 'description', content: 'meta-description'}
      ]
    }
  }
}
</script>
<style scoped>
</style>
