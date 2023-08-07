// 화면에 입력값 띄우기
$('#inputctn').on('input', function (e) {
        let elem = $(this).val();    
        $('.led1').val(elem);
})

// 호버 lev_btns

// 텍스트 속도
let speedLV = '0s';
$('.txtspeed').on('click',function() {
    speedLV = $(this).val();
    console.log(speedLV);
})

// 텍스트 크기
let sizeLV = '100px';
$('.txtsize').on('click',function() {
    $(this).toggleClass('border-light');
    sizeLV = $(this).val();
    console.log(sizeLV);
})

// 시작하기
$('.runbtn').on('click', function() {
    $('.led1').css({
        animationName: 'rolling1',
        animationDuration: `${speedLV}`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        fontSize: `${sizeLV}`,
    });
})

// runBtn.addEventListener("click", function() {
//     // inputElem.style.animation = "rolling1 3s linear infinite"

//     let roller = document.querySelector('.bannerled');
//     roller.id = 'roller1';
//     let clone = roller.cloneNode();
//     clone.id = 'roller2';


    
//     (document.querySelector('.banner-rap')).append(clone);

//     document.querySelector('#roller1').style.animation = "rolling1 3s linear infinite";
//     document.querySelector('#roller2').style.animation = "rolling2 3s linear infinite";
    // document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth+'px';
    
    // document.getElementById('roller1').style.animation = "3s linear 0s infinite normal forwards running rollingleft1";
    // document.getElementById('roller2').style.animation = "3s linear 0s infinite normal none running rollingleft2";
   
//})

