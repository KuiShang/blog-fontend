<template>
  <transition-group name="list" tag="section">
      <article-item v-for="(article, idx) in {}" :article="article" :key="idx">
      </article-item>
      <pagination></pagination>
  </transition-group>
</template>
<script>
import ArticleItem from './ArticleItem'
import Pagination from '../Pagination'
export default {
  components: {Pagination, ArticleItem},
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
</style>