<template>
  <header class="main-header">
      <div class="content">
          <h1 class="page-title">KK. Blog</h1>
          <h2>相信技术改变世界，这里是我的点滴思考和总结</h2>
      </div>
  </header>
</template>
<script>
export default {
  name: 'blog-header'
}
</script>
<style lang="scss" scoped>
.main-header {
    position: relative;
    display: table;
    width: 100%;
    height: 100vh;
    margin-bottom: 5rem;
    text-align: center;
    background: #222 no-repeat center center;
    // filter: blur(10px);
    background-image: url(~/assets/img/mac.jpg);
    background-size: cover;
    overflow: hidden;

    .content {
        display: table-cell;
        vertical-align: middle;
        background-color: black;
        opacity: .5;
        .page-title {
          font-size: 80px;
          color: #fff;
        }
    }

}
</style>


