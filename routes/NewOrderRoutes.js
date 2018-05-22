let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/NewOrderControllers');

router.get('/newOrders', list); //Whole array
module.exports =  router;