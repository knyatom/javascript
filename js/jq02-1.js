$(document).ready(function () {
 $('h3').css({
  backgroundColor: "black",
  color: 'white'
 });
 // index가 짝수인 객체만 선택
 $('h3').filter(':even').css({
  border: "5px solid red"
 })
 // index가 3의 배수인 경우??
 $('h3').filter(function (index) {
  return index % 3 == 0;
 }).css('font-size',"30px");

 $('h3').filter(function (index) {
  return index % 3 !== 0;
 }).css('color',"red");


}); // end

// filter, end, eq, first, last, add
// is, find()
// 문서객체선택과 탐색
// filter(selector) filter(function)
