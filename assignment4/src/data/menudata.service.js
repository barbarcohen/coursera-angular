(function(){
  'use strict';

  angular.module('data')
  .service('MenuAppService', MenuAppService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuAppService.$inject = ['$http', 'ApiBasePath']
  function MenuAppService($http, ApiBasePath){
    var MenuAppService = this;

    MenuAppService.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      }).then(function (response){
        return response.data;
      });
    };

    MenuAppService.getItemsForCategory = function(categoryShortName){
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json?category='+categoryShortName)
      }).then(function (response){
        console.log(response.data);
        return response.data;
      });
    };
  }
})();
