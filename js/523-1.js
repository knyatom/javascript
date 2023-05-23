// json 파일요청 - 비동기
// fetch , ajax (jQuery),  axios
// fetch().then().then()
// json server
var content = document.getElementById('content');

fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(data => {
  console.log(Array.isArray(data));
  var output = "<table border='1'>";
  output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
  data.forEach((ele, i) => {
   output += "<tr>"
   output += "<td>" + "<a href='#' onclick=detail() >" + i + "</a>" + "</td>"
   output += "<td>" + ele.username + "</td>"
   output += "<td>" + ele.phone + "</td>"
   output += "<td>" + ele.email + "</td>"
   output += "</tr>"
  })
  output += "</table>"
  content.innerHTML = output;
 })

// 순번 사용자이름, 전화번호, 이메일
// username, email, phone

function detail(id) {
 fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
   console.log(Array.isArray(data));
   var output = "<table border='1'>";
   output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>"
   output += "<tr>"
   output += "<td>" + data.id + "</td>"
   output += "<td>" + data.username + "</td>"
   output += "<td>" + data.phone + "</td>"
   output += "<td>" + data.email + "</td>"
   output += "</tr>"
   output += "</table>"
   content2.innerHTML = output;
  })
}
//detail();