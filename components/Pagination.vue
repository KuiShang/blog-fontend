<template>
<nav class="pagination" role="navigation">
    <!-- <a class="newer-posts btn" href="/page/2/">← Newer Posts</a> -->
    <!-- <span :to="{path:prePage}" class="newer-posts btn" >← Newer Posts</span> -->
    <span @click="goPre" class="newer-posts btn" >← Newer Posts</span>
    <span class="page-number">Page {{page.current_page}} of {{totalPage}}</span>
    <!-- <a class="older-posts btn" href="/page/4/">Older Posts →</a> -->
    <span @click="goNext" class="older-posts btn" >Older Posts →</span>
</nav>
</template>
<script>
export default {
  props: ['page'],
  computed: {
    totalPage () {
      return Math.ceil(this.page.total / this.page.page_size)
    },
    prePage () {
      return `/page/${this.page.current_page - 1}`
    },
    nextPage () {
      return `/page/${this.page.current_page + 1}`
    },
    hasPre () {
      return this.page.current_page !== 1
    },
    hasNext () {
      return this.page.current_page < this.totalPage
    }
  },
  methods: {
    pageChange (page) {
      return {...this.$route.query, currentPage: page}
    },
    goPre () {
      if (this.hasPre) {
        // 页码在 首页 和 page页面 都有引用， 返回上一页时，如果当前是page页第二页，应该返回首页
        if (this.page.current_page === 2) {
          this.$router.go(-1)
        } else {
          this.$router.push(this.prePage)
        }
      } else {
        this.showToast({title: '没有上一页了哦～'})
      }
    },
    goNext () {
      if (this.hasNext) {
        this.$router.push(this.nextPage)
      } else {
        this.showToast({title: '没有下一页了哦～'})
      }
    }
  },
  notifications: {
    showToast: { // You can have any name you want instead of 'showLoginError'
      title: 'ops！',
      message: 'It\'s not a page.',
      type: 'warn' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  position: relative;
  width: 80%;
  max-width: 710px;
  margin: 4rem auto;
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  color: #9eabb3;
  text-align: center;
  cursor: pointer;
  .btn {
    color: #9eabb3;
    transition: all 0.2s ease;
    position: absolute;
    display: inline-block;
    padding: 0 15px;
    border: #bfc8cd 1px solid;
    text-decoration: none;
    border-radius: 4px;
    &:hover {
      color: #889093;
      border-color: #98a0a4;
    }
  }

  .newer-posts {
    left: 0;
  }
  .older-posts {
    right: 0;
  }
}
</style>

