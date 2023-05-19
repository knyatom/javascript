console.log("fetch로 통신하기");

fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(response => response.json())
 .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(
  function (response) {
   console.log(response);
   return response.json();
  })
 .then(
  function (data) {
   console.log(data);
   document.write(`사용자아이디 : ${data.userId} <br> 타이틀 : ${data.title}`);
   document.write("<hr>");
  }
 )
console.log("fetch로 통신하기 끝");

fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(data => {

  for (var i in data) {
   document.write(data[i].name + ' : '+ data[i].phone + ' : ' + data[i].email );
   document.write("<br>");
  }
  console.log(data);
 });
 
 document.write("<hr>");
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(data => {
 document.write("<table border='1'>");
 document.write("<tr>");
 document.write("<th>이름</th><th>전화번호</th><th>이메일</th>")
 document.write("</tr>");
  for (var i in data) {
   document.write("<tr>");
   document.write("<td>"+data[i].name+"</td><td>"+ data[i].phone+"</td><td>"+ data[i].email+"</td>" );
   document.write("</tr>");
  }
  document.write("</table>");
  console.log(data);
 });
// 코드 줄이기

document.write("<hr>");
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
document.write("<table border='1'>");
document.write("<tr>");
document.write("<th>이름</th><th>전화번호</th><th>이메일</th>")
document.write("</tr>");
 for (var i in data) {
  document.write("<tr>");
  document.write("<td>"+data[i].name+"</td><td>"+ data[i].phone+"</td><td>"+ data[i].email+"</td>" );
  document.write("</tr>");
 }
 document.write("</table>");
 console.log(data);
});
