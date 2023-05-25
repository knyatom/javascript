// 1 생성자 함수 선언
// 2 학생배열제작
// 3. 전체학생출력

function Student(name, html, css, js, java) {
 this.name = name;
 this.html = html;
 this.css = css;
 this.js = js;
 this.java = java;

 this.getSum = function () {
  return this.html + this.css + this.js + this.java
 }
 this.getAvg = function () {
  return this.getSum() / 4
 }
 // toString override
 this.toString = function () {
  return this.name + " " + this.getSum() + " " + this.getAvg()
 }
}

// 학생 정보 데이터 
var students = [];
students.push(new Student("원빈", 90, 20, 30, 40))
students.push(new Student("장동건", 40, 20, 30, 40))
students.push(new Student("강호동", 60, 20, 50, 70))
students.push(new Student("유재석", 80, 20, 30, 40))
students.push(new Student("소녀시대", 10, 60, 30, 40))
students.push(new Student("BTS", 10, 50, 30, 40))
students.push(new Student("2PM", 10, 30, 30, 40))
students.push(new Student("동방신기", 10, 20, 80, 40))
students.push(new Student("이정재", 10, 40, 30, 90))
students.push(new Student("빅뱅", 80, 40, 90, 30))

console.log(students)
// 전체성적
function allStudent() {
 var output = "이름 총점 평균 <br> <hr>"
 for (var i in students) {
  output += (Number(i) + 1) + " : " + students[i].toString() + "<br>"
 }
 output += "<hr>"
 list.innerHTML = output;
}
// 장학금 1등~3등
// sort().slice(0,3)  메소드체이닝
function good() {
 var output = "이름 총점 평균 <br> <hr>"

 var students2 = students.sort(function (a, b) {
  return b.getSum() - a.getSum();
 }).slice(0,3)
 console.log(students2)

 for (var i in students2) {
  output += (Number(i) + 1) + " : " + students2[i].toString() + "<br>"
 }
 output += "<hr>"
 list.innerHTML = output;
}

function bad() {
 var output = "이름 총점 평균 <br> <hr>"

 var students2 = students.sort(function (a, b) {
  return a.getSum() - b.getSum();
 }).slice(0,3)

 for (var i in students2) {
  output += (Number(students.length)-i) + " : " + students2[i].toString() + "<br>"
 }
 output += "<hr>"
 list.innerHTML = output;
}

// 장려상 출력하기(4~6)
function jang() {
 var output = "이름 총점 평균 <br> <hr>"

 var students2 = students.sort(function (a, b) {
  return a.getSum() - b.getSum();
 }).slice(4,7)

 for (var i in students2) {
  output += (Number(i) + 4) + " : " + students2[i].toString() + "<br>"
 }
 output += "<hr>"
 list.innerHTML = output;
}