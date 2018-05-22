let express = require("express");
const app = express();
let bodyParser = require("body-parser");
let MessageRoutes = require('../routes/MessageRoutes');
let OrderRoutes = require('../routes/OrderRoutes');
let TaskRoutes = require('../routes/TaskRoutes');
let FoxRoutes = require('../routes/FoxRoutes');
let NewCommentRoutes = require('../routes/NewCommentRoutes');
let NewOrderRoutes = require('../routes/NewOrderRoutes');
let NewTaskRoutes = require('../routes/NewTaskRoutes');
let TicketRoutes = require('../routes/TicketRoutes');
let DateTimeRoutes = require('../routes/DateTimeRoutes');
let Message = require('../models/Message');
let Order = require('../models/Order');
let Task = require('../models/Task');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cBoss:Drowssap21@ds123500.mlab.com:23500/advanced-checkpoint-1");


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);
app.use(FoxRoutes);
app.use(DateTimeRoutes);
app.use(TicketRoutes);
app.use(NewOrderRoutes);
app.use(NewTaskRoutes);
app.use(NewCommentRoutes);



// let {tasks, orders, messages} = require('../server.state.js')

// tasks.forEach((task) =>{
//     const newTask = new Task({
//         task: task.task,
//         date: task.date,
//     })

//     newTask.save().then(savedTask =>{
//         response.json(savedTask)
//     })
// })
// const fs = require('fs')



app.listen(3001, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Listening on port 3001");
});