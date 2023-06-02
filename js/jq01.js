// 필터선택자
// input:reset
// input:submit
// input:text
$('input:submit').css('color','red');
$('input:text').css('color','red');
$('input:button').css('color','red');

// input:focus
// input:checked
// input:disabled
// input:enabled
// option:selected

$('input:focus').css('background','gold');

// setInterval(function(){
//  $('input:focus').css('background','gold');
// },1000);

$('input:text').blur(function(){
  $(this).css('background','blue');
})
// input:blur -> XXXX
$('input:text').focus(function(){
 $(this).css('background','red');
});

$('select').change(function(){
 var 동물=$('option:selected').val();
 $('#info').html("<span>"+동물+"</span> 좋아요");
 $('span').css('color','blue');
});

// 필터선택자
// input:password

// 위치필터선택자
// input:odd  홀수  인덱스는 0부터 시작
// 요소:even  짝수
// 요소:first
// 요소:last

$('ul>li:odd').css('background','steelblue');
$('ul>li:even').css('background','cyan');
$('ul>li:last').css('border','3px solid red');
$('ul>li:first').css('border','3px solid red');

// 함수필터선택자
// li:eq(3)  3번째요소
// li:lt(2)  less than
// li:gt(2)  greater than
// li:not(:first)  first가 아닌거
// li:nth-child(2n)
// li:nth-of-type(2n)
// li:contains(문자열) 특정문자열을 포함하는 거

$('li:eq(5)').css('padding',"10px");
$('li:lt(3)').css('font-size',"20px");
$('li:gt(3)').css('font-size',"30px");
$('li:nth-child(2n)').css('color',"red");
$('li:nth-of-type(2n+1)').css('color',"blue");
$('li:contains("menu5")').css('border-radius',"30px");

// li:has("strong")  li태그중에 strong태그가 있는 객체선택
// $('li').closest('div')   li태그에서 가장가까운 div태그 선택
// $('a,span')  복합선택자 a태그, span태그 선택
// $('a','li') li태그에서 그 하위태그 a를 선택해라
// $('li').find('a')    li태그에서 그 하위태그 a를 선택해라
// $('li a')

$('li:has("span")').css('width','200px'); 
$('li').closest('ul').css('padding','20px'); 
$('a','li').css('font-weight','bold');
$('li').find('a').css('font-style','italic'); 









