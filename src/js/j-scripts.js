$(document).ready(function(){  
    Headerfix = document.getElementById("action");
    var myScrollFunc = function() {
        var y = window.scrollY;
        if (y >= 230) {
          Headerfix.className = "action n-hiden"
        } else {
          Headerfix.className = "action n-show"
        }
    };
    window.addEventListener("scroll", myScrollFunc);
    /* Owl Carousel */
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 9000,
      loop: true,
      margin: 0,
      dots: true,
      nav: true,
      items: 3,
      autoplayHoverPause: true,
      smartSpeed: 2000,

      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
          320: {
              items: 1
          },
          640: {
              items: 1
          },
          768: {
              items: 2
          },
          800: {
              items: 2
          },
          992: {
              items: 3
          }
      }

      });

      $('#_menu').click(function() {
        $(this).toggleClass('active');
        $('#es_menu').toggleClass('open');
        $(this).toggleClass('menu-open').toggleClass('menu-close');
        $('body').toggleClass('no-scroll')
    });
    
  var $grid;
  const initializeIsotopes = () => {
     $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
      })
  }
  setTimeout(()=>{ initializeIsotopes()  }, 3000);

  $('.filters ul li').click(function() {
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
  });
  });


    