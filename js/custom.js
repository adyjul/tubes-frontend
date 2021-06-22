// (function ($) {
//   "use strict";

$(document).ready(function () {
  //   $(".scroll-to-section").on("click", function (e) {
  //     var href = $(this).attr("href");

  //     var elementHref = $(href);

  //     $("body").animate(
  //       {
  //         scrollTop: elementHref.offset().top - 50,
  //       },
  //       2000,
  //       "swing"
  //     );

  //     //e.preventDefault();
  //   });

  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });

  $(".cob").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".left-content").height() - 20;
    var header = $(".navbar").height();

    if (scroll >= box - header) {
      $(".navbar").addClass("fixed-top");
      $(".navbar").css("position", "fixed");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").css("position", "");
    }
  });

  $(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

  $(".lomba-1").owlCarousel({
    loop: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

  $(".guru-1").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 4,
      },
    },
  });

  // Window Resize Mobile Menu Fix
  mobileNav();

  // Scroll animation init
  window.sr = new scrollReveal();

  // Window Resize Mobile Menu Fix
  $(window).on("resize", function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }

  

//   $.ajax({     
//     type: "GET",
//     url: 'http://uas-web.herokuapp.com/api/news',
//     data: data,
//     success: function (data) {
//         console.log(data);
//     },
//     dataType: "json"
// });


$(document).ready(function(){
  $.get("http://uas-web.herokuapp.com/api/news",function(data,status){	
    let json = data.data;
    let output = '';
    json.map((result)=>{
      output = `  
      <div class="row main-row ">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="blog-img">
          <img src="./images/menang-1.jpg" alt="" class="img-fluid">
        </div>
        <div class="row">
          <div class="col-sm-12 mb-2">
            <ul class="list-group list-group-horizontal ul-cls">
              <li class="list-group-item">
                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
              </li>
              <li class="list-group-item">
                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
              </li>
              <li class="list-group-item">
                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-8 col-md-12 col-sm-12">
        <div class="blog-title mb-3">
          <h3>${result.judul}</h3>
        </div>
        <div class="blog-date mb-3">
          <span>${result.tanggal}</span>
        </div>
        <div class="blog-desc mb-3">
          <p>${result.deskripsi}</p>
        </div>
        <div class="blog-read-more mb-3">
          <button class="btn btn-outline-dark">Baca Selengkapnya</button>
        </div>
      </div>
    </div>`;
    
    $(output).appendTo('.coba2');
    $(".coba2").addClass("owl-carousel");
    $(".coba2").addClass("owl-theme");
    $(".coba2").addClass("owl-loaded");
    $(".coba2").addClass("owl-drag");
    $(".coba2").addClass("lomba-1");
  })
});	
})



});

// })(window.jQuery);
