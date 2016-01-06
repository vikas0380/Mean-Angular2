var express = require('express');
var router = express.Router();
 var path = require('path');
 var controller=require("../controllers/apiControler")
 
/* GET home page. */
router.get('/heros', controller.get);
module.exports = router;
