
  var mongoose = require('mongoose');
  var path = require('path');

module.exports =  {
    get : function(req,res){
        res.sendFile(path.resolve('./app/views/index.html'));
    }
    };


