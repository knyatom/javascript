// 클래스추가
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
// 속성추가
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

// html()  text()
$('h1').first().html("<span>span추가</span>")
$('h1').last().text("<span>span추가</span>")
// html(function(index,html){ })
// text(function(index,html){ })

$('li').html(function(i){
 return $(this).html()+"-"+i+ "★" ;
});
$('#wrapper').css("border","2px solid");
$('li').text(function(i){
 return $(this).text()+"-"+i+ "<b></b>" ;
});

// remove()  문서객체 제거
// empty()   문서객체 내부 비움
//$('#wrapper').remove();
$('#wrapper').empty().css('padding','10px');

// 문서객체 조작끝

// 문서객체 생성
// createElement(tag)
// creatTextNode(text)
// appendChild(node)

$('<h1>welcome </h1>').appendTo('#wrapper');
$('<h1></h1>').html("안녕하세요").appendTo('#wrapper');

// 객체.appendTo(body)    $(body).append(추가할객체)
$('<img>').attr('src','imgs/cat2.png').appendTo('#wrapper');
$('<img>',{
  src:'imgs/cat3.png',
  width:100, 
  height:100
}).appendTo('#wrapper');

// 문서객체 삽입
// append = appendTo body
// prepend = prependTo
// after = insertAfter body
// before = insertBefore
$('#wrapper').append("<p>append</p>");
$('<p>appendTo</p>').appendTo('#wrapper');
$('#wrapper').prepend("<p>prepend</p>");
$('<p>prependTo</p>').prependTo('#wrapper');
$('#wrapper').after("<p>after</p>");
$('<p>insert After</p>').insertAfter('#wrapper');
$('#wrapper').before("<p>before</p>");
$('<p>insert After</p>').insertBefore('#wrapper');

// wrap()   개별적으로 감싸기  wrapAll() 전체감싸기
// unwrap()  
// clone()  복사하기












