$(() => {

  // ページ内リンクスクロール
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var target = $('html');
    var position = target.offset().top;
    target.animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // スライダーの実装
  $(".slider-area").slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });

  // return-btnの実装
  let pagetop = $('.return-btn');
  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });

  // header固定
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('header').addClass('is-fixed');
    } else {
      $('header').removeClass('is-fixed');
    }
  });

  // breadcrumbs固定
  $(window).scroll(function() {
    if ($(this).scrollTop() > 175.5) {
      $('.breadcrumbs').addClass('is-fixed-bre');
    } else {
      $('.breadcrumbs').removeClass('is-fixed-bre');
    }
  });

  // ハンバーガーメニュー
  $('.btn').on('click', function() {
    $('.hamburger-nav, .btn, .btn-line, .mask').toggleClass('open');
  });
});