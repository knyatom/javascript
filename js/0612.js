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
var i=0;
$('img').on({
 mouseenter: function () {
  $(this).attr('src',"imgs/cat2.png")
 },
 mouseleave: function () {
  $(this).attr('src',"imgs/cat1.png");  
 },
 click:function(){  
  i++;
  (i%2==0) ? $(this).attr('src',"imgs/cat3.png")
           : $(this).attr('src',"imgs/cat4.png");
           // 삼항연산자
 },
 dblclick:function(){ $(this).off() }
});

// 이벤트제거 - off();
// name : value 쌍, 

