let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/TicketControllers');

router.get('/tickets', list); //Whole array
module.exports =  router;