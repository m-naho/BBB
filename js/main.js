$(function(){
  $('.hamburger').on('click', function(){
  hamburger();
  });
  $('#navi a').on('click',function(){
  hamburger();
  });
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