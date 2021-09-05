//防止产生全局变量，所以添加匿名函数，并.call()立即，加!是防止浏览器出错
!function(){
  var view=document.querySelector("#mySlides")
  var controller={
    view:null,
    Swiper:null,
    SwiperOptions: {
      // Optional parameters
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    init:function(view){
      this.view=view
      this.initSwiper()
    },
    initSwiper:function(){
      this.Swiper = new Swiper(view.querySelector('.swiper'), 
      this.SwiperOptions);
    }
  }

  controller.init(view)
  
}.call()

