var express = require('express');
var app=express();
var http = require('http').Server(app);
var server = require('socket.io')(http);
var port=8080;

app.use(express.static(__dirname + '/public'));

var counter=0;

app.get('/', function(req, res) {

        res.sendFile(__dirname + '/index.html');
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
