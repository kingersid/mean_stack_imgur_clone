var mongoose = require('mongoose')

Schema = mongoose.Schema

var path = require('path')

var PostSchema = new Schema({
	title : {type: String},
	author : {type: String},
	text:{type:String},
	tags : {type:String, default:'tech'},
	views : {type:Number, default:0},
	likes:{type:Number,default:0},
	timestamp:{type :Date, default: Date.now}
})
PostSchema.virtual('uniqueId').get(function() {
	this.filename.replace(path.extname(this.filename),'');

});

module.exports = mongoose.model('Post', PostSchema);
