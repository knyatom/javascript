// 형변환
// String()   문자로변환
// Number()   숫자로 변환
// Boolean()  불리언형으로 변환
// parseInt()  정수로 변환

// const 수학=Number(prompt("수학몇점?"));
// const 영어=Number(prompt("영어몇점?"));
// const 결과=(수학+영어)/2;
// console.log(결과);
// 3050/2

var 수학1=80;
var 영어1=100;
var 결과1=(수학1+영어1)/2;
console.log(결과1);

console.log(typeof 수학1);
var 수학=String(수학1);
console.log(typeof 수학);

var num='1000';  // 문자
var num1=1000;   // 숫자
console.log(num/2);  // 자동형변환 '1000'/2
console.log(num1/2);

// 문자형을 나누면 숫자형으로 자동형변환이 이루어진다.
console.log("===============");
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("welcome")); //true
console.log(Boolean(""));  //false 빈문자열
console.log(Boolean(null));       //false 
console.log(Boolean(undefined)); //false 
console.log(Boolean(NaN));  //false 

console.log(Boolean('0'));  // true
console.log(Boolean(' '));  // 공백 true

// 연산자
var num=2**3;      // 거듭제곱
console.log(num);

// 복합대입연산자
var num1=10;
num1=num1+5;
console.log(num1);

num1+=10;
console.log(num1);
num1-=5;
num1*=2;
num1/=2 ;  // num1=num1/2
num %= 2;  // num=num%2  나머지

console.time("시작");
 num1=num1+10;
console.timeEnd("시작");

console.time("시작");
 num1+=10;
console.timeEnd("시작");

// 동등연산자. 동치연산자
// 값만 비교,   값과 타입을 비교

var a=1;
var b='1';
console.log(a==b);       // true
console.log(a===b);        // false

// 비교연산자
// >  <  >=   <=  != (not)

// 조건문
var age=20;
if(age>19){
 console.log("환영합니다");
}
if(age<19){
 console.log("안녕히가세요");
}

// if , else, else if    다중조건문
age=21;
if(age>19){
 console.log("환영합니다");
}else if(age==19){
 console.log("19살 입니다.");
}else{
 console.log("미성년입니다.");
}

// 사과있으면 사과사오고, 양파, 마늘도 사와
// 사과없으면 ->나머지 시장을 안본다.

// 논리연산자, 비교연산자, 삼항연산자, 짧은조건연산자
// AND(&&), OR(||), !(NOT)

var a=100;
var b=200;
var c=true;
var d=false;

console.log(c && d) ;
console.log(c || d) ;

// OR는 하나만 참이면 결과가 참이다.  모두거짓->거짓
// AND 하나만 거짓이면 결과가 거짓이다. 모두참->참
// 스티브잡스는 한국인거나 남자이다 -> 참
// 스티브잡스는 한국인이고 남자이다 -> 거짓

console.log(a>b);
console.log(!(a>b));  

var 성별="여성";
var 이름="제인";
var 성인=true;

// 남자이고, 이름이 마이크이거나 성인이면 통과
if(성별=="남성" && (이름=="마이크" || 성인==true)){
 console.log("통과");
}else{
 console.log("입장불가");
}

// 연산자우선순위 ( a+b )*c  a+b*c

// 삼항연산자  ? 을 이용한 조건
// 조건식 ? 실행문1 : 실행문2
// 조건식이 참이면 실행문1이 실행되고 거짓이면 실행문2가
// 실행된다.

var html="html5";

if(html=="html5"){
 console.log("javascript");
}else{
 console.log("css");
}

var result = html=="html" ? "javascirpt" : "css";
            // 조건                  참   :  거짓

console.log(result);

// 짧은 조건문
// A || B     A가 거짓일때 B가 실행된다.
// A && B     A가 참이면 B가 실행된다.

var str1="welcome";
console.log(true || str1);   // true
console.log(false || str1);    // welcome
console.log(true && str1);     // welcome
console.log(false && str1);   // false

// 함수선언
function 과일(name, count){
  var count=count || 1;  // 기본값1로 지정
  console.log(name+ "이 " + count+ "개입니다");
}

// 함수 호출
과일("수박");
과일("수박",5);
// 오버로딩

// if(count==undefined){
//  count=1;
// }


// 반복문
// 동일한 작업을 여러번 반복할때 사용

//debugger;

for(var i=0; i<10; i++){
 console.log(i);  // i -> 0 ~ 9
}
console.log("for문끝난 후 : " + i);

// 디버깅 모드 -> F5 ->F11

// while
var i=0;
while(i<10){
 console.log(i);
 i++;
}

// while(true){
//  // 무한루프...
// }
// for(;;){

// }




