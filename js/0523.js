// 수학객체, 숫자객체
// Number, Math

var num = 15;
num.toString();
console.log(num);
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(16));

console.log(Math.PI);
// Math.ceil() 올림
console.log(Math.ceil(Math.PI));
// Math.round() 반올림
console.log(Math.round(Math.PI));
// toFixed() 소수점 자릿수
var num2 = 30.12345;
console.log(num2.toFixed(2));  // 30.12
console.log(num2.toFixed(0));  // 30

// isNaN() 
var a = "100";
var b = 100;
console.log(isNaN(a)); // false 
console.log(isNaN(b));    // false 
console.log(isNaN("wel")); // true
console.log(typeof a); // string
console.log(typeof b); // number

// Number() , parseInt() 정수

console.log(typeof Number(a));
var margin = "10px";
var margin1 = Number(margin);  // "300"
var margin2 = parseInt(margin);

console.log(margin1);  // NaN
console.log(margin2);  // 10

// parseFloat() 부동소수점반환
var padding="18.5%"
console.log(parseInt(padding));   //18
console.log(parseFloat(padding)); // 18.5

// Math.random() 0~1사이의 무작위 숫자
console.log(Math.random()) 
console.log(Math.random()*45) 
console.log(Math.floor(Math.random()*45)+1) 
// floor 버림  ceil 올림

// 로또 번호 생성기
var 로또=[];
for(var i=1;i<=45;i++){
 로또.push(i);
}
document.write(로또);
document.write("<br>");

document.write("이번주 당첨번호 <br>");

//var num=Math.floor(로또.length*Math.random());

for(var i=0;i<6; i++){
 document.write(Math.floor(로또.length*Math.random()+1) + " , ");
}
Array.prototype.random=function(){
  var index=Math.floor(this.length*(Math.random()))  // 0~44
  return this[index];
}
document.write("<br>");
document.write("다음주 당첨번호 <br>");
for(var i=0;i<6; i++){
 document.write(로또.random() + " , ");
}

// Math.max(), Math.min()
var max=Math.max(1,2,3,45,10,4,2);
var min=Math.min(-1,2,3,45,10,4,2);
console.log(max,min)

// Math.abs() 절대값   Math.pow(n,m) 제곱   Math.sqrt() 제곱근
console.log(Math.abs(-10));
console.log(Math.pow(2,10));
console.log(Math.sqrt(16));

// String 객체
var str="welcome to my world"
var str1="안녕하세요";
console.log(str.length) ;  // 문자열의 길이
console.log(str1[2])  ;   //  하
//  str1[4] = "용"  ;  // XXXX
// toUpperCase()   toLowerCase();
console.log(str.toUpperCase());  // 대문자
console.log(str.toLowerCase());  // 소문자
// str.indexOf(text)  
  console.log(str.indexOf("wel"))  // 0
  console.log(str.indexOf("to"))   // 8

if(str1.indexOf("하")> -1){
 console.log("하가 있습니다.")
}
if(str1.indexOf("핵")> -1){
 console.log("하가 있습니다.")
}else{
 console.log("글자가 없습니다.")
}
// slice(n,m)   substring(n,m)  substr(n,m)
// welcome to my world
console.log(str.slice(2,5));  // lco
console.log(str);  // 원본은 변화가 없다.
var slice=str.slice(3,8);
console.log(slice);
console.log(str.substring(2,5))
console.log(str);  
console.log(str.substr(2,5));  // 2개부터 시작 5개를 가져온다.
console.log(str);  

// str.trim()  앞뒤공백제거
// str.repeat(n)  n번 반복
var hello="hello"
console.log(hello.repeat(3));

// 문자열을 비교
console.log("a" < "c")
console.log("a".codePointAt())  // 97
console.log("A".codePointAt())  // 65  ASCII 아스키코드
console.log(String.fromCodePoint(65))  // A

// 금칙어를 조회
if(str.indexOf("성인") > -1){   // 0 -> false  null NaN undefined
 console.log("금칙어가 있다");
 console.log(str.indexOf("성인"))  // -1
}

// Array 객체
// push, pop, unshift, shift splice
// concat  forEach 
// indexOf  lastIndexOf  includes
// find  findIndex
// sort   reverse
// map  filter
// join split

// push() 뒤에 삽입  pop() 뒤에 삭제
var 과일=['사과','배','귤','딸기','바나나'];
var fruit=['apple','straberry','banana'];

console.log(과일);
console.log(과일.push('수박'));
console.log(과일);
console.log(fruit.pop());
console.log(fruit);

// unshift 앞에 삽입  shift 앞에 삭제
console.log(과일.unshift('수박'));
console.log(과일);
console.log(fruit.shift());
console.log(fruit);

// splice(n,m) 특정요소 지움/ 특정요소 지우고 추가
var 과일=['사과','배','귤','딸기','바나나'];
var fruit=['apple','straberry','banana',"cherry"];
console.log(과일);
console.log(과일.splice(2,2));  // 귤','딸기
console.log(과일)  // 사과', '배', '바나나
console.log(과일.splice(1,0,"방울토마토"));
console.log(과일) 

var 쓰레기= fruit.splice(1,2); // 삭제된 요소반환
console.log(쓰레기);
console.log(fruit);  // 원본이 변화됨

// slice(n,m)  시작, 끝-1
var 과일=['사과','배','귤','딸기','바나나'];
var fruit=['apple','straberry','banana',"cherry"];
console.log(과일.slice(1,4));
console.log(과일)  // 원본유지

// concat 합쳐서 새배열을 반환
console.log(과일.concat(fruit))
console.log(fruit)  
console.log(과일)  
var 장바구니=과일.concat(fruit);
console.log(장바구니) 





