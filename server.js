var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use('/src',express.static(path.join(__dirname, '/src')));
app.use('/style', express.static(path.join(__dirname, '/style')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, function () {
		console.log('Express listening on port '+ PORT + '!');
});