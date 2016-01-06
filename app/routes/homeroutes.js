
var express = require('express');
var router = express.Router();
 var path = require('path');
 var controller=require("../controllers/home")
 
/* GET home page. */

router.get('/', controller.get);

module.exports = router