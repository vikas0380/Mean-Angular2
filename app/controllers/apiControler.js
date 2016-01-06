  var mongoose = require('mongoose'),
  Heros = mongoose.model('Heros');
  var path = require('path');

module.exports =  {
    get : function(req,res){
          Heros.find(function(heros,err) {
            if (err) {
                res.send(err);
            } else {
                res.json(heros);
            }
           });
        }
    };
