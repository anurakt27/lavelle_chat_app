
'use strict';

var Mongoose 	= require('mongoose');
var logger 		= require('logger');

Mongoose.connect('mongodb://localhost/chat' );

Mongoose.connection.on('error', function(err) {
	if(err) throw err;
});

Mongoose.Promise = global.Promise;

module.exports = { Mongoose, 
	models: {
		user: require('../app/models/user.js'),
		room: require('../app/models/room.js')
	}
};