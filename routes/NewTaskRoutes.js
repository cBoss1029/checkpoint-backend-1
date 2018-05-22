let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/NewTaskController');

router.get('/newTasks', list); //Whole array
module.exports =  router;