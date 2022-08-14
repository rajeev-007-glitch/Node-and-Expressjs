const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must provide name...'],
		trim: true,
		maxlength: [30, 'Maximum length can be 30...']
	},
	completed: {
		type: Boolean,
		default: false
	}
});
module.exports = mongoose.model('Task', TaskSchema)
