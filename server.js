var http = require('http');//deklarojme protokollin http 
var express = require('express');//deklarojme librarine expresit ..e therrasim dmth pasi e kemi intaluar t
var socket_io = require('socket.io');//deklarojme socketin ... etherrasim pasi kete e kemi intaluar tek folderi dhe npm install 

var app = express();//perseri expresi si funsionn 
app.use(express.static('public'));//permes app.use marrim dokumentin html nga front endi e therrasim dmth permes folderit  public 

var server = http.Server(app);//japim komanden per nisjen e serverit
var io = socket_io(server);//io i dergojm e serverit nje kerkeese 

server.listen(process.env.PORT || 8080);//kjo eshte porta qe do te bej te mundur ekzekutimin e programit tone 