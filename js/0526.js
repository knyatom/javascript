var test = document.getElementById('test')

try {
 console.log("welcome")
 //throw "무슨에러인가?"
} catch (err) {
 test.innerHTML = err.message
}
test.style.color = 'red';

// throw  사용자지정 오류를 만든다.
var numBox = document.getElementById('numBox')
var btn = document.getElementById('btn')
var errText = document.getElementById('errText')

btn.addEventListener('click', function () {
 errText.innerHTML = 'welcome'
 var val = numBox.value
 console.log(val)
 try {
  if (val == '') { throw "비어있음" }
  if (isNaN(val)) throw "숫자가 아닙니다"
  if (val < 1) throw "숫자가 너무 작다."
  if (val > 10) throw "숫자가 너무 크다."
 } catch (err) {
  errText.innerHTML = "에러메시지 : " + err
 }
 errText.style.color='red'

})