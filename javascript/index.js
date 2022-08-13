let slideIndex = 1;
let slides = document.getElementsByClassName("banner_picture_items small");//先抓手機板slides
let dots = document.querySelectorAll(".banner_slider.small .dot");//同樣的元素選起來，以陣列的方式被傳回
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slidesNum = slides.length;//圖片的張數

  if (n > slidesNum) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesNum}
  for (i = 0; i < slidesNum; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

window.addEventListener('resize', onResize)//變換圖片的大小

function onResize() {
    const windowWidth = window.innerWidth;//抓取螢幕寬度
    if (windowWidth > 1024) {//斷點設在平板橫向
        document.getElementById('large_carousel').classList.remove('disable');
        document.getElementById('small_carousel').classList.add('disable');
        dots = document.querySelectorAll(".banner_slider.large .dot");
        slides = document.getElementsByClassName("banner_picture_items large");

    } else {
        document.getElementById('large_carousel').classList.add('disable');
        document.getElementById('small_carousel').classList.remove('disable');
        dots = document.querySelectorAll(".banner_slider.small .dot");
        slides = document.getElementsByClassName("banner_picture_items small");
    }

    showSlides(1)
}

onResize();

// ================================
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:25,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      nav: true,
      responsive:{
    0:{
      items:2
      },
  768:{
      items:3
      },
  1024:{
      items:4
      },
  1200:{
      items:5
      }
  }
  });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    //====================

    VanillaTilt.init(document.querySelectorAll(".product_items_bag"), {
      max: 25,
      speed: 400,
      glare:true
    });
