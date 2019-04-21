(function(){
  "use strict";

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSerchService", MenuSerchService)
  .constant("ApiBasePath","https://davids-restaurant.herokuapp.com")
  .directive("foundItems", FoundItems);


  NarrowItDownController.$inject = ["MenuSerchService", "$scope"];
  function NarrowItDownController(MenuSerchService, $scope){
    var narrowItController = this;

    var found = [];
    narrowItController.getMatchedMenuItems = function(){
      var searchTerm = $scope.searchTerm

        var promise = MenuSerchService.getMatchedMenuItems(searchTerm);
        promise.then(function(response){
          found = response;
        }, function(error){
          console.log("error while retrieving the data");
        });
    };

    narrowItController.remove = function (index){
      found.splice(index, 1);
    };

    narrowItController.found = function(){
      return found;
    };

    narrowItController.foundCount = function(){
      return MenuSerchService.getFoundCount();
    }

  }

  MenuSerchService.$inject = ["$http", "ApiBasePath"];
  function MenuSerchService($http, ApiBasePath){
    var service = this;
    var foundCount = -1;
    service.getMatchedMenuItems = function(searchTerm){
      var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function (response){
          // process result and only keep items that match
          var foundItems = [];
          if(searchTerm == undefined || searchTerm == ""){
            foundItems = [];
          } else {
            var items = response.data.menu_items;
            for(var index = 0; index < items.length; ++index){
              if(items[index].description.includes(searchTerm)){
                foundItems.push(items[index]);
              }
            }
          }
          foundCount = foundItems.length;
          return foundItems;
        });
      return response;
    };

    service.getFoundCount = function(){
      return foundCount;
    };
  }

  function FoundItems(){
    var ddo = {
        restrict: "E",
        templateUrl: "found-items.html",
        scope: {
          "foundItems": "<",
          "onRemove": "&",
          "foundCount": "&"
        },
        controller: FoundItemsController,
        controllerAs: "dirController",
        bindToController: true
    };
    return ddo;
  }

  function FoundItemsController(){
    var dirController = this;
  }
})();
