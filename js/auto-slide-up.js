//防止产生全局变量，所以添加匿名函数，并.call()立即，加!是防止浏览器出错
!function(){  
    //添加offset类
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () {
    findClosestAndRemoveOffset()
}, 1000)
window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset()
})

/*以下是方法*/
function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    //minIndex 就是距离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
      brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }


  let liTags = document.querySelectorAll('nav.menu>ul>li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')
    }
  }

}.call()

