var myDiv = document.getElementById("target");
function getGeolocation() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation);
 }
}
function showLocation(location) {
 console.log(location)
 myDiv.innerHTML = "(위도: " + location.coords.latitude +
  ", 경도: " + location.coords.longitude + ")"
}

function getGeolocation2() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showGeolocation);
 }
}
function showGeolocation(position) {
 var pos = position.coords.latitude + "," + position.coords.longitude;
 var url = "http://maps.googleapis.com/maps/api/staticmap?center="
  + pos + "&zoom=14&size=500x300&sensor=false";
 window.open(url);
}

//  http://g.co/dev/maps-no-account


function readFile() {
 var files = document.getElementById('input').files;
 console.log(files);
 console.log(files[0].name);
 console.log(files.length);

 var file = files[0]
 var reader = new FileReader()
 reader.readAsText(file, "utf-8")
 console.log(reader);
 reader.onload = function () {
  document.getElementById('result').value = reader.result;
 }
}

function readFile2() {
 var files = document.getElementById('input').files;

 output = "";
 // console.log(files[0])
 // console.log(files[1])
 for (var i = 0,f; f = files[i];i++ ) {
  console.log(i, f)
  output += files[0].name + "\n";        /* f.name - Filename  files[i].name */
  output += f.type + "\n";                /* f.type - File Type */
  output += f.size + "bytes\n";           /* f.size - File Size */
  output += f.lastModifiedDate + "\n";    /* f.lastModifiedDate */
 }
 document.getElementById('result').value = output;
}


















