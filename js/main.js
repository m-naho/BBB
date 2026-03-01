$(window).on('load', function() {
  $('.hamburger').on('click', function(){
  hamburger();
  });
  $('#navi a').on('click',function(){
  hamburger();
  });


// inview
$('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    $(this).stop().addClass('slide-left');
  }
});
$('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('slide-right');
    }
  });

// ハンバーガーメニュー共通処理
function hamburger() {
  $('.hamburger').toggleClass('active');
  if ($('.hamburger').hasClass('active')) {
    $('#navi').addClass('active');
  } else {
    $('#navi').removeClass('active');
  }
}
});