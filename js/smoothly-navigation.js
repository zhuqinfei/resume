//防止产生全局变量，所以添加匿名函数，并.call()立即，加!是防止浏览器出错
!function () {
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    aTags: null,
    init: function () {
      this.view = view
      this.initAnimation()
      this.bindEvents()
    },
    initAnimation: function () {
      function animate(time) {    //缓动的文件引用函数
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function (element) {
      let top = element.offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      var s = targetTop - currentTop
      var coords = { y: currentTop };//缓慢效果实现过程
      var t = Math.abs(s / 100 * 300)
      if (t > 500) { t = 500 }
      const tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
          window.scrollTo(0, coords.y)
        })
        .start();
    },
    bindEvents: function () {
      let aTags = view.querySelectorAll("nav.menu>ul>li>a")
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href')
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    },
  }
  controller.init(view)
}.call()







