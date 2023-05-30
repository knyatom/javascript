// 한글입력시에 전송한다.
// var form2=document.getElementById('form2');
// form2.onsubmit=function(e){
//  var val=name2.value;
//  console.log(val);
//   if(val==""){
//    return false;
//   }
//   if(val.replace(/[가-힝]/g,"").length==0){ 
//     return true; // 다음단계로 실행
//   }else{
//    //return false;
//    alert("한글이름을 입력하세요");
//    e.preventDefault();
//   }
// }

// form2.addEventListener('submit',function(e){
//  var val=name2.value;
//  console.log(val);
//  if(val.replace(/[가-힝]/g,"").length==0){
//   e.preventDefault();
//  }else{
//   //return false;
//   alert("한글이름을 입력하세요");
//   e.preventDefault();
//  }
// });

// 이벤트버블링 : 자식->부모
// 이벤트캡쳐링 : 부모 -> 자식
// eventPhase

// buton.addEventListener('click',function(e){
//  console.log(e.eventPhase)
// },false)
// field.addEventListener('click',function(e){
//  console.log(e.eventPhase)
// },false)
// html.addEventListener('click',function(e){
//  console.log(e.eventPhase)
// },true)
// //1 -> 캡쳐링 2 -> target 3 -> 버블링
// body.addEventListener('click',function(e){
//  console.log(e.eventPhase)
// },true)

function handler(e) {
 var phase = ['캡쳐링', "타겟", "버블링"];
 console.log(e.target.nodeName, this.nodeName, phase[e.eventPhase - 1]);
}
// button.addEventListener('click',handler,true);
// field.addEventListener('click',handler,true);
// body.addEventListener('click',handler,true);
// html.addEventListener('click',handler,true);

// e.target.nodeName -> e.target 최종자식엘리먼트
// this.nodeName -> e.currentTarget 이벤트가호출된 엘리먼드(부모)

button.addEventListener('click', handler, false);
field.addEventListener('click', handler, false);
body.addEventListener('click', function () {
 event.stopPropagation();
}, false);
html.addEventListener('click', handler, false);
// 이벤트전달방지
// event.stopPropagation();
// 이벤트 버블링 제거
// 익스플로러 =>  event.cancelBubble=true

a.onclick = function (e) {
 this.style.background = "gold";
 e.stopPropagation();  
}
p.onclick = function (e) {
 this.style.background = "cyan";
 e.stopImmediatePropagation();
}
div.onclick = function () {
 this.style.background = "pink";
}