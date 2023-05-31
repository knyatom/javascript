// localStorage
localStorage.setItem("name","이순신");
var name=localStorage.getItem('name');
//document.write(name);
localStorage.setItem("name","강감찬");
localStorage.setItem("name1","을지문덕");

localStorage.removeItem("name1");
localStorage.setItem("name1","을지문덕");
//localStorage.clear();
localStorage.setItem("name","강감찬");
localStorage.setItem("name1","을지문덕");

localStorage.removeItem("name1");
localStorage.setItem("name1","을지문덕");

sessionStorage.setItem("name1","이순신");
sessionStorage.setItem("name2","세종대왕");

// session 세션정보
// 상태비저장(stateless)
// 상태저장 -> 쿠키

// 쿠키생성
document.cookie="color=red";
document.cookie="color1=blue";
document.cookie="color2=yellow";
document.cookie="color3=white";

// 쿠키값변경
document.cookie="color=black";
// 쿠키구성요소
// expires, path, 
// 만료기간
var date=new Date();
date.setMinutes(date.getMinutes()+1); // 1시간뒤에 만료
document.cookie=`color=black; expires=${date.toUTCString()}`;

// 쿠키값읽기
console.log(document.cookie.match(/color1/));

// 쿠키값삭제
//document.cookie=`color1=blue;max-age=${"0"}`;

console.log(document.cookie);
// 쿠키문자열 -> 객체로 변환=> ; = 로 분리 => 객체에 저장
// trim 공백제거

var value=document.cookie;
console.log(value);
var cookieItem=value.split(";");
console.log(cookieItem);
var obj={}

cookieItem.forEach((item)=>{
 var elem=item.split("=");
 console.log(elem);
 var key=elem[0].trim();
 var val=elem[1];
 obj[key]=val;
})
console.log("분리된 쿠키");
console.log(obj);