let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/FoxControllers');

router.get('/foxes', list); //Whole array
// router.get('/fox/:id', show); // Single item
// router.post('/foxes', create);
// router.put('/fox/:id', update);
// router.delete('/fox/:id', remove);
module.exports =  router;