<template>
  <main role="main">
      <div class="container">
          <section class="error-details">
            <figure class="error-image">
            </figure>
            <section class="error-message">
              <h1 class="error-code">{{ error.statusCode }}</h1>
              <h2 class="error-description">{{ error.message }}</h2>
              <a class="error-link" :href="href">Go to the front page →</a>
            </section>
          </section>
      </div>
    </main>
</template>
<script>
import Const from '~/utils/const/index.js'
export default {
  props: ['error'],
  layout: 'test',
  computed: {
    href () {
      return Const.HOST_NAME
    }
  }
}
</script>

<style lang="scss" scoped>
  figure {
    margin: 0 40px;
  }
.container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
      .error-details {
        display: flex;
        .error-image {
            display: inline-block;
            vertical-align: middle;
            min-width: 96px;
            height: 150px;
            background-image: url(~/assets/img/404-ghost@2x.png);
            background-size: contain;
        }
        .error-message {
            position: relative;
            top: -5px;
            padding-top: 5px;
            
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
            .error-code {
                margin: 0;
                font-size: 5.0em;
                line-height: .9em;
                color: #979797;
            }
            .error-description {
                margin: 0;
                padding: 0;
                font-weight: 300;
                font-size: 1.2em;
                color: #979797;
                border: none;
            }
            a {
                color: #5BA4E5;
                text-decoration: none;
                -webkit-transition: background .3s,color .3s;
                transition: background .3s,color .3s;
            }
        }
      }
    
}
</style>
