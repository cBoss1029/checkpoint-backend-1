let mongoose = require('mongoose');

const schema = new mongoose.Schema({
task: {
required: false,
type: String
 },
date: {
required: false,
type: String
},

});

module.exports =  schema;