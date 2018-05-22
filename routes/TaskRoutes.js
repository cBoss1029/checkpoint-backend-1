let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/TaskControllers');

router.get('/tasks', list); //Whole array
router.get('/task/:id', show); // Single item
router.post('/tasks', create);
// router.put('/task/:id', update);
// router.delete('/task/:id', remove);
module.exports =  router;