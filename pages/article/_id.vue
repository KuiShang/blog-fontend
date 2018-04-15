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
        <div class="reprint_tips">
          <span>摘要: 原创出处：</span>
          <span >{{url_href}}</span>
          欢迎转载，保留摘要，谢谢！
        </div>
        <post-content :content="article.content"/>
      </section>
    </article>
  </main>
</template>
<script>
import service from '~/service/ArticleService'
import PostContent from '~/components/article/PostContent'
import moment from 'moment'
import Const from '~/utils/const/index.js'
export default {
  async asyncData (context) {
    let article = await service.getRender(context.params.id)
    console.log(article)
    return {
      article: article,
      url_href: `${Const.HOST_NAME}${context.route.fullPath}`
    }
  },
  components: { PostContent },
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
  },
  mounted () {
    // console.log('mounted', window.location.href)
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
  background-image: url(~/assets/img/blog_title.jpeg);
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
    max-width: 1000px;
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
  max-width: 1000px;
  margin: 4rem auto;
  padding-bottom: 4rem;
  border-bottom: #ebf2f6 1px solid;
  word-wrap: break-word;
  .reprint_tips {
    font-size: 14px;
    padding: 4px 6px;
    background-color: #ececec;
    margin: 10px 0;
    font-style: italic;
  }
}
</style>


