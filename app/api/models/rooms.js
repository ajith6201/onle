const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true,
	}
},{strict: false,timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('Room', RoomSchema)