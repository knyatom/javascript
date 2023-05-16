// 함수(fuction)
//함수작성, 함수선언
// 매개변수가 있고, 리턴이 없다.
function sayHello(msg){
   console.log(`Hello, ${msg}`);
}
// 함수호출
var tel=sayHello("welcome");
console.log(tel); // undefined
// 함수는 리턴문이 없으면 undefined를 반환한다.

// 매개변수가 있고, 리턴이 있다.
function add(num1, num2){
 return num1+num2;
}
var result=add(10,20);
console.log(result);

// 함수는 한작업(일련의 작업)을 정의해놓은 코드의 집합체
// 함수나 객체들이 모이면 모듈
// 모듈이 모이면 라이브러리 -> 프레임워크 -> 플랫폼

function showFunc(){
 console.log("함수가 실행된다");
 return;  // 함수가 종료, 그 함수가 값을 반환하는 용도
 console.log("함수가 여기도 실행되나??");
}
showFunc();

// 자바스크립트에서는 함수를 1급 객체로 취급한다.

// 전역변수와 지역변수
function localFunc(){
 var msg="welcome";  // 지역변수
 console.log("함수내에서 " + msg);
}
localFunc();
// console.log("함수바깥에서 " + msg); // msg undefined 
// 지역변수는 함수내에서만 사용할 수 있다.

var msg="hi everyone";  // 전역변수
function localFunc(){
  msg="welcome";  // 젼역변수값이 재정의
  console.log("함수내에서 " + msg);
}
localFunc();
console.log("함수바깥에서 " + msg);  

// 함수 바깥에서는 함수내부의 지역변수에 접근할 수 없다.



function welcome(name){
 var msg="welcome";
 var name=name || "Friend";

 msg +=` to my ${name}`;
 console.log(msg);
}

welcome();
welcome("홍길동");

function welcome(name="강호동"){
 var msg="welcome ";
  if(name){
    msg += name;
  } 
 
 console.log(msg);
}
welcome("원빈");
welcome();

// 함수선언문 과 함수표현식
// 선언함수(일반함수)과 익명함수
// 둘 사이의 차이점은 호출할 수 있는 타이밍에 있다.

myFuc();
function myFuc(){
 document.write("<h1>Hi Hello </h1>");
}
myFuc();
var myVar="대한민국";
document.write(myVar);
myFuc();

// 자바스크립트는 위에서 아래로 순차적으로 실행되는 
// 인터프리터 언어라고 한다.
// 일반함수는 선언과 동시에 호이스팅된다.(hoisting)
//(문서상단으로 이동)

var myFunc1= function(){
  console.log("나는 익명함수입니다.");
}
myFunc1();
// 함수선언하면 초기 모든 함수들을 콜스택영역이라는 곳에
// 모아서 생성된다.

// Stack Overflow발생
// 재귀함수
// 자기가 자기호출하면 stack overflow

// function overflow(){
//  console.log("내가 날 호출한다.");
//   overflow();
// }
// overflow();

// 화살표함수
// () => { }
function showError(){
 console.log("error1....")
}
showError();

var showError=function(){
 console.log("error2....")
}
showError();

var showError=()=>{
 console.log("error3....")
}
showError();

var showName=function(name){
  var msg=`Hello, ${name}`
  console.log(msg);
}
showName("임꺽정");

var showName=(name)=>{
 var msg=`Hello, ${name}`
 console.log(msg);
}
showName("임꺽정");

var add=function(num1, num2){
 const result=num1+num2;
 return result;
}
console.log(add(5,3));

var add=(num1, num2)=>{
 const result=num1+num2;
 return result;
}
console.log(add(5,3));

var add=function(num1, num2){
 return num1+num2;
}
console.log(add(15,3));

var add=(num1, num2)=>{
 return num1+num2;
}
console.log(add(15,3));

var add=(num1, num2)=> num1+num2;
      // 인수1, 인수2    리턴값   
console.log(add(15,3));

var sayHello=function(name){
 return name;
}
var sayHello=name=>name;
console.log(sayHello("장동건"));
// var 함수명=인수=>리턴값;
