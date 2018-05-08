var express = require('express');
var url  = require('url');
var http = require('http');

var app = express();

// GET json translate
app.get('/api/json', function (req, res) {
	var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
	let arrLng={
	ru:{
		TEXT1:'Текст-1-ru',
		RU:'Рус',
		EN:'Анг',
		DE:'Нем'
	},
	en:{
		TEXT1:'Text-1-en',
		RU:'Rus',
		EN:'Eng',
		DE:'Ger'
	},
	de:{
		TEXT1:'Text-1-de',
		RU:'Rus',
		EN:'Eng',
		DE:'Deu'
	}};
	res.writeHead(200, {"Content-Type": "application/json"});
	let json = JSON.stringify({...arrLng[query.lang]});
	res.end(json);
});

//Upload empty
app.post('/api/upload', function (req, res) {
	res.send('File uploaded success');
});

app.listen(3000);
