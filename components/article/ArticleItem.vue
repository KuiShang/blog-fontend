<template>
<article class="item">
    <header>
        <h2 class="title">
          <nuxt-link :to="articleLink">{{article.title}}</nuxt-link>
        </h2>
    </header>
    <section class="summary-wrapper">
        <p class="summary"> {{article.summary}}</p>
    </section>
    <footer class="footer">
        <time class="create-by">CREATE: {{article.createTime | date}}</time>
        <time class="update-by">UPDATE: {{article.updateTime | date}}</time>
    </footer>
</article>
</template>
<script>
export default {
  props: ['article'],
  computed: {
    articleLink () {
      return { name: 'article-id', params: { id: this.article.id } }
    }
  }
}
</script>
<style lang="scss" scoped>
.summary {
      margin: 0;
    font-size: 0.9em;
    line-height: 1.7em;
}
.footer {  
    display: block;
    margin: 1.75rem 0 0 0;
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #9EABB3;

    .update-by {
      display: inline-block;
      margin-left: 8px;
      padding-left: 12px;
      text-transform: uppercase;
      white-space: nowrap;
    }
}

@media only screen and (max-width: 600px) {
  h2.title {
    font-size: 2rem;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    .update-by {
      margin-left: 0;
      padding-left: 0;
    }
  }

}

</style>

