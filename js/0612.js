// $(selecetor).on(eventName,Listener);
// $(selecetor).on({object});

$('h3').on('click', function () {
 //$('h3').html("환영합니다");
 //$(this).html("환영합니다");
 $(this).html(function (i, html) {
  i++;
  return html + i + "별";
 });
});

$('h3').on({
 mouseenter: function () {
  $(this).addClass('bg');
 },
 mouseleave: function () {
  $(this).removeClass('bg');
 }
});

// 이벤트연결
var i = 0;
$('img').on({
 mouseenter: function () {
  $(this).attr('src', "imgs/cat2.png")
 },
 mouseleave: function () {
  $(this).attr('src', "imgs/cat1.png");
 },
 click: function () {
  i++;
  (i % 2 == 0) ? $(this).attr('src', "imgs/cat3.png")
   : $(this).attr('src', "imgs/cat4.png");
  // 삼항연산자
 },
 dblclick: function () { $(this).off() }
});

// 이벤트제거 - off();
// name : value 쌍, 

// 매개변수 context
// 두개입력할 수 있다

// click(function(){ }), mouseover()

$('li').click(function () {
 $(this).find('span').css('background', 'red');
 $('span', this).html("Monday");
});

// event 객체
$(document).mousemove(function (e) {
 var x = e.pageX;
 var y = e.pageY;
 $('p').html(`x: ${x} y:${y}`);
});
// 이벤트강제실행
// $().click(),   $().trigger('click')

// $('li').click();
// setInterval(() => {
//  $('img').click();
// }, 2000)

// setInterval(() => {
//  $('h3').trigger('mouseenter'); 
// }, 2000);
// setInterval(() => {
//  $('h3').trigger('mouseleave'); 
// }, 3000);

// 기본이벤트제거와 이벤트전달제거
$('section,div,p').css({
 border:'1px solid',
 margin: '10px',
 padding:'10px'
})
//$('section').on('click',function(){
  //$(this).css('background','pink');
//});
//$('div').on('click',function(){
 //$(this).css('background','blue');
//});
//$('p').on('click',function(e){ 
// $(this).css('background','gold');
 // e.preventDefault();
 // e.stopPropagation();
 //return false;
//});
// 동적인요소도 이벤트를 연결할때-이벤트위임
$('section').on('click','p',function(){
 $('p').css('background','steelblue');
});

// textarea글자를 입력할때
// 입력한 글자를 표시하고
// 남은글자수를 구하고, 넘치면
// 입력을 막고, 빨간색으로 표시하기
// keydown->keypress->keyup
$('textarea').keyup(function(){
 var 입력글자=$(this).val().length;
 var 남은글자=30-입력글자;
 $('h5').html(입력글자+"EA");
 if(남은글자>=0){
  $(this).css('color','blue');
 }else{
  //$(this).attr('disabled',true);
  $('h5').css('color','red').html("그만입력하세요");
  //this.returnValue=false;
  $(this).val('');  // 30자 넘으면 초기화
 }
});

// 윈도우이벤트
// ready, load, unload, resize, scroll, error
// scroll

// 무한스크롤 구현
// width(), height()
$(window).scroll(function(){
 var scrollTop=$(window).scrollTop();
 var windowHeight =$(window).height();
 var 문서높이=$(document).height();
 var 스크롤높이=scrollTop+windowHeight;

 // 스크롤높이와 문서높이가 같을때 객체를 추가한다.
 // 데이터를 가져와서 추가한다.
 if(스크롤높이>=문서높이-100){
   for(var i=0;i<10;i++){
    $('<h1>무한스크롤'+i+'</h1>').appendTo('body');
    $("<img src='./imgs/cat"+i+".png'>").appendTo('body');
   }
 }
});












