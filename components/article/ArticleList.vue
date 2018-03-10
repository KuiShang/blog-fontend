<template>
  <transition-group name="list" tag="section" id="content">
      <article-item v-for="(article, idx) in page.data" :article="article" :key="idx" class="article-item">
      </article-item>

  </transition-group>
</template>
<script>
import ArticleItem from './ArticleItem'
export default {
  components: {ArticleItem},
  props: ['page', 'params']
}
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
    opacity: 0;
    transform: translateY(0);
    animation: fade-in 0.2s ease-in forwards;
    animation-delay: 0.3s;
}

.list-enter,
.list-leave-active {
    animation: fade-out 0.3s ease-in forwards;
}

@keyframes fade-in {
    0% {
        display: none;
        opacity: 0;
    }
    5% {
        display: black;
        opacity: 0;
        transform: translateY(3000px)
    }
    100% {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes fade-out {
    0% {
        display: block;
        opacity: 1;
    }
    100% {
        display: none;
        opacity: 0;
    }
}

.article-item {
  position: relative;
  width: 80%;
  max-width: 710px;
  margin: 4rem auto;
  padding-bottom: 4rem;
  border-bottom: #ebf2f6 1px solid;
  word-wrap: break-word;
}

</style>