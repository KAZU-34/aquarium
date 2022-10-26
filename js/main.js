$(() => {
  // ページ内リンクスクロール
  $('a[href^="#"]').click(function(){
    var adjust = -88;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // スライダーの実装
  if (window.matchMedia("(max-width: 600px)").matches) {
    $(".slider-area").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    });
  } else {
    $(".slider-area").slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true
    });
  };

  // return-btnの実装
  let pagetop = $('.return-btn');
  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });

  // アコーディオンメニューの設定
  $(".label").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
  });

  // ハンバーガーメニュー
  $('.back').on('click', function() {
    $('.back, .hamburger-nav, .btn, .btn-line, .mask').toggleClass('open');
  });

  $('#header a[href]').on('click', function(event) {
    $('.back').trigger('click');
  });

  
});