
const roomModel = require('../models/rooms');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		roomModel.findById(req.params.roomId, function(err, roomInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Movie found!!!", data:{rooms: roomInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let roomsList = [];

		roomModel.find({}, function(err, rooms){
			if (err){
				next(err);
			} else{
				for (let room of rooms) {
					roomsList.push({id: room._id, name: room.name});
				}
				res.json({status:"success", message: "Rooms list found!!!", data:{rooms: roomsList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		roomModel.findByIdAndUpdate(req.params.roomId,{name:req.body.name}, function(err, roomInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Room updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		roomModel.findByIdAndRemove(req.params.roomId, function(err, roomInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Room deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		roomModel.create({ name: req.body.name }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Room added successfully!!!", data: null});
				  
				});
	},

}					