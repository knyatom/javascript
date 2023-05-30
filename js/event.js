// window.onload=function(){  }
// load 이벤트이름, 이벤트타입
// onload 이벤트속성
// 할당된함수 : 이벤트리스너, 이벤트핸들러
// 이벤트연결한다.
// 이벤트관련속성

// 이벤트 모델
// DOM Level 0
// 인라인이벤트모델, 기본이벤트모델(고전이벤트)
// 한 객체에 두번이상 적용할 수 없다.

// DOM Level 2
// 표준이벤트모델, 익스플로러이벤트모델
// addEventListener(On)
// attachEvent

// 익스플로러면 attachEvent 를 사용하고
// 그외에는 addEventListener를 사용해라
// 크로스브로우징위한 코드구현하자.

// 이벤트 제거
header.onclick = function (e) {
 console.log(this);
 console.log(e);  // e, window.event(고전)
 var event = e || window.event;

 header.onclick = null; // 이벤트제거
 for (var key in e) {
  box.innerHTML += `<p>${key} : ${e[key]} </p> `
 }
 console.log(e.target); // 자식
 console.log(e.currentTarget); // 부모
}

// 이벤트강제실행
a.onclick=function(){
 ca.innerHTML = Number(ca.innerHTML)+1
}
b.onclick=function(){
 cb.innerHTML = parseInt(cb.innerHTML)+1
 a.onclick();  // 강제실행
}
// 자동실행
var stop=setInterval(b.onclick,1000)
c.onclick=function(){
 clearInterval(stop);
}
d.onclick=function(){
 stop=setInterval(b.onclick,1000)
}
// 기본이벤트제거
// 이벤트전달제거
// preventDefault()
// stopPropagation();

// 기본이벤트 -> a태그 클릭
// form -> submit
// daum.onclick=function(e){
//  this.style.background='pink';
//  //e.preventDefault();
//  //return false;
// }
// href="javascript:void(0)"
daum.addEventListener('click',function(){
 this.style.background='pink';
});


function naver(){
 naver2.style.background='red'
 return false;
}