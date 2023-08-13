// 숨김 화면
$('.set_effect *').css('display', 'none');

// 화면에 입력값 띄우기
// keydown 이벤트를 쓰면 입력칸에는 한글자씩 더들어가는데 미리보기 화면에는 그 한글자가 안떠서 input 이벤트로 대체
$('#inputctn').on('input', function (e) {
  let elem = $(this).val();
  $('.led1').val(elem);
});

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

// 미리보기
$('.bt_pre_view').on('click', function () {
  $('.led1').css({
    animationName: 'rolling1',
    animationDuration: `${speedLV}`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    fontSize: `${sizeLV}`,
  });
});

// 효과넣기 버튼 토글
$('.bt_set_effect').on('click', function () {
  $('.set_effect *').toggle();
});

// 구글 폰트 사용법 ( CSS에 등록 )
// font-family: 'Anton', sans-serif;
// font-family: 'Handjet', cursive;
// font-family: 'Noto Sans KR', sans-serif;
// font-family: 'Oswald', sans-serif;
// font-family: 'Ubuntu', sans-serif;

console.log($('./f-sty').style('fontFamily'));

$('./f_sty').on('click', function () {
  let antonFont = $(this).hasClass('f-anton');
  let handjetFont = $(this).hasClass('f-handjet');
  let ubuntuFont = $(this).hasClass('f-ubuntu');

  if (antonFont === true) {
    $('.led1').css({
      fontFamily: 'Anton',
      sansSerif,
    });
  }
});
