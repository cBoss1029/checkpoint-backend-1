let mongoose = require('mongoose');
let schema = require('../schemas/Tasks');

module.exports =  mongoose.model('Task', schema);