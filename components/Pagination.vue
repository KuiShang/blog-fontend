<template>
<nav class="pagination" role="navigation">
    <a class="newer-posts btn" href="/page/2/">← Newer Posts</a>
    <span class="page-number">Page 3 of 17</span>
    <a class="older-posts btn" href="/page/4/">Older Posts →</a>
</nav>
</template>
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

