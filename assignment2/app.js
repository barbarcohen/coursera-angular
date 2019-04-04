(function (){
  "use strict";


  angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  ToBuyController.$inject = ["ShoppingListCheckOffService"]
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getListToBuy();

    toBuyList.buyItem = function(index){
        ShoppingListCheckOffService.buyItem(index);
    };
  };


  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.getBoughtItems = function() {
      return ShoppingListCheckOffService.getListAlreadyBought();
    }
  };


  function ShoppingListCheckOffService(){
    var service = this;
    var listToBuy = [
      {name: "cookies", quantity: "10"},
      {name: "chocolates", quantity: "2"},
      {name: "beers", quantity: "5"},
      {name: "snacks", quantity: "4"},
      {name: "chips", quantity: "10"}
    ];
    var listAlreadyBought = [];

    service.buyItem = function(index){
        var removedItems = listToBuy.splice(index,1);
        listAlreadyBought = listAlreadyBought.concat(removedItems);
    };

    service.getListToBuy = function(){
      return listToBuy;
    };

    service.getListAlreadyBought = function(){
      return listAlreadyBought;
    };
  };

})();
