(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items){
    var itemsCtrl = this;
    console.log(items);
    itemsCtrl.items = items.menu_items;
  }
})();
