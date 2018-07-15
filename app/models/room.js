'use strict';

var Mongoose  = require('mongoose');
var RoomSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    connections: { type: [{ userId: String, socketId: String }]}
});

module.exports = Mongoose.model('Room', RoomSchema);