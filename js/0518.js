// Object 객체 사용하기

// 객체를 정의

var man = {
 name: "SONNY",
 age: 31
}
// 객체에 접근
console.log(man);
console.log(man.name);
console.log(man.age);
// name -> key(키), "SONNY" -> 값(value)
console.log(man['name']);   // computed property

// 객체에 속성을추가
man.gender = "남성";
man['hat'] = "black";
console.log(man);

// for ~ in 반복문
for (var key in man) {
 document.write(key + " ");
 document.write(man[key]);
 document.write("<br>");
 console.log(`${key} : ${man[key]}`);
}

// 프로퍼티가 존재여부확인
console.log('age' in man);

// 속성 삭제 -> delete
delete man.hat;
console.log(man);
console.log('hat' in man);

var man = {
 name: "SONNY",
 age: 31,
 name2: "원빈"
}
console.log(man['name' + '2']);  // 계산된 속성
// computed property
// man.name2  man['name2'] 
// man.name+2  XXXX

// Object 단축 프로퍼티
var girl = "원더걸스";
var age = 50;

var woman = {
 girl: girl,
 age: age,
 gender: "여성"
}
console.log(woman);
var woman = {
 girl,
 age,
 gender: "여성"
}
console.log(woman);

// 키이름과 value명이 같은 경우에는 하나만 적어도 된다.

// 생성자 함수를 통한 객체생성
// 객체를 리턴하는 함수
function Student(name, age){
 return{
   name : name,
   age : age,
   취미 : "농구"
 }
}
var 학생1= Student('장동건',30);
console.log(학생1);

학생2={
  name:"원빈",
  age : 30
}
var 학생3= new Student('이정재',40);
console.log(학생3);

// 메소드 : 객체에 프로퍼티로 할당된 함수
var spiderMan={
  name: "거미",
  age : 20,
  fly : function(){
    console.log(spiderMan.name + "가 날아갑니다");
  }
}
spiderMan.fly();

var spiderMan={
 name: "거미",
 age : 20,
 fly : function(){
   console.log(this.name + "가 날아갑니다");
 }
}
spiderMan.fly();

var superMan={
 name: "수퍼맨",
 age : 22,
 fly : function(){
   console.log(this.name + "이 날아갑니다");
 }
}
superMan.fly();

var ironMan={
 name: "아이언맨",
 age : 22,
 fly : function(){
   console.log(this.name + "이 날아갑니다");
   console.log(this);
 }
}
ironMan.fly();

// 화살표함수에서는 this는 사용하지 말자.
// var ironMan={
//  name: "아이언맨",
//  age : 22,
//  fly : ()=>{
//    console.log(this + "이 날아갑니다");
//    console.log(this);
//  }
// }
// ironMan.fly();

// 화살표함수는 일반함수와는 달리 자신만의 this를 갖지않음
// 여기서 this는 글로벌객체 -> window를 나타낸다.
// node.js -> global  전역객체

superMan = ironMan;

console.log(superMan.name);
console.log(ironMan.name);

console.log(superMan);
// superMan.fly();
// ironMan.fly();
superMan=null;
console.log(superMan);

// 선언함수
function add(x,y){
 return x+y;
}
console.log(add(3,5));

// 익명함수
var add=function(x,y){
 document.write("익명함수 호출됨");
 return x+y;
}
document.write("<h2>"+add(5,8) +"</h2>");

// 이름이 같으면 익명함수가 호출된다.

// 화살표함수
var add=(x,y)=>{
 document.write("화살표함수 호출됨");
 return x+y;
}
document.write("<h2>"+add(5,28) +"</h2>");

// 함수선언하면 호이스팅되면서 스택영역에 보관되고
// 함수호출해야 call stack 사용가능하다.
// function 함수(){  } 으로 선언-> 함수();
// 함수는 실행하고 끝나면 바로 메모리(스택)에서 제거된다.

// 함수를 생성한후 바로 곧바로 호출하기
// 익명함수를 사용한다.

var add=(function(x,y){
 document.write("익명함수로 바로 호출하고 제거됨");
 document.write("<h2>"+(x+y)+"</h2>");
})(5,9);

// console.log(add(5,3));  add는 함수가 아닙니다.

// 화살표함수 생성후 바로 호출
var add=((x,y)=>{
 document.write("화살표함수 바로 호출하고 제거됨");
 document.write("<h2>"+(x+y)+"</h2>");
})(5,19);

// 리턴값이 있는 화살표함수
var text=function(txt,count){
 return txt.repeat(count);
}
console.log(text("wel",3));
document.write("<h2>"+text("wel ",5)+"</h2>");

var text=(txt,count)=>(txt.repeat(count));

console.log(text("wel",3));
document.write("<h2>"+text("wel ",5)+"</h2>");

var 과일=['사과','바나나','오렌지','귤','수박'];
var avengers=['아이언맨','토르','스파이더맨','캡틴'];
var 아이언맨 = {
   name: "토니스타크",
   age:50,
   color:"골드"
}

// 함수의 매개변수가 배열인경우
function myFuc1(배열){
   for(var i=0;i<배열.length; i++){
     document.write(배열[i] + " ");
   }
   document.write("<hr>");
}
myFuc1(과일);
myFuc1(avengers);

function myFuc1(배열){
 for(var i in  배열){
   document.write(배열[i] + " ");
 }
 document.write("<hr>");
}
myFuc1(과일);
myFuc1(avengers);
console.time("start");
function myFuc1(배열){
 for(var i of 배열){
   document.write(i + " ");
 }
 document.write("<hr>");
}
myFuc1(과일);
myFuc1(avengers);
console.timeEnd("start");
// 함수의 매개변수가 객체인 경우
function myFuc1(객체){
 for(var i in 객체){
   document.write(객체[i] + " ");
 }
 document.write("<hr>");
}
myFuc1(아이언맨);

// 가변인자함수 
//  ...args
function 어벤져스(...영웅){
 for(var i=0; i<영웅.length;i++){
  document.write(영웅[i] + "  ");
 }
 document.write( "<br>  ");
}
어벤져스("토리","철맨","블랙","캡틴");
어벤져스("토리","철맨","블랙","캡틴","스파이더맨");

// iterable 객체
// 반복가능한 객체, 배열
// for ~ of
// for in 
// forEach();  map(), filter(), 
// 배열.forEach()

// 아이언맨은 객체하고 사용불가
// 아이언맨.forEach(function(ele,index,array){
//  document.write("a =" + ele + "<br>");
//  document.write("b =" + index + "<br>");
//  document.write("c =" + array + "<br>");
//  document.write( "<hr>  ");
// });

document.write( "<hr>  ");
console.time("start");
과일.forEach(function(ele,index,array){
  document.write("a =" + ele + "<br>");
  document.write("b =" + index + "<br>");
  document.write("c =" + array + "<br>");
  document.write( "<hr>  ");
});
console.timeEnd("start");

function 시장(ele,index,array){
 document.write("ele =" + ele + "<br>");
 document.write("index =" + index + "<br>");
 document.write("c =" + array + "<br>");
 document.write( "<hr>  ");
}

과일.forEach(시장);
// 함수가 매개변수로 들어갈때는 소괄호()를 제거한다.
//과일.forEach(시장()); 에러발생

var obj={
  '+' : '더하기',
  '-' : '빼기',
  '/' : '나누기',
  '*' : '곱하기',
  '%' : '나머지'
}

// console.log(obj.+); 에러발생
console.log(obj['+']);  //키이름이 특수문자 인경우 사용
console.log(obj['%']); 

// 객체 상수로 부터 객체 생성
var myCar={
  model:"그랜져",
  speed : 60,
  color: "black",
  brake:function(){
   this.speed -= 10;
  },
  accel:function(){
   this.speed += 10;
  }
}
console.log(myCar.accel());
console.log(myCar.speed);
console.log(myCar.accel());
console.log(myCar.speed);
console.log(myCar.brake());
console.log(myCar.speed);
myCar.speed=100;
console.log(myCar.speed);
// 은닉화, 캡슐화,  getter, setter 함수, 클로져가 필요하다.




