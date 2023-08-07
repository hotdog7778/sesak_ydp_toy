// 화면에 입력값 띄우기
$('#inputctn').on('input', function (e) {
  let elem = $(this).val();
  $('.led1').val(elem);
});

// 호버 lev_btns

// 텍스트 속도
let speedLV = '0s';
$('.tx_speed').on('click', function () {
  $('.tx_speed').removeClass('border-light');
  $(this).addClass('border-light');
  speedLV = $(this).val();
  $('.led1').css('animationDuration', `${speedLV}`);
  console.log(speedLV);
});

console.log($('.tx_size').hasClass('checked')); // false

// 텍스트 크기
let sizeLV = '100px';
$('.tx_size').on('click', function () {
  $('.tx_size').removeClass('border-light');
  $(this).addClass('border-light');

  sizeLV = $(this).val();

  // 미리보기 화면에 폰트사이즈 적용
  $('.led1').css('fontSize', `${sizeLV}`);
});

// 시작하기
$('.runbtn').on('click', function () {
  $('.led1').css({
    animationName: 'rolling1',
    animationDuration: `${speedLV}`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    fontSize: `${sizeLV}`,
  });
});
