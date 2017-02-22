'use strict';

angular.module('confusionApp')
.constant("baseURL","mongodb://tst:Aireverse2@ds011873.mlab.com:11873/heroku_fqk7wsks")

.service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
  this.getDishes = function(){
      return $resource(baseURL+"dishes/:id",null,{'update':{method:'PUT' }});
  };

  this.getPromotions = function(){
      return $resource(baseURL+"promotions/:id",null,{'update':{method:'PUT' }});
  };

  this.getDish = function (index) {
      return $http.get(baseURL+"dishes/"+index);

  };

}]);

/*	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);
    */