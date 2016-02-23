/// <reference path="./typings/tsd.d.ts"/>​

var express = require('express')
var bodyParser = require('body-parser')

import http = require('http');
import path = require('path');
// import mongoose = require('mongoose');
import WebSocket = require('ws');

import routes = require('./server/resources/index');
// import documentRoutes = require('./server/resources/document');
import models = require('./server/dao/messageModel');

var wsPort: number = process.env.PORT || 3001;
var databaseUrl: string = 'localhost';
var httpPort = 3000;

var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: wsPort });


function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});
};


var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', routes.index);
app.get('/tp-calc', routes.index);


app.listen(httpPort, function(){
    console.log("Demo Express server listening on port %d", httpPort);
});



export var App = app;

