let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/MessageControllers');

router.get('/messages', list); //Whole array
router.get('/message/:id', show); // Single item
router.post('/messages', create);
// router.put('/message/:id', update);
// router.delete('/message/:id', remove);
module.exports =  router;