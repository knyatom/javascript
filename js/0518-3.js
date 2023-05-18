// createElement()
// createTextNode()
// <h1> welcome</h1>
// append 나 appenChild

// 문서객체 만들기
//객체를 생성
// var header=document.createElement('h1');
// var text=document.createTextNode("welcome");

// // 노드를 연결
// header.appendChild(text);
// //document.body.appendChild(header);

// var box=document.getElementById('box');
// var box2=document.getElementById('box2');

// //box.innerHTML="header"; 
// box.appendChild(header);
// box2.appendChild(header);

// box.innerHTML=header.innerHTML;
// box2.innerHTML=header.innerHTML;

// 이벤트 
// add.onclick=function(){  }
// 고전 이벤트

// 표준이벤트
// add.addEventListener('click',function(){ });

var add = document.getElementById('add');
var del = document.getElementById('del');

var i = 0;
add.addEventListener('click', function () {
 i++;
 var h2 = document.createElement('h2');
 var text = document.createTextNode('welcome' + i);
 h2.appendChild(text);
 document.body.appendChild(h2);
});

del.addEventListener('click', function () {
 var h2 = document.getElementsByTagName('h2');
 i = h2.length - 1;
 if (i < 0) { i = 0; return false; }
 document.body.removeChild(h2[i]);
});

