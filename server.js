// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
//웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

app.post('/user', function(request, response) {
    var name = request.param('user_name');
    response.send(name);
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52275, function() {
    console.log("server Running at http://127.0.0.1:52275");
});
// npm install express@3.4.7