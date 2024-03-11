// 헤더 서브메뉴 슬라이드 다운 (PC)
$('.navList, .sub_shadow').on('mouseenter mouseleave',(e)=>{
  console.log(e.type) //e.type을 이용해 mouseenter인지 leave인지 알수있다
  if(window.innerWidth > 1169 ){ //pc 상태(1169px보다 클때)일때만 작동하도록
    if(e.type == 'mouseenter'){
        $('.sub').stop().fadeIn(500);
      $('.sub_shadow').stop().slideDown();
      } else {
        $('.sub').stop().fadeOut(500,function(){
          //fadeOut한 다음에 콜백함수 실행
          $('.sub').removeAttr('style'); //모바일 버전을 대비해 html의 style을 없애줌
        });
        $('.sub_shadow').stop().slideUp(200,function(){
          $('.sub_shadow').removeAttr('style');
      });
      }
  }
})

// 헤더 각각의 서브메뉴 슬라이드 다운/색 변경 (mobile)
const $mainBtn = $('.navList > li > a');
$mainBtn.click(function(){
  if(window.innerWidth < 1169){ //mobile에서만 작동하도록 1170px보다 작을때,라는 조건을 걸음
    if(!$(this).parents('li').hasClass('on')){
      $('.navList>li').removeClass('on') //기존에 열려있는 것들을 다 닫음
      $('.sub').stop().slideUp(500);

      $(this).parents('li').addClass('on');
      $(this).siblings('.sub').stop().slideDown(500);
    } else {
      $(this).parents('li').removeClass('on');
      $(this).siblings('.sub').stop().slideUp(300);
    }
  }
})


// 헤더 햄버거 버튼 클릭 (mobile)
$('.trigger').click(function(){
  $(this).toggleClass('open');

  if($(this).hasClass('open')){
    $('.gnb').animate({right:0},400)
    $('header').animate({left:-220},400)
  } else {
    $('.gnb').animate({right:-230},200)
    $('header').animate({left:0},200)

    $('.navList>li').removeClass('on') //기존에 열려있던 것들을 다 닫음
    $('.sub').stop().slideUp(500);
  }
})


// read more 버튼

$('.more_btn').click(()=>{
  $('.item_wrap_more').stop().slideDown(300)
  $('.more_btn').hide()
})