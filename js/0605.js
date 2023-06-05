// this를 지정할수 있다.
var person1={
 name:"이순신"
}
var person2={
 name:"강감찬"
}
function showName(){
 console.log(this.name);
}
showName();  // this -> window
showName.call(person1);
// this 를 binding 처리하였다.
// call메서드는 모든 함수에 사용할 수 있다.
showName.call(person2);

function update(생일,주소){
  this.생일=생일;
  this.주소=주소;
}
update.call(person1,2000,"서울");
console.log(person1);
update.call(person2,2020,"성남모란");
console.log(person2);

// apply()
var num=[4,10,5,3,2];
//update.apply(person2,2010,"모란");
//console.log(person2);
var 최소=Math.min(num);
var 최대=Math.max(num);
console.log(최소)  // NaN
console.log(최대)  // NaN
var 최소=Math.min(1,2,3,4,5);
var 최대=Math.max(1,2,3,4,5);
console.log(최소)
console.log(최대)
var 최소=Math.min(...num);  // spread 연산자
var 최대=Math.max(...num);
console.log(최소)
console.log(최대)
var 최소=Math.min.apply(null,num);
var 최대=Math.max.apply(null,num);
console.log(최소) 
console.log(최대) 
// apply는 배열(array)을 받는다. 

// bind() 메소드는 함수의 this값을 영구히 바꿀수 있다.
var person3=update.bind(person1);
person3(1999,"부산");
console.log(person1)

var user={
  name:"을지문덕",
  showName:function(){
   console.log(`Hello , ${this.name}`);
  }
}
user.showName();
var fn=user.showName;
fn();
fn.call(user)
fn.apply(user)

var binding=fn.bind(user);
binding();

// Class 문법
// ES5-> ES6 에 추가된 스펙
var User=function(name, age){
 this.name=name;
 this.age=age;
 this.showName=function(){
  console.log(this.name+" : " +this.age);
 }
}
var 학생1=new User("이순신",50);
console.log(학생1);
학생1.showName();

class User2{
 // 생성자함수
  constructor(name,age){
   this.name=name;
   this.age=age;
  }
  showName(){
   console.log(this.name+" : " +this.age);
  }
}
var 학생2=new User2("세종대왕",40);
console.log(학생2);
학생2.showName();
// new를 통해 호출 생성자 함수와 동일하다
// 클래스내부에 constructor라는 객체를 만들어주는
// 생성자 메소드가 있다.
// 생성자는 return값이 없다.
// 학생1에는 showName이 객체내부에 있고,
// 학생2에는 showName은 Prototype 프로토타입내부에 있다.
// 프로토타입은 공유메모리영역에 거주한다.

var User3=function(name, age){
 this.name=name;
 this.age=age;
}

// 공유메모리에 존재, 자바 static
User3.prototype.showName=function(){
 console.log("프로토타입호출 : " + this.name);
}
var 학생4=new User3("강감찬",20);

학생4.showName();
console.log(학생4);

// new 를 사용하지 않으면 undefined가 나온다.
// var 학생5= User2("홍길동",30);
// 학생5.showName();
// class는 new없이 실행할 수 없다.

console.log("=========")
// for in 반복문
for(var i in person1){
 console.log(i);
}
for(var i in person2){
 console.log(i);
}
////////////////////////////////
// class 상속
// extends
class Car{
 constructor(color){
  this.color=color;
  this.wheels=4;
 }
 drive(){
  console.log("운전한다...")
 }
 stop(){
  console.log("정지한다...")
 }
}

class Bmw extends Car{
 constructor(color){
  super(color);  // 부모생성자 호출
  this.navi=1;
 }
 park(){
  console.log("주차한다...")
 }
 // 메서드 오버라이딩
 drive(){
  console.log("driving......")
 }
 stop(){
  super.stop();  // 부모메서드 호출
  console.log("stop....")
 }
}

var car1=new Bmw("blue");
console.log(car1);
car1.drive();
car1.stop();
car1.park();
// 메소드 오버라이딩 : 부모의 메소드를 재정의하는 기법
// method overriding
// 오버로딩은 메소드의 이름은 같으나 매개변수가 다른 것
// super()  부모메소드를 호출한다.

// 생성자 오버라이딩
// 자식생성자는 무조건 부모생성자를 호출해야 한다.
// super를 이용해 호출한다.






