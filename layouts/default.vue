<template>
  <div>
    <nuxt/>
    <div class="gotop" :class="{show : isShow}" @click="scrollTop">
      <i class=" el-icon-caret-top"></i>
    </div>
    <my-footer/>
  </div>
</template>
<script>
import MyFooter from '~/components/Footer.vue'
import Animate from '~/utils/tween/animation'
// import jquery from 'jquery'
function throttle (func, wait, options) {
  /* options的默认值
  *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
  *  options.leading = true
  * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
  * options.trailing = true
  * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
  */
  var context, args, result
  var timeout = null
  var previous = 0
  if (!options) options = {}
  var later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    var now = Date.now()
    if (!previous && options.leading === false) previous = now
    // 计算剩余时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    MyFooter
  },
  mounted () {
    window.addEventListener('scroll', throttle(this.handleScroll, 800))
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop > 500) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    scrollTop () {
      Animate(document.documentElement.scrollTop, 0, 'Circ.easeOut', 600, (value) => {
        document.documentElement.scrollTop = value
      })
      // let timer = window.requestAnimationFrame(function fn () {
      //   console.log(123)
      //   var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   if (top <= 0) {
      //     cancelAnimationFrame(timer)
      //   } else {
      //     document.documentElement.scrollTop = top - 20
      //     timer = requestAnimationFrame(fn)
      //   }
      // })
      // console.log(document.documentElement.scrollTop)
      // let timer = setInterval(() => {
      //   var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //   if (top <= 0) {
      //     clearInterval(timer)
      //   }
      //   document.documentElement.scrollTop = top - 20
      // }, 10)
      // console.log(document.body.scrollTop)

      // jquery(document.documentElement).animate({'scrollTop': 0})
      // velocity(document.documentElement, {
      //   top: 0
      // }, {
      //   duration: 1000
      // })
      // var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // new Animate(document.documentElement).start('scrollTop', top, 0, 500, 'strongEaseIn')
      // document.documentElement.scrollTop = 0
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      // var fn = function () {
      //   document.documentElement.scrollTop = scrollTop - 10
      //   if (document.documentElement.scrollTop === 0) {
      //     clearInterval(timer)
      //     console.log('kk', timer)
      //   }
      // }
      // let timer = window.setInterval(fn, 200)
    }
  }
}
</script>

<style lang="scss" scoped>


.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

  .gotop {
    background-color: #fff;
    position: fixed;
    right: 60px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0,.42);
    z-index: 5;
    opacity: 0;
    transform: translateX(150px);
    i {
      color: #409eff;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
  }
  .gotop.show {
    opacity: 1;
    transform: translateX(0);
  }

</style>
