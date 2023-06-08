// addClass()
// removeClass()
// toggleClass()
// hasClass()

var li=$('#wrapper>li');
//li.addClass('color0');
li.addClass(function(i){
 return "color"+i;
});
$('button').eq(2).click(function(){
 li.toggleClass(function(i){
  return "color"+i;
 });
});
// attr()
// attr(name, value)
// attr(name,function(index){ })
// attr({object})

$('img').attr('width',200);
$('img').attr('width',function(i){
 return 100*(i+1);
});
$('img').attr({
 'width':function(i){
  return 100*(i+1);
  },
  'height':250
});
// removeAttr()
$('input').attr("value","이름을 입력하세요");
$('input').focus(function(){
 $(this).removeAttr("value");
});
// css(name,value)
// css(name,function(index){ })
// css(object)

console.log(color);
$('p').css('background',function(i){
 return color[i];
});
$('p').css({
 'background':function(i){
   return color[i];
 },
 'color':'white'
});