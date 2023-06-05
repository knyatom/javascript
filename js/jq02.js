// jquery each
// jQuery.each( array, callback )
// jQuery.each( object, callback )
// .each(function(i,el){ })
$('#menu>li').each(function(i,el){
  $(this).text("리스트"+ i);
  $(this).css('border',"2px solid");
});
// innerHTML -> html()
// textContent -> text()
// forEach -> each
// length -> size()
var LI=$('ul>li');  // 제이쿼리 객체
var color=['red','blue','lime','tan','pink'];
for(var i=0; i<LI.size(); i++ ){
  //LI.eq(i).css('background', color[i]);
  //LI[i].css('background', color[i]);  XXX
}
LI.each(function(i,el){
 $(this).css('color', color[i]);
 $(this).css('border', "3px solid " + color[i]);
});
// 3px solid red

var 학생=[
 {name:"이순신", age:20},
 {name:"강감찬", age:30},
 {name:"원빈", age:40},
 {name:"원균", age:50},
];
$.each(학생,function(index,item){
 var out="";
 out+=`<p> ${index}-${item.name}:${item.age}</p>`; 
 $('body').append(out);
});

$('p').each(function(index,item){
 $(this).addClass('color'+index);
});
// classList.add()  -> addClass()
// classList.remove()  -> removeClass()

// index() 




