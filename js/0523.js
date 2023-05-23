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
var padding = "18.5%"
console.log(parseInt(padding));   //18
console.log(parseFloat(padding)); // 18.5

// Math.random() 0~1사이의 무작위 숫자
console.log(Math.random())
console.log(Math.random() * 45)
console.log(Math.floor(Math.random() * 45) + 1)
// floor 버림  ceil 올림

// 로또 번호 생성기
var 로또 = [];
for (var i = 1; i <= 45; i++) {
 로또.push(i);
}
document.write(로또);
document.write("<br>");

document.write("이번주 당첨번호 <br>");

//var num=Math.floor(로또.length*Math.random());

for (var i = 0; i < 6; i++) {
 document.write(Math.floor(로또.length * Math.random() + 1) + " , ");
}
Array.prototype.random = function () {
 var index = Math.floor(this.length * (Math.random()))  // 0~44
 return this[index];
}
document.write("<br>");
document.write("다음주 당첨번호 <br>");
for (var i = 0; i < 6; i++) {
 document.write(로또.random() + " , ");
}

// Math.max(), Math.min()
var max = Math.max(1, 2, 3, 45, 10, 4, 2);
var min = Math.min(-1, 2, 3, 45, 10, 4, 2);
console.log(max, min)

// Math.abs() 절대값   Math.pow(n,m) 제곱   Math.sqrt() 제곱근
console.log(Math.abs(-10));
console.log(Math.pow(2, 10));
console.log(Math.sqrt(16));

// String 객체
var str = "welcome to my world"
var str1 = "안녕하세요";
console.log(str.length);  // 문자열의 길이
console.log(str1[2]);   //  하
//  str1[4] = "용"  ;  // XXXX
// toUpperCase()   toLowerCase();
console.log(str.toUpperCase());  // 대문자
console.log(str.toLowerCase());  // 소문자
// str.indexOf(text)  
console.log(str.indexOf("wel"))  // 0
console.log(str.indexOf("to"))   // 8

if (str1.indexOf("하") > -1) {
 console.log("하가 있습니다.")
}
if (str1.indexOf("핵") > -1) {
 console.log("하가 있습니다.")
} else {
 console.log("글자가 없습니다.")
}
// slice(n,m)   substring(n,m)  substr(n,m)
// welcome to my world
console.log(str.slice(2, 5));  // lco
console.log(str);  // 원본은 변화가 없다.
var slice = str.slice(3, 8);
console.log(slice);
console.log(str.substring(2, 5))
console.log(str);
console.log(str.substr(2, 5));  // 2개부터 시작 5개를 가져온다.
console.log(str);

// str.trim()  앞뒤공백제거
// str.repeat(n)  n번 반복
var hello = "hello"
console.log(hello.repeat(3));

// 문자열을 비교
console.log("a" < "c")
console.log("a".codePointAt())  // 97
console.log("A".codePointAt())  // 65  ASCII 아스키코드
console.log(String.fromCodePoint(65))  // A

// 금칙어를 조회
if (str.indexOf("성인") > -1) {   // 0 -> false  null NaN undefined
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
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'straberry', 'banana'];

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
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'straberry', 'banana', "cherry"];
console.log(과일);
console.log(과일.splice(2, 2));  // 귤','딸기
console.log(과일)  // 사과', '배', '바나나
console.log(과일.splice(1, 0, "방울토마토"));
console.log(과일)

var 쓰레기 = fruit.splice(1, 2); // 삭제된 요소반환
console.log(쓰레기);
console.log(fruit);  // 원본이 변화됨

// slice(n,m)  시작, 끝-1
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'straberry', 'banana', "cherry"];
console.log(과일.slice(1, 4));
console.log(과일)  // 원본유지

// concat 합쳐서 새배열을 반환
console.log(과일.concat(fruit))
console.log(fruit)
console.log(과일)
var 장바구니 = 과일.concat(fruit);
console.log(장바구니)

// forEach 배열반복
과일.forEach((item, index) => {
 console.log(`${index} : ${item}`);
})

// indexOf  lastIndexOf  
// 앞에부터검색   뒤에서부터 검색
var 과일 = ['사과', '배', '바나나', '귤', '딸기', '바나나', '귤'];
console.log(과일.indexOf('귤'));
console.log(과일.lastIndexOf('바나나'));
// includes() 포함하는지 확인
console.log(과일.includes('귤'));
console.log(과일.includes('토마토'));

// find()   findIndex()
// 찾으면 true  없으면 undefined
var result = 과일.find(function () {

});
var result = 과일.find((item) => {
 return item == "귤"
});
console.log("==" + result);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr.find((item) => {
 return item % 3 == 0
});
console.log("== " + result);

var user = [
 { name: "원빈1", age: 30 },
 { name: "원빈2", age: 10 },
 { name: "원빈3", age: 40 },
 { name: "원빈3", age: 5 },
]
var result = user.find((a) => {
 if (a.age < 15) {
  return true
 }
 return false
})
console.log(result)

var result = user.findIndex((a) => {
 if (a.age < 15) {
  return true
 }
 return false
})
console.log(result)

// filter 만족하는 모든 요소를 배열로 반환한다.
var result = user.filter((a) => {
 if (a.age < 15) {
  return true
 }
 return false
})
console.log(result)
// 찾는값이 있는 true로 반환하고 result에 저장한다.
// 없으면 false 를 반환하고 그다음 요소를 찾는다.

var fruit = ['apple', 'straberry', 'banana', "cherry", "coconut", "blueberry"];
// fruit에서 글자가 7개이상인 과일명만 추출하시오.
// filter를 사용하자.
var result = fruit.filter((item) => {
 return item.length >= 7
})
console.log(result)
var result = fruit.filter((item) => item.length <= 5)
console.log(result)
// forEach 함수를 이용해서 fruit의 데이터를
// <ul> 태그에 <li> 태그 리스트로 삽입해보자  
// document로 출력하기
//  <li> 0 : apple </li>
//  <li> 1 : straberry </li>

var output = "<ul>";
fruit.forEach((item, index) => {
 output += `<li>${index + 1} 번째 => ${item} </li>`
})
output += "</ul>";

document.write(output);

// map 
// 함수를 받아 특정기능을 수행하고 새로운 배열을 반환한다.
var user = [
 { name: "원빈1", age: 30 },
 { name: "원빈2", age: 10 },
 { name: "원빈3", age: 40 },
 { name: "원빈3", age: 5 },
]
var user2 = user.map((a, i) => {
 return a.age > 20
});
console.log(user2);

var user2 = user.map((a, i) => {
 return a.name + "님 " + (a.age - 1) + "살"
});
console.log(user2);
console.log(user);

// join, split
var join = 과일.join("-");
document.write(join);
document.write("<br>");
document.write(과일);

var str = "welcome,to,my,world"
var split = str.split(",");
document.write("<br>");
document.write(split);

var split = str.split("");
document.write("<br>");
document.write(split);

// isArray()
console.log(Array.isArray(과일))

// sort()    reduce()
var arr = [1, 4, 6, 8, 9, 2]
arr.sort();
document.write("<br>");
document.write(arr);
arr.sort(function (a, b) {
 return b - a
})
document.write("<br>");
document.write(arr);

var user = [
 { name: "원빈", age: 30 },
 { name: "장동건", age: 10 },
 { name: "손흥민", age: 40 },
 { name: "유재석", age: 5 },
 { name: "김유나", age: 5 }
]

user.sort()
document.write("<br>");
console.log(user);

user.sort(function(a,b){
 if(a.name<b.name){
  return -1;
 }
 if(a.name>b.name){
  return 1;
 }
 return 0;
})

document.write("<br>");
console.log(user);

user.sort(function(a,b){
 if(a.name<b.name){
  return 1;
 }
 if(a.name>b.name){
  return -1;
 }
 return 0;
})

document.write("<br>");
console.log(user);







