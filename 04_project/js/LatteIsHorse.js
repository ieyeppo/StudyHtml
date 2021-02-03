$(document).ready(function () {
    //풀다운 메뉴
    $('.outer-menu').hover(function () {
        $(this).find('.inner-menu').css('display', 'block');
    }, function () {
        $(this).find('.inner-menu').css('display', 'none');
    });

    //이미지 로드 확인
    $('#main-section').imagesLoaded(function () {
        //jQuery Masonry 플러그인 적용
        $('#main-section').masonry({
            itemSelector: '.paper',
            columnWidth: 30
            // isAnimated:true
        });
    });


    //라이트박스 제거 이벤트
    $('#darken-background').click(function () { hideLightBox(); });

    //클릭 이벤트 연결
    $('.paper').click(function () { showLightBox(); });

    //라이트 박스 제거 이벤트 보조
    $('#lgithbox').click(function (event) { event.stopPropagation(); });
});

//라이트 박스
function showLightBox() {
    $("#ramdom-image").attr({
        src: function() {
            var rnd_height = 500 + Math.floor(Math.random() * 100);
            return "https://placekitten.com/600/" + rnd_height;
        }
    });

    //라이트박스를 보이게 합니다.
    $('#darken-background').show();
    $('#darken-background').css('top', $(window).scrollTop());

    // 스크롤 못하게 하기
    $('body').css('overflow', 'hidden');
}

function hideLightBox() {
    //라이트박스를 보이지 않게 합니다..
    $('#darken-background').hide();

    // 스크롤 못하게 하기
    $('body').css('overflow', 'auto');
}