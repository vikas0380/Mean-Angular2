// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HeroSchema = new Schema({
  id: String,
  name: String  
});

HeroSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Heros', HeroSchema);

