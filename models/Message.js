let mongoose = require('mongoose');
let schema = require('../schemas/Messages');

module.exports =  mongoose.model('Message', schema);