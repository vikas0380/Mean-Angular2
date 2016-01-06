import {$http} from './xhr-factory';
 
export const HerosFactory = {
 
  getAll :function(){
  	return $http.get('/api/v1/heros');
  },
 
  get:function(id){
  	return $http.get('/api/v1/hero/'+id);
  },
 
  save: function(hero){
  	return $http.post('/api/v1/hero', hero);
  },
 
  update: function(hero){
  	return $http.put('/api/v1/heros/'+hero._id, hero);
  },
 
  delete: function(hero){
  	return $http.delete('/api/v1/todo/'+hero._id, hero);
  }
 
};