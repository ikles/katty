jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  


//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');


  if ( isMobile.any() ) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    arrow.forEach(function (item) {
      let thisLink = item.previousElementSibling;
      let subMenu = item.nextElementSibling;
      let thisArrow = item;

      thisLink.classList.add('parent');
      item.addEventListener('click', function () {      
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    });
  }
  else {
    body.classList.add('mouse')
  }






  


  $('.burger').click(function () {
    $('nav.menu').toggleClass('show');
    $('.overlay').toggleClass('show');
  });




  $('ul.level-1 > .parent > span').click(function () {
    $('ul.level-1 > .parent').removeClass('active')
    $(this).closest('.parent').addClass('active');
    $('.level-2').removeClass('open');
    $(this).addClass('rotate90').siblings('.level-2').addClass('open');
  });

  $('ul.level-2 .parent > span').click(function () {    
    $('ul.level-2 .parent').removeClass('active')
    $(this).closest('.parent').addClass('active');
    $('.level-3').removeClass('open');
    $(this).addClass('rotate90').siblings('.level-3').addClass('open');
  });


  $('.back').click(function () {
    $(this).closest('.level-3').removeClass('open');
    $('.rotate90').removeClass('rotate90');
  });

  $('.back-2').click(function () {
    $(this).closest('.level-2').removeClass('open');
    $('.rotate90').removeClass('rotate90');
  });


  $('body').click(function () {    
    $('nav.menu').removeClass('show');
    $('.overlay').removeClass('show');
    $('.phone__modal').removeClass('show');    
    $('.sort__item').removeClass('open');
    $('.sort__item-rendered').removeClass('show');
  });


  $("nav.menu, .burger, .sort__item, .sort__item-rendered, .header__actions, .phone__modal").click(function (e) {
    e.stopPropagation();
  });

  $('.filters__more').click(function () {
    $('.sort__filters-row').slideToggle();
  });

  $('.menu__close').click(function () {    
    $('nav.menu').removeClass('show');
    $('.overlay').removeClass('show');
  });

  

  

  $('.topslider').slick({
    infinite: true,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: true,
    pauseOnHover: true,  
  });
  

  $('.teaser__row-slider').slick({
    infinite: true,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2        
      }
    }
    ]
  });
  
  $(window).resize(function() {
    if( $(window).width() < 641 ) {
      $('.teaser__row-slider').slick('unslick');
    }
  });


  if( $(window).width() < 641 ) {
    $('.teaser__row-slider').slick('unslick');
  }
  

  $('.teaser__slider').slick({
    infinite: true,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: false,
    pauseOnHover: true,     
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [

    {
      breakpoint: 641,
      settings: {
        arrows: true
      }
    }
    ]
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    vertical: true,
    focusOnSelect: true,
    responsive: [

    {
      breakpoint: 1200,
      settings: {
        vertical: false,
        slidesToShow: 3
      }
    }
    ]
  });


  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: true,
    smallBtn: false,
    toolbar: true,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });

  $('.favourites__remove').click(function () {
    $(this).closest('tr').remove();
  })


  $('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle().toggleClass('open-content');
  });


  function tabs(element) {    
    $(element).find('.tabs__list-item').click(function () {
      $(element).find('.tabs__list-item').removeClass('active');
      $(this).addClass('active');    
      let num = $(this).index();
      $(element).find('.tabs__content-list-item').removeClass('active');
      $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
    });
  }

  tabs('.card__tabs');
  tabs('.delivery__tabs');

/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/



  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).hide();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).hide();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.link1', '.modal-overlay_1', '.modal-close_1');
  popup('.link2', '.modal-overlay_2', '.modal-close_2');
  popup('.card__add', '.modal-overlay_3', '.modal-close_3');
  popup('.btn__quick', '.modal-overlay_4', '.modal-close_4');
  popup('.btn__discount', '.modal-overlay_5', '.modal-close_5');


  $('.header__phone').click(function (e) {
    e.preventDefault();
    $('.phone__modal').addClass('show');
    $('.overlay').addClass('show');
  });

/*.btn__quick
.btn__discount*/

  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }

  $('.sort__item').click(function () {
    $(this).toggleClass('open');
    $(this).find('.sort__item-rendered').toggleClass('show');
  });


//$('.js-select .select2-search--inline').html('Размер');



  if( $('.buy__quan').length ) {    
    $('.buy__quan').each(function () {
      const self = $(this);
      self.find('._plus').click(function () {
        if (self.find('input[type="text"]').val() < 100) {
          self.find('input[type="text"]').val(+self.find('input[type="text"]').val()+1);          
        }        
      });
      self.find('._minus').click(function () {
        if (self.find('input[type="text"]').val() >= 2) {
          self.find('input[type="text"]').val(+self.find('input[type="text"]').val()-1);
        }        
      });
    })
  }


  $('.basket-item__close').click(function () {
    $(this).closest('.basket-item').remove();
  })


  $("#video__play").click(function(e){
    e.preventDefault();
    var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
    $(this).parents('.js-video').html('<iframe width=100% height=100% src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });





}); //ready

