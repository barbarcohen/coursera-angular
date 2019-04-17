(function(){
  "use strict";

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSerchService", MenuSerchService)
  .constant("ApiBasePath","https://davids-restaurant.herokuapp.com");


  NarrowItDownController.$inject = ["MenuSerchService", "$scope"];
  function NarrowItDownController(MenuSerchService, $scope){
    var narrowItController = this;

    var found;

    narrowItController.getMatchedMenuItems = function(){
      var promise = MenuSerchService.getMatchedMenuItems($scope.searchTerm);
      promise.then(function(response){
        found = response;
      }).catch(function(error){
        console.log("error while retrieving the data");
        console.log(error);
      });
    };

    narrowItController.list = function(){
      return found;
    }
  };

  MenuSerchService.$inject = ["$http", "ApiBasePath"]
  function MenuSerchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function (response){
          // process result and only keep items that match
          var items = response.data.menu_items;
          var foundItems = new Array();
          for(var index = 0; index < items.length; ++index){
            if(items[index].description.includes(searchTerm)){
              foundItems.push(items[index]);
            }
          }
          // return processed items
          return foundItems;
        });
      return response;
    };


  };
})();
