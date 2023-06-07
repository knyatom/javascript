// end() 문서객체선택을 한단계 뒤로 돌린다.
$('h2').css('background','orange').filter(":even")
.css('color','white').end()
.filter(':odd').css('color','red');
// eq(1)  
// first()
// last()
// eq(-1) last
$('h2').eq(2).css('border',"2px solid black");
$('h2').first().css('border',"5px solid black");
$('h2').last().css('border',"5px solid black");
// 2px solid -> black(color->black)
$('h2').eq(-1).css('padding',"10px");
