'use strict';

// Chat application dependencies
var express 	= require('express');
var app  		= express();
var path 		= require('path');
var bodyParser 	= require('body-parser');
var flash 		= require('connect-flash');

// Chat application components
var routes 		= require('./app/routes');
var session 	= require('./config/session');
var passport    = require('./config/passport');
var ioServer 	= require('./config/socket')(app);
var logger 		= require('./config/logger');

// Set the port number
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// View engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

// Middleware to catch 404 errors
app.use(function(req, res, next) {
  res.status(404).sendFile(process.cwd() + '/views/404.htm');
});

ioServer.listen(port);