'use strict';

var session 	= require('express-session');
var MongoStore	= require('connect-mongo')(session);
var db 		    = require('./database');

var init = function () {
	if(process.env.NODE_ENV === 'production') {
		return session({
			secret: 'SECRET',
			resave: false,
			saveUninitialized: false,
			unset: 'destroy',
			store: new MongoStore({ mongooseConnection: db.Mongoose.connection })
		});
	} else {
		return session({
			secret: 'SECRET',
			resave: false,
			unset: 'destroy',
			saveUninitialized: true
		});
	}
}

module.exports = init();