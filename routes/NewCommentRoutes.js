let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/NewCommentControllers');

router.get('/newComments', list); //Whole array
module.exports =  router;