let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/DateTimeControllers');

router.get('/dateTime', list); //Whole array
module.exports =  router;