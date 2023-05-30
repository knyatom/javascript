// div.addEventListener('click', function () {
//  console.log("div Click");
// });
// span.addEventListener('click', function () {
//  console.log("span Click");
// });
// btn.addEventListener('click', function () {
//  console.log("btn Click");
// });

// 이벤트위임구현
// div.addEventListener('click', function (e) {
//  var id = e.target.id;
//  console.log(e.currentTarget);
//  console.log(e.target);
//  if (id == "div") {
//   console.log("div Click");
//  } else if (id == "span") {
//   console.log("span Click");
//  } else if (id == "btn") {
//   console.log("btn Click");
//  }
//  var tagName=e.target.tagName;
//  if (tagName == "DIV") {
//   console.log("div Click");
//  } else if (tagName == "SPAN") {
//   console.log("span Click");
//  } else if (tagName == "BUTTON") {
//   console.log("btn Click");
//  }
// });

document.addEventListener('click', function (e) {
 //console.log(e.srcElement);
 var target=e.target || e.srcElement;
 if (e.target.tagName == "DIV") {
  console.log("div Click");
 } else if (e.target.tagName == "SPAN") {
  console.log("span Click");
 } else if (e.target.tagName == "BUTTON") {
  console.log("btn Click");
 }
});

// 키보드관련 이벤트
// event.keyCode
// String.fromCharCode()
window.onkeydown=function(e){
 console.log(e.keyCode); // ASCII
 console.log(String.fromCharCode(e.keyCode));
 if(e.keyCode==65) {
  document.querySelector('body').style.background='red'
 }
 if(e.keyCode==66) {
  document.querySelector('body').style.background='blue'
 }
 if(e.keyCode==67) {
  document.querySelector('body').style.background='lime'
 }
 if(e.keyCode==68) {
  document.querySelector('body').style.background='pink'
 }
}

var count=0;
//var frames=[ 'cat1.png' ];
setInterval(function(){
 count = (count % 10)+1;
 img.src="./imgs/cat"+count+".png";
 img.width=200;
 img.height=200;
},2000);

// css파일에서 이미지폴더는 ../ 상위폴더로 이동하지만
// js파일에서 이미지폴더는 html에서 ./ 현재폴더로 이동하면
// 된다.

var outer=document.querySelector('.outer');
var inner=document.querySelector('.inner');

outer.onmouseover=function(){
 document.body.append("<h1>mouseover</h1>");
}
outer.onmouseout=function(){
 document.body.append("<h1>mouseout</h1>");
}
outer.onmouseenter=function(){
 document.body.append("<h1>mouseenter</h1>");
}
outer.onmouseleave=function(){
 document.body.append("<h1>mouseleave</h1>");
}
// over는 이벤트 버블링이 적용
// enter는 안에 있는 지 여부만 따짐

