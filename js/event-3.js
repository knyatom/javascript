var form1=document.f1;
var form2=document.f2;
var eventObj;
document.onmousemove=function(e){
   eventObj=e?e:window.event;
   var cx=eventObj.clientX;
   var cy=eventObj.clientY;
   form1.client_x.value=cx;
   form1.client_y.value=cy;

   var px=eventObj.pageX;
   var py=eventObj.pageY;
   form1.pg_x.value=px;
   form1.pg_y.value=py;
}

form2.key.onkeydown=function(e){
   eventObj=e?e:window.event;
   form2.code.value=eventObj.keyCode;
  if(eventObj.ctrlKey==true && eventObj.keyCode==71){
     
  }
}