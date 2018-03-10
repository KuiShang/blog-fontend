<template>
  <main class="content">
    <article class="detail-article">
      <header class="detail-banner" :style="{backgroundImage: article.banner && `url(${article.banner})`}">
      <div class="container">
        <h1 class="title">{{article.title}}</h1>
        <div class="update-by">
            <i class="icono-tag"/>
            <span v-html="tagNames"/>
        </div>
        <div class="time">
          Posted on <span property="datePublished">{{modify_time}}</span>
        </div>
      </div>
      </header>
      <section class="content-wrapper">
        <post-content :content="article.content"/>
      </section>
    </article>
  </main>
</template>
<script>
import service from '~/service/ArticleService'
import PostContent from '~/components/article/PostContent'
import moment from 'moment'
export default {
  async asyncData ({ params }) {
    let article = await service.getRender(params.id)
    // console.log(12)
    // console.log(page)
    return {
      article: article
    }
  },
  components: { PostContent },
  data () {},
  computed: {
    tagNames () {
      return this.article.tags.map(e => e.name).join(',')
    },
    modify_time () {
      return moment(this.article.modify_time).format('YYYY-MM-DD')
    }
  },
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-banner {
  display: table;
  width: 100%;
  height: 100vh;
  margin-bottom: 5rem;
  text-align: center;
  background: #222 no-repeat center center;
  background-size: cover;
  overflow: hidden;
  height: 45vh;
  min-height: 180px;
  h1 {
    color: white;
  }
  .container {
    color: white;
    margin: 0 auto;
    width: 80%;
    max-width: 710px;
    text-align: left;
    padding-top: 10%;
  }

}

.content-wrapper {
  margin-top: 0;
  border-bottom: none;
  padding-bottom: 0;
  position: relative;
  width: 80%;
  max-width: 710px;
  margin: 4rem auto;
  padding-bottom: 4rem;
  border-bottom: #ebf2f6 1px solid;
  word-wrap: break-word;
}
</style>


