const express = require('express');
const app=express();
const http = require('http').Server(app);
const server = require('socket.io')(http);
const port=8080;

app.use(express.static(__dirname + '/public'));

let counter=0;

app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });

app.get('/click_count', function(req, res) {
	res.json({"clicks": counter});
});

server.on('connection', function(socket)
{
    console.log('a user connected');

    socket.emit('click_count', counter);

    socket.on('clicked',function(){
    counter+=1;

    server.emit('click_count', counter);
    });

});

http.listen(port, function()
{
    console.log('listening on port:'+port);
});
