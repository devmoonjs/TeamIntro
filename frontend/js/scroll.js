$(document).ready(function(){   // 문서가 완전히 로드된 후에 내부의 코드를 실행, (html문서가 로딩이 끝난후 실행)
    let scrollBtn = $('#scrollBtn');    // id값 요소를 선택해서 저장

    $(window).scroll(function () {  // 사용자가 스크롤할 때마다 실행
       if($(window).scrollTop() > 30){  // 현재 스크롤 위치를 확인, 스크롤 위치가 30픽셀 보다 크면 if 실행
        scrollBtn.fadeIn(); // 스크롤 위치가 30px보다 크면 버튼 활성화 (나타남)
       } else {
        scrollBtn.fadeOut();    // 스크롤 위치가 30px 보다 작으면 버튼 비활성화 (사라짐)
       }
    });

    scrollBtn.click(function(){ //id값 요소를 저장한 변수가 클릭 이벤트가 나타나면 함수 실행
        $('html, body').animate({ scrollTop : 0 }, 100, 'linear');  // 페이지를 맨 위(스크롤 위치 0)로 부드럽게 스크롤, 100밀리초 동안 선형으로 진행
        return false;   // 버튼 클릭 시 기본 동작(링크가 걸려있다면 링크 이동을 방지)을 방지, 이벤트 기본 동작을 취소
    });

});