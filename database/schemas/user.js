/**
 * Created by usuario on 19/04/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    data :Object
});

var User = mongoose.model('User', userSchema);

module.exports = User;