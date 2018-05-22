let fetch = require('node-fetch');

module.exports.list =  function list(request, response) {
    fetch("https://randomfox.ca/floof/")
    .then(response=>response.json()).then(d=>response.json(d.image)); 
 };	

