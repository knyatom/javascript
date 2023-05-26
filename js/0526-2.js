// window.open()
// window.close()
// window.print()
// window.moveBy()
// window.moveTo()
// window.resizeTo()
// window.resizeBy()
// window.focus()
// window.blur()

// var child=window.open("","","width=300, height=200");
// var width=screen.width;
// var height=screen.height;
// child.moveTo(0,0)
// child.resizeTo(width,height)

// setInterval(function(){
//  child.resizeBy(-20,-20)
//  child.moveBy(10,10)
// },1000)

// screen 객체
var out='';
for(var key in screen){
  out+=`${key} : ${screen[key]} <br>`
}
document.write(out)
document.write("<hr>")
// location 객체
var out='';
for(var key in location){
  out+=`${key} : ${location[key]} <br>`
}
document.write(out)