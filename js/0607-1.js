// end() 문서객체선택을 한단계 뒤로 돌린다.
$('h2').css('background','orange').filter(":even")
.css('color','white').end()
.filter(':odd').css('color','red');
// eq(1)  0 부터 시작
// first()
// last()
// eq(-1) last
$('h2').eq(2).css('border',"2px solid black");
$('h2').first().css('border',"5px solid black");
$('h2').last().css('border',"5px solid black");
// 2px solid -> black(color->black)
$('h2').eq(-1).css('padding',"10px");
// add() 문서객체를 추가적으로 선택한다.
$('h2').css('font-size',"30px").add('h3')
.css('margin',0).css('font-style','italic');
// is()  문서객체의 특징을 판별

$('h2').each(function(){
 if($(this).is('.select')){
  $(this).css('border-radius',"30px")
  .css({textAlign:'center'})
 }
});
// slice(2,5) -> index2부터 5이전(4)까지 선택
$('h2').slice(2,5).css("margin","5px");
// size() -> 요소의 개수 length 
var h2length=$('h2').size();
console.log(h2length);
$("<h3>"+$('h2').size()+"</h3>").appendTo($('body'));
$("<h3>"+h2length+"</h3>").appendTo($('body'));
$(`<h3>${h2length}</h3>`).appendTo($('body'));
$('body').append(`<h3>${h2length}</h3>`);

// :contains  :has(), .not() closest()
$("h3:contains('내일')").css('border',"2px solid")
$("h3:has('b')").css('background','red');
$("h3").not(":has('b')").css('background','gold');

$('h3').closest('div').css('border',"5px double")
.css('padding','10px')
$('#box').css('border',"2px solid")
.css('background','gray')
.css('height','100px')
.css('width','200px');
// show, hide , toggle
$('button').eq(0).click(function(){
  $('#box').show();
});
$('button').eq(1).click(function(){
 $('#box').hide();
});
$('button').eq(2).click(function(){
 $('#box').toggle();
});
$('button').each(function(){
 $(this).click(function(){
  var html=$(this).html();
  var exec="$('#box')."+html+"()";
  eval(exec); // exec 문자열을 제이쿼리로 실행
 });
});

