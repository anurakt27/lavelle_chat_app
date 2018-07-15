
'use strict';

var Mongoose 	= require('mongoose');
var logger 		= require('./logger');
var config  = require('./config');

Mongoose.connect(config.db.MONGODB_URI);


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
