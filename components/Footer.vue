<template>
  <footer class="footer-wrap">
    <span class="coyprights" v-html="content">
      
    </span>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        content: 'Copyrights © 2018 <a style="color:#64b5f6" href="https://github.com/KuiShang" target="_blank">Kui.Shang</a> All Rights Reserved.'
      }
    }
  }
</script>
<style lang="scss" scoped>
.footer-wrap {
    padding: 50px 20px 30px;
    color: #9eabb3;
    line-height: 1.5;
    text-align: center;
    font-size: 1.4rem;
    .coyprights {

    }

  a, a:active, a:hover, a:visited {
    cursor: pointer;
    color: #64b5f6;
    text-decoration: none;
  }
}
</style>

