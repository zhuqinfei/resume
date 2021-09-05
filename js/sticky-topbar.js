//防止产生全局变量，所以添加匿名函数，并.call()立即，加!是防止浏览器出错
!function () {
  var view = document.querySelector("#topNavBar")
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
      //this.bindEvents.call(this)
    },
    bindEvents:function(){ //绑定事件只做绑定事情
      var view=this.view
      window.addEventListener('scroll', (x)=> { //这里要用箭头函数，不然this指的是滚动元素
        if (window.scrollY > 0) {
            this.active()
        } else {
            this.deactive()
        }
      })
    },
    active:function(){
      this.view.classList.add('sticky')
    },
    deactive:function(){
      this.view.classList.remove('sticky')
    }
    
  }
  controller.init(view)
  //controller.init.call(controller,view)

}.call()

