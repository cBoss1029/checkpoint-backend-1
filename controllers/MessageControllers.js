let MessageModel = require('../models/Message');

module.exports.list =  function list(request, response) {
    MessageModel.find({}).exec()
    .then(messages => {
        response.json(messages);
    });
}
module.exports.show =  function show(request, response) {
    const id =  request.params.id
    MessageModel.findById(id).exec()
    .then(message => {
        response.json(message);
    })
}
module.exports.create =  function create(request, response) {
    let newMessage = new MessageModel(
        request.body
    );
    newMessage.save()
    .then(savedMessage => {
        response.json(savedMessage);
    });

}
