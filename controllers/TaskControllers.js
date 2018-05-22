let TaskModel = require('../models/Task');


module.exports.list =  function list(request, response) {
    console.log('test')
    TaskModel.find({}).exec()
    .then(tasks => {
        response.json(tasks);
    });
}
module.exports.show =  function show(request, response) {
    const id =  request.params.id
    TaskModel.findById(id).exec()
    .then(task => {
        response.json(task);
    })
}
module.exports.create =  function create(request, response) {
    let newTask = new TaskModel(
        request.body
    );
    newTask.save()
    .then(savedTask => {
        response.json(savedTask);
    });

}
