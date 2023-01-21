const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	id : {
		type :  Number,
		default : true,

	},
	title : {
		type :  String,
		required : [true, "Title should be there"]
		
	}

})

module.exports = mongoose.model('Book',BookSchema);