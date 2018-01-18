<template>
  <header class="main-header">
      <div class="content">
          <h1 class="page-title">KK. Blog</h1>
          <h2 class="detail">相信技术改变世界，这里记录了我平时的点滴思考和总结</h2>
      </div>
      <a class="scroll-down icon-arrow-left" href="#content" data-offset="-45">^
          <span class="hidden">Scroll Down</span>
      </a>
  </header>
</template>
<script>
export default {
  name: 'blog-header'
}
</script>
<style lang="scss" scoped>
.main-header {
    transition: all .3s ease-in-out;
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
    &::after {
    display: block;
    content: " ";
    width: 150px;
    height: 130px;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    background: radial-gradient(ellipse at center,  rgba(0,0,0,0.15) 0%,rgba(0,0,0,0) 70%,rgba(0,0,0,0) 100%);

    }

    .content {
        display: table-cell;
        vertical-align: middle;
        background-color: black;
        opacity: .5;
        .page-title {
          font-size: 16rem;
          color: #fff;
        }
    }
    .scroll-down {
        display: block;
        position: absolute;
        z-index: 100;
        bottom: 45px;
        left: 50%;
        margin-left: -16px;
        width: 34px;
        height: 34px;
        font-size: 70px;
        text-align: center;
        text-decoration: none;
        color: rgba(255,255,255,0.7);
        transform: rotate(-180deg);
        -webkit-animation: bounce 4s 2s infinite;
        animation: bounce 4s 2s infinite;
    }
    .hidden {
        text-indent: -9999px;
        visibility: hidden;
        display: none;
    }
}

@media only screen and (max-width: 900px) {
    .main-header {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        height: auto;
        min-height: 240px;
        height: 60vh;
        // padding: 15% 0;
        .content {
            .page-title {
                font-size: 10rem;
                letter-spacing: -1px;
            }
            .detail {
                font-size: 4rem;
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .main-header {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        height: auto;
        min-height: 180px;
        height: 40vh;
        // padding: 15% 0;
        .content {
            .page-title {
                font-size: 6rem;
                letter-spacing: -1px;
            }
            .detail {
              font-size: 2.5rem;
            }
        }
    }
}
</style>


